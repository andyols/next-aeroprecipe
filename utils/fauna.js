import { GET_RECIPES } from './graphql'
import { sendFaunaQuery, customResponse } from './functions'

const getRecipes = async () => {
  try {
    const res = await sendFaunaQuery(GET_RECIPES)
    const data = res.allRecipes.data
    return customResponse(200, data)
  } catch (err) {
    console.error(err)
    return customResponse(500, { msg: 'Something went wrong' })
  }
}

const getRecipeById = async () => {}
const createRecipe = async () => {}
const updateRecipe = async () => {}
const deleteRecipe = async () => {}

export { getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe }
