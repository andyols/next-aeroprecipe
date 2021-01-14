import axios from 'axios'

export const getAllRecipes = async () => await axios('/api/recipes/get')

export const createRecipe = async data =>
  await axios({
    url: '/api/recipes/create',
    method: 'POST',
    data,
  })

export const deleteRecipe = async id =>
  await axios({
    url: '/api/recipes/delete',
    method: 'DELETE',
    data: { id },
  })
