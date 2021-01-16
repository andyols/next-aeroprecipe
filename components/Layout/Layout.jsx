import Head from 'next/head'
import { Flex, useColorMode } from '@chakra-ui/react'
import { Header, Container, Footer } from '.'

const Layout = ({ title, children, ...rest }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.100', dark: 'gray.800' }
  const color = { light: 'black', dark: 'gray.100' }
  const borderColor = { light: 'gray.200', dark: 'gray.700' }
  return (
    <Flex
      direction='column'
      minH='100vh'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...rest}
    >
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header borderColor={borderColor[colorMode]} />

      <Container
        px={5}
        py={7}
        w={{ base: '100%', sm: '65%', lg: '55%' }}
        maxW={'700px'}
      >
        {children}
      </Container>

      <Footer borderColor={borderColor[colorMode]}>
        Made with Next.js + chakra
      </Footer>
    </Flex>
  )
}
export default Layout
