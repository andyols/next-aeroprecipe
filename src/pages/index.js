import {
  Box,
  Code,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const Index = () => (
  <Layout title={'Home'}>
    <Stack spacing={5}>
      <Heading>Welcome to Next.js + Chakra Starter!</Heading>
      <Box>
        <Text>
          We are currently at <Code>pages/index.js</Code> wrapped with{' '}
          <Code>components/Layout.jsx</Code>
        </Text>
        <Text>
          Try navigating to to another page by clicking{' '}
          <Link href='/example'>
            <ChakraLink fontWeight='bold'>here!</ChakraLink>
          </Link>
        </Text>
      </Box>
    </Stack>
  </Layout>
)

export default Index
