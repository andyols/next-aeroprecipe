import { Divider, Heading, Spinner, Stack, Text } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { Recipes } from '@components/Feed'
import { getAllRecipes } from '@utils/api'
import { useQuery } from 'react-query'

export default function Homepage() {
  const { data: recipes, error, isLoading, isError } = useQuery(
    'recipes',
    getAllRecipes
  )

  const GeneratedRecipes = () => {
    if (isLoading) return <Spinner size='xl' alignSelf='center' />
    if (isError) return <Text>{error}</Text>
    return <Recipes recipes={recipes.data} />
  }

  return (
    <Layout title={'Welcome to AeroPrecipe'}>
      <Stack spacing={2}>
        <Heading>Welcome to AeroPrecipe!</Heading>
        <Divider />
        <Text pb={3}>Browse and create new Aeropress recipes</Text>
        {<GeneratedRecipes />}
      </Stack>
    </Layout>
  )
}
