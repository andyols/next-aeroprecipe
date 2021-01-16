import { Layout } from '@/components/Layout'
import { Stack, Heading, Text } from '@chakra-ui/react'
import { findRecipe } from '@/utils/queries'

const Recipe = ({ recipe }) => {
  return (
    <Layout title={recipe.title} align='center' textAlign='center'>
      <Stack spacing={2}>
        <Heading>{recipe.title}</Heading>
        <Text pb={3}>{recipe.creator}</Text>
      </Stack>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id
    const { data: recipe } = await findRecipe(id)
    return {
      props: { recipe },
    }
  } catch (err) {
    console.error(err)
    context.res.statusCode = 302
    context.res.setHeader('Location', '/')
    return { props: {} }
  }
}

export default Recipe
