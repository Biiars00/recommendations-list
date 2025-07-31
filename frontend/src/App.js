import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recommendations, setRecommendations ] = useState([])

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Recomendador de Produtos RD Station</h1>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-6xl">
        <div className="mb-6">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed">
            <span className="font-semibold text-gray-900">Bem-vindo ao Recomendador de Produtos RD Station. </span> 
            Aqui você pode encontrar uma <span className="text-primary font-medium">variedade de produtos</span> da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. <span className="font-medium">De CRM a Marketing, de Conversas a Inteligência Artificial</span>, temos uma solução para ajudar você a alcançar seus objetivos. 
            Use o formulário abaixo para selecionar suas <span className="italic">preferências e funcionalidades desejadas</span> e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form setRecommendations={setRecommendations} />
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
