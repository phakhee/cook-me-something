export const formatIngredients = (ingredients, joinBy) => {
  return ingredients.replace(/[^a-zA-Z\s]/g, '').split(" ").join(joinBy)
};