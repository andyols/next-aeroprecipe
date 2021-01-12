import {
  Link as ChakraLink,
  Flex,
  Spacer,
  Switch,
  useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'

const Header = props => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Flex w='100%' py={3} px={6} borderBottom='1px' as='header' {...props}>
      <Link href='/'>
        <ChakraLink fontSize='xl' fontWeight='medium'>
          AeroPrecipe
        </ChakraLink>
      </Link>
      <Spacer />
      <Switch
        position='fixed'
        top='1rem'
        right='1rem'
        color='green'
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </Flex>
  )
}

export default Header
