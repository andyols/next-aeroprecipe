import { deleteRecipe } from '../../utils/fauna'

export default async (req, res) => {
  if (req.method !== 'DELETE')
    return res.status(405).json({ msg: 'Method not allowed' })

  try {
    const deletedRecipe = await deleteRecipe()
    return res.status(200).json(deletedRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
