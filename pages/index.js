import { Heading, Stack, Text, Button } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { Recipes } from '@/components/Recipes'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { getAllRecipes } from '@/utils/axios'

const Index = () => {
  const { data: recipes, error, isLoading, isError } = useQuery(
    'recipes',
    getAllRecipes
  )

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>{error}</Text>

  return (
    <Layout title={'Welcome to AeroPrecipe'}>
      <Stack spacing={3}>
        <Heading>Welcome to AeroPrecipe!</Heading>
        <Text>Browse and create new Aeropress recipes</Text>
        <Link href='/create'>
          <Button colorScheme='teal' maxW='200px'>
            New Recipe
          </Button>
        </Link>
        {recipes && <Recipes recipes={recipes.data} />}
      </Stack>
    </Layout>
  )
}

export default Index
