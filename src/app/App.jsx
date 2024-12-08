import React from 'react';
import { Header, Footer } from './components/layout';
import { TextInput } from './components/input';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-vinted-primary mb-8">
          Vinited
        </h1>
        <TextInput />
      </main>
      <Footer />
    </div>
  );
}

export default App;
