// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = 'MultipleProducts',
  } = formData;

  const filters = [...selectedPreferences, ...selectedFeatures];

  const matchedProducts = products
    .map(product => {
      const totalMatches = filters.reduce((count, filter) => {
        const inPreferences = product.preferences.includes(filter);
        const inFeatures = product.features.includes(filter);
        return count + (inPreferences || inFeatures ? 1 : 0);
      }, 0);

      return { ...product, score: totalMatches };
    })
    .filter(product => product.score > 0);

  if (selectedRecommendationType === 'SingleProduct') {
    const bestProduct = matchedProducts.reduce((prev, current) => {
      if (current.score > prev.score) return current;
      if (current.score === prev.score) return current;
      return prev;
    }, matchedProducts[0]);

    return bestProduct ? [bestProduct] : [];
  }

  return matchedProducts.sort((a, b) => b.score - a.score);
};

export default { getRecommendations };
