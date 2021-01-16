import faunadb, { query as q } from 'faunadb'

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET })

export const getRecipes = async () => {
  const { data } = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('recipe'))),
      q.Lambda(recipe => q.Get(recipe))
    )
  )
  const recipes = data.map(recipe => {
    recipe.id = recipe.ref.id
    delete recipe.ref
    return recipe
  })
  return recipes
}

export const findRecipe = async id =>
  await client.query(q.Get(q.Ref(q.Collection('recipe'), id)))

export const createRecipe = async data =>
  await client.query(q.Create(q.Collection('recipe'), { data }))

export const deleteRecipe = async id =>
  await client.query(q.Delete(q.Ref(q.Collection('recipe'), id)))

export const updateRecipe = async data =>
  await client.query(q.Update(q.Ref(q.Collection('recipe'), data.id), { data }))
