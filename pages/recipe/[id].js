import { Heading, Stack, Text } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { q_findRecipe } from '@utils/queries'

export default function Page({ recipe }) {
  console.log('📝 ~ file: [id].js ~ line 6 ~ recipe', recipe)
  return (
    <Layout title={recipe.information.title} align='center' textAlign='center'>
      <Stack spacing={2}>
        <Heading>{recipe.information.title}</Heading>
        <Text pb={3}>{recipe.information.creator}</Text>
      </Stack>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id } }) {
  try {
    const { data: recipe } = await q_findRecipe(id)
    return {
      props: { recipe }
    }
  } catch (err) {
    return { notFound: true }
  }
}
