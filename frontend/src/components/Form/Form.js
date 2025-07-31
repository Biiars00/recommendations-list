// Form.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ setRecommendations }) {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.selectedPreferences.length === 0 || 
      formData.selectedFeatures.length === 0 || 
      !formData.selectedRecommendationType
    ) {
      toast.info('Você deve selecionar ao menos uma preferência, funcionalidade e tipo de recomendação!');
      return; 
    } 

    const dataRecommendations = getRecommendations(formData);
    
    if (dataRecommendations && dataRecommendations.length > 0){
      setRecommendations(dataRecommendations);
      toast.success('Recomendações obtidas com sucesso!');

      resetForm();
    } else {
      toast.error('Nenhuma recomendação encontrada para os critérios selecionados.');
    }
  };

  return (
    <form
      className="max-w-md mx-auto px-4 pb-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        selected={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton 
        type="submit"
        text="Obter recomendação" 
      />
    </form>
  );
}

export default Form;
