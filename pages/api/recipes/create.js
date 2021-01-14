import { CREATE_RECIPE } from '@/utils/graphql'
import { sendFaunaQuery } from '@/utils/functions'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(405).json({ msg: 'Method not allowed' })

  const {
    title,
    creator,
    method,
    coffee,
    grind,
    water,
    temperature,
    time,
  } = req.body

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
    return res.status(200).json(createdRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
