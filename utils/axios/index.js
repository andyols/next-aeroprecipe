import axios from 'axios'

export const getAllRecipes = async () => axios('/api/recipes/get')

export const deleteRecipe = async id =>
  axios({
    url: '/api/recipes/delete',
    method: 'DELETE',
    data: { id },
  })
