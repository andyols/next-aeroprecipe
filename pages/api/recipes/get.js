import { GET_RECIPES } from '@/utils/queries'
import faunaQuery from '@/utils/query'

export default async (req, res) => {
  if (req.method !== 'GET')
    return res.status(405).json({ msg: 'Method not allowed' })

  try {
    const { allRecipes } = await faunaQuery(GET_RECIPES)
    return res.status(200).json(allRecipes.data)
  } catch (err) {
    console.error(err)
    return res.status(200).json({ msg: 'Something went wrong' })
  }
}
