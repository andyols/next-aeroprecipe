import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import { Stack, Heading, Text } from '@chakra-ui/react'
const Recipe = () => {
  const { id } = useRouter().query
  return (
    <Layout title={'Welcome to AeroPrecipe'}>
      <Stack spacing={2}>
        <Heading>Single Recipe</Heading>
        <Text pb={3}>Recipe id: {id}</Text>
      </Stack>
    </Layout>
  )
}

export default Recipe
