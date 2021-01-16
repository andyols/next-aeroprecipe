import { updateRecipe } from '@utils/queries'

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
    const { data } = await updateRecipe({
      id,
      title,
      creator,
      method,
      coffee,
      grind,
      water,
      temperature,
      time,
    })
    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}
