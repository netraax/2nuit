import { patterns, proPatterns } from './patterns';
import _ from 'lodash';

// Fonction principale d'analyse pour les données de base
export const analyzeText = (text) => {
  const result = {
    profile: {},
    sales: [],
    evaluations: [],
    countries: {},
    statistics: {}
  };

  // Extraction du nom de la boutique
  const shopNameMatch = text.match(patterns.shopName);
  if (shopNameMatch) {
    result.profile.shopName = shopNameMatch[1].trim();
  }

  // Extraction des abonnés/abonnements
  const followersMatch = text.match(patterns.followers);
  const followingMatch = text.match(patterns.following);
  if (followersMatch) result.profile.followers = parseInt(followersMatch[1]);
  if (followingMatch) result.profile.following = parseInt(followingMatch[1]);

  // Extraction des évaluations
  const ratingsMatch = text.match(patterns.ratings);
  if (ratingsMatch) {
    result.profile.memberRatings = parseInt(ratingsMatch[1]);
    result.profile.autoRatings = parseInt(ratingsMatch[2]);
    result.profile.totalRatings = result.profile.memberRatings + result.profile.autoRatings;
  }

  // Extraction des dates d'évaluation
  let evaluationMatch;
  while ((evaluationMatch = patterns.evaluationPattern.exec(text)) !== null) {
    result.evaluations.push({
      time: parseInt(evaluationMatch[1]),
      unit: evaluationMatch[2]
    });
  }

  // Détection des pays via les langues
  Object.entries(patterns.languagePatterns).forEach(([keywords, country]) => {
    const regex = new RegExp(keywords, 'gi');
    const matches = text.match(regex);
    if (matches) {
      result.countries[country] = matches.length;
    }
  });

  // Calcul des statistiques
  result.statistics.totalSales = result.profile.totalRatings || 0; // Selon la règle: évaluations = ventes
  result.statistics.salesByCountry = result.countries;

  return result;
};

// Fonction d'analyse étendue pour les données pro
export const analyzeProText = (text) => {
  // On commence par l'analyse de base
  const baseResult = analyzeText(text);
  const proResult = {
    ...baseResult,
    transactions: [],
    balances: {}
  };

  // Analyse des transactions
  let transactionMatch;
  while ((transactionMatch = proPatterns.transactionType.exec(text)) !== null) {
    const transaction = {
      type: transactionMatch[1],
      date: null,
      amount: null
    };

    // Recherche du montant associé
    const amountMatch = proPatterns.transactionAmount.exec(text);
    if (amountMatch) {
      transaction.amount = parseFloat(amountMatch[1].replace(',', '.'));
    }

    // Recherche de la date associée
    const dateMatch = proPatterns.transactionDate.exec(text);
    if (dateMatch) {
      transaction.date = dateMatch[1];
    }

    proResult.transactions.push(transaction);
  }

  // Extraction des soldes
  const initialBalanceMatch = text.match(proPatterns.initialBalance);
  const finalBalanceMatch = text.match(proPatterns.finalBalance);

  if (initialBalanceMatch) {
    proResult.balances.initial = parseFloat(initialBalanceMatch[1].replace(',', '.'));
  }
  if (finalBalanceMatch) {
    proResult.balances.final = parseFloat(finalBalanceMatch[1].replace(',', '.'));
  }

  // Calcul des statistiques pro
  proResult.statistics.totalRevenue = _.sumBy(proResult.transactions, 
    transaction => transaction.type === 'Vente' ? transaction.amount : 0
  );
  
  proResult.statistics.averageTransactionAmount = proResult.transactions.length ? 
    proResult.statistics.totalRevenue / proResult.transactions.length : 
    0;

  return proResult;
};
