import axios from 'axios'

export const getAllRecipes = async () =>
  await axios({ url: '/api/recipes/get', method: 'GET' })

export const createRecipe = async data =>
  await axios({
    url: '/api/recipes/create',
    method: 'POST',
    data,
  })

export const findRecipe = async id => {
  try {
    return await axios({
      url: `/api/recipes/find`,
      method: 'GET',
      data: { id },
    })
  } catch (err) {
    console.error(err)
  }
}

export const deleteRecipe = async id =>
  await axios({
    url: '/api/recipes/delete',
    method: 'DELETE',
    data: { id },
  })
