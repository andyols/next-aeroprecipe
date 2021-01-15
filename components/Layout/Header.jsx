import { EditIcon } from '@chakra-ui/icons'
import {
  Button,
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
      <Flex align='center'>
        <Link href='/create'>
          <Button colorScheme='teal' size='sm' rightIcon={<EditIcon />}>
            New Recipe
          </Button>
        </Link>
        <Switch
          pl={4}
          isChecked={isDark}
          onChange={toggleColorMode}
          colorScheme='green'
        />
      </Flex>
    </Flex>
  )
}

export default Header
