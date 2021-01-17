import { AddIcon } from '@chakra-ui/icons'
import {
  Button,
  Link as ChakraLink,
  Flex,
  Spacer,
  Switch,
  useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = props => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex w='100%' py={3} px={6} borderBottom='1px' as='header' {...props}>
      <Link href='/'>
        <ChakraLink fontSize='xl' fontWeight='medium'>
          AeroPrecipe
        </ChakraLink>
      </Link>
      <Spacer />
      <Flex align='center'>
        <Link href='/recipe/create/information'>
          <Button
            colorScheme='teal'
            size='sm'
            rightIcon={<AddIcon />}
            onMouseDown={e => e.preventDefault()}
            hidden={router.pathname.includes('create')}
          >
            New Recipe
          </Button>
        </Link>

        <Switch
          pl={4}
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
          colorScheme='green'
          aria-label='toggle theme'
        />
      </Flex>
    </Flex>
  )
}

export default Header
