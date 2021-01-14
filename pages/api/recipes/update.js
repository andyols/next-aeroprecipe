import { UPDATE_RECIPE } from '@/utils/graphql'
import { sendFaunaQuery } from '@/utils/functions'

export default async (req, res) => {
  if (req.method !== 'PUT')
    return res.status(405).json({ msg: 'Method not allowed' })

  const {
    id,
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
    const { updateRecipe: updatedRecipe } = await sendFaunaQuery(
      UPDATE_RECIPE,
      {
        id,
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
    return res.status(200).json(updatedRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
