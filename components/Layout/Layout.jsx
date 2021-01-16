import Head from 'next/head'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import { Header, Container, Footer } from '.'

const Layout = ({ title, children, ...rest }) => {
  const bg = useColorModeValue('gray.100', 'gray.800')
  const color = useColorModeValue('black', 'gray.100')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  return (
    <Flex direction='column' minH='100vh' bg={bg} color={color} {...rest}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header borderColor={borderColor} />

      <Container
        px={5}
        py={7}
        w={{ base: '100%', sm: '65%', lg: '55%' }}
        maxW={'700px'}
      >
        {children}
      </Container>

      <Footer borderColor={borderColor}>Made with Next.js + chakra</Footer>
    </Flex>
  )
}
export default Layout
