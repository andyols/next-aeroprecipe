import axios from 'axios'

const customResponse = (status, body) => ({
  status,
  body: JSON.stringify(body),
})

const sendFaunaQuery = async (query, variables) => {
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

export { customResponse, sendFaunaQuery }
