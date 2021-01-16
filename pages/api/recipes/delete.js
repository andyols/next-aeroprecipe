import { deleteRecipe } from '@/utils/queries'

export default async (req, res) => {
  if (req.method !== 'DELETE')
    return res.status(405).json({ msg: 'Method not allowed' })

  const { id } = req.body

  try {
    const { ref } = await deleteRecipe(id)
    return res.status(200).json({ msg: `Recipe ${ref.id} deleted` })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
