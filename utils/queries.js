import faunadb, { query as q } from 'faunadb'

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET })

export const q_getRecipes = async () => {
  const { data } = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('recipe'))),
      q.Lambda(recipe => q.Get(recipe))
    )
  )
  const recipes = data.map(recipe => {
    recipe.data.id = recipe.ref.id
    delete recipe.ref
    return recipe
  })
  return recipes
}

export const q_findRecipe = async id => {
  let recipe = await client.query(q.Get(q.Ref(q.Collection('recipe'), id)))
  recipe.data.id = recipe.ref.id
  delete recipe.ref
  return recipe
}

export const q_createRecipe = async data =>
  await client.query(q.Create(q.Collection('recipe'), { data }))

export const q_deleteRecipe = async id =>
  await client.query(q.Delete(q.Ref(q.Collection('recipe'), id)))

export const q_updateRecipe = async data => {
  return await client.query(
    q.Update(q.Ref(q.Collection('recipe'), data.id), { data })
  )
}
