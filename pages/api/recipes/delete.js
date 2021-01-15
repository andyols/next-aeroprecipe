import { DELETE_RECIPE } from '@/utils/queries'
import faunaQuery from '@/utils/query'

export default async (req, res) => {
  if (req.method !== 'DELETE')
    return res.status(405).json({ msg: 'Method not allowed' })

  const { id } = req.body

  try {
    const { deleteRecipe: deletedRecipe } = await faunaQuery(DELETE_RECIPE, {
      id,
    })

    return res.status(200).json(deletedRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
