import { getRecipes } from '@/utils/fauna'

export default async (req, res) => {
  if (req.method !== 'GET')
    return res.status(405).json({ msg: 'Method not allowed' })

  try {
    const { status, body } = await getRecipes()
    return res.status(status).json(body)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
