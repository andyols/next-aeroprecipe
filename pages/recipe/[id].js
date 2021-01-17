import { Layout } from '@components/Layout'
import { Stack, Heading, Text } from '@chakra-ui/react'
import { q_findRecipe } from '@utils/queries'

export default function Page({ recipe }) {
  return (
    <Layout title={recipe.title} align='center' textAlign='center'>
      <Stack spacing={2}>
        <Heading>{recipe.title}</Heading>
        <Text pb={3}>{recipe.creator}</Text>
      </Stack>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id } }) {
  try {
    const { data: recipe } = await q_findRecipe(id)
    return {
      props: { recipe },
    }
  } catch (err) {
    return { notFound: true }
  }
}
