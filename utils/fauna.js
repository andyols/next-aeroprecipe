import { CREATE_RECIPE, GET_RECIPES } from './graphql'
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

const createRecipe = async recipe => {
  const {
    title,
    creator,
    method,
    coffee,
    grind,
    water,
    temperature,
    time,
  } = recipe

  try {
    const { createRecipe: createdRecipe } = await sendFaunaQuery(
      CREATE_RECIPE,
      {
        title,
        creator,
        method,
        coffee,
        grind,
        water,
        temperature,
        time,
      }
    )
    return customResponse(200, createdRecipe)
  } catch (err) {
    console.error(err)
    return customResponse(500, {
      msg: 'Something went wrong...',
    })
  }
}

const updateRecipe = async () => {}
const deleteRecipe = async () => {}

export { getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe }
