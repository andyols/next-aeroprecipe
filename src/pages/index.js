import { Heading, Stack, Text, Button } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import useSWR from 'swr'
import { Recipes } from '../components/Recipes'

const Index = () => {
  const { data: recipes } = useSWR('/api/getRecipes')
  return (
    <Layout title={'Welcome to AeroPrecipe'}>
      <Stack spacing={3}>
        <Heading>Welcome to AeroPrecipe!</Heading>
        <Text>Browse and create new Aeropress recipes</Text>
        <Button size='sm' colorScheme='blue' maxW='200px'>
          New Recipe
        </Button>
        {recipes && <Recipes recipes={recipes} />}
      </Stack>
    </Layout>
  )
}

export default Index
