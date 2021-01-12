import { Heading, Stack, Text, Button } from '@chakra-ui/react'
import { Layout } from '../components/Layout'

const Index = () => (
  <Layout title={'Welcome to AeroPrecipe'}>
    <Stack spacing={3}>
      <Heading>Welcome to AeroPrecipe!</Heading>
      <Text>Browse and create new Aeropress recipes</Text>
      <Button>New Recipe</Button>
    </Stack>
  </Layout>
)

export default Index
