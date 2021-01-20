import { q_updateRecipe } from '@utils/queries'

export default async (req, res) => {
  if (req.method !== 'PUT')
    return res.status(405).json({ msg: 'Method not allowed' })

  const { information, instructions } = req.body

  try {
    const { data } = await q_updateRecipe({
      information,
      instructions
    })
    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
