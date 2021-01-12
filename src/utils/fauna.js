const faunadb = require('faunadb')
const secret = process.env.FAUNA_SECRET
const faunaClient = new faunadb.Client({ secret })
const q = faunadb.query

const getRecipes = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('recipes'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  )
  return data.map(recipe => {
    recipe.id = recipe.ref.id
    delete recipe.ref
    return recipe
  })
}
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
