import Head from 'next/head'
import { Flex, useColorMode } from '@chakra-ui/react'
import { Header, Container, Footer } from '.'

export const Layout = props => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.800' }
  const color = { light: 'black', dark: 'gray.100' }
  const borderColor = { light: 'gray.200', dark: 'gray.700' }
  return (
    <Flex
      direction='column'
      h='100vh'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Head>
        <title>{props.title}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header borderColor={borderColor[colorMode]} />

      <Container px={5} py={7}>
        {props.children}
      </Container>

      <Footer borderColor={borderColor[colorMode]}>
        Made with Next.js + chakra
      </Footer>
    </Flex>
  )
}
