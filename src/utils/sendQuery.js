import axios from 'axios'

export default async function (query, variables) {
  const {
    data: { data, errors },
  } = await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET}`,
    },
    data: { query, variables },
  })
  if (errors) {
    console.error(errors)
    throw new Error('Something went wrong')
  }
  return data
}
