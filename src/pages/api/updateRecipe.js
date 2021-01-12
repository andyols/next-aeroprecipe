import { updateRecipe } from '../../utils/fauna'

export default async (req, res) => {
  if (req.method !== 'PUT')
    return res.status(405).json({ msg: 'Method not allowed' })

  try {
    const updatedRecipe = await updateRecipe()
    return res.status(200).json(updatedRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
