// Patterns pour l'extraction des données Vinted
export const patterns = {
  // Informations du profil
  shopName: /^([^\n]+)(?=\nÀ propos)/,
  followers: /(\d+)\s*Abonnés/,
  following: /(\d+)\s*Abonnement/,
  ratings: /Évaluations des membres \((\d+)\)\s*Évaluations automatiques \((\d+)\)/,

  // Articles en vente
  itemPattern: /([^,]+), prix : (\d+,\d+) €, marque : ([^,]+), taille : ([^\n]+)/g,

  // Évaluations et dates
  evaluationPattern: /il y a (\d+) (jour|jours|semaine|semaines|mois|an|ans)/g,

  // Détection langues/pays
  languagePatterns: {
    'merci|parfait': 'France',
    'thank you': 'UK',
    'grazie|perfetto': 'Italie',
    'gracias|perfecto': 'Espagne',
    'danke': 'Allemagne'
  }
};

// Patterns supplémentaires pour l'analyse pro
export const proPatterns = {
  transactionType: /^\* \*\*(Vente|Achat|Commande d'un Boost)\*\*/gm,
  transactionAmount: /\*\*([-]?[\d,]+) €\*\*/g,
  transactionDate: /(\d{1,2} \w+ \d{4})/g,
  initialBalance: /Solde initial\s*([\d,]+) €/,
  finalBalance: /Solde final\s*([\d,]+) €/
};
