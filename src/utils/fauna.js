const faunadb = require('faunadb')
const secret = process.env.FAUNA_SECRET
const faunaClient = new faunadb.Client({ secret })
const q = faunadb.query

const getRecipes = async () => {}
const getRecipeById = async () => {}
const createRecipe = async () => {}
const updateRecipe = async () => {}
const deleteRecipe = async () => {}

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}
