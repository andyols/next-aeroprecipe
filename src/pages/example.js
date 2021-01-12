import {
  Stack,
  Text,
  Code,
  Heading,
  Link as ChakraLink,
  Box,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const Example = () => {
  return (
    <Layout title={'This is the example page'}>
      <Stack spacing={5}>
        <Heading>Hello from the example page!</Heading>
        <Box>
          <Text>
            We are now at <Code>pages/example.js</Code> also wrapped with{' '}
            <Code>components/Layout.jsx</Code>
          </Text>
          <Text>
            You can navigate back to the home page clicking{' '}
            <Link href='/'>
              <ChakraLink fontWeight='bold'>here</ChakraLink>
            </Link>{' '}
            or by clicking the title in the header.
          </Text>
        </Box>
      </Stack>
    </Layout>
  )
}

export default Example
