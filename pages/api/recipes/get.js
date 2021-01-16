import { getRecipes } from '@/utils/queries'

export default async (req, res) => {
  if (req.method !== 'GET')
    return res.status(405).json({ msg: 'Method not allowed' })

  try {
    const recipes = await getRecipes()
    return res.status(200).json(recipes)
  } catch (err) {
    console.error(err)
    return res.status(200).json({ msg: 'Something went wrong' })
  }
}
