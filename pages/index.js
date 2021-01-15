import { Heading, Stack, Text } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { Recipes } from '@/components/Recipes'
import { useQuery } from 'react-query'
import { getAllRecipes } from '@/utils/api'

const Index = () => {
  const { data: recipes, error, isLoading, isError } = useQuery(
    'recipes',
    getAllRecipes
  )

  const GeneratedRecipes = () => {
    if (isLoading) return <Text>Loading...</Text>
    if (isError) return <Text>{error}</Text>
    return <Recipes recipes={recipes.data} />
  }

  return (
    <Layout title={'Welcome to AeroPrecipe'}>
      <Stack spacing={2}>
        <Heading>Welcome to AeroPrecipe!</Heading>
        <Text pb={3}>Browse and create new Aeropress recipes</Text>
        {<GeneratedRecipes />}
      </Stack>
    </Layout>
  )
}

export default Index
