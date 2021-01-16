import axios from 'axios'
import { q_findRecipe } from './queries'

export const getAllRecipes = async () =>
  await axios({ url: '/api/recipes/get', method: 'GET' })

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
