import { createRecipe } from '@/utils/fauna'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(405).json({ msg: 'Method not allowed' })

  try {
    const newRecipe = await createRecipe(req.body)
    return res.status(200).json(newRecipe)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong!' })
  }
}
