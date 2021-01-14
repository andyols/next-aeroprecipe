import { FIND_RECIPE } from '@/utils/graphql'
import { sendFaunaQuery } from '@/utils/functions'

export default async (req, res) => {
  if (req.method !== 'GET')
    return res.status(405).json({ msg: 'Method not allowed' })

  const { id } = req.body

  try {
    // TODO: Make this work... for some reason fauna is sending back null
    // exact query works fine in graphql playground... can't pinpoint the problem
    const { findRecipeByID: foundRecipe } = await sendFaunaQuery(FIND_RECIPE, {
      id,
    })

    return res.status(200).json(foundRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
