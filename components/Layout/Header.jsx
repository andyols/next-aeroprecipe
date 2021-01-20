import { AddIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Link,
  Spacer,
  Switch,
  useColorMode
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Header = props => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex w='100%' py={3} px={6} borderBottom='1px' as='header' {...props}>
      <Link fontSize='xl' fontWeight='medium' onClick={() => router.push('/')}>
        AeroPrecipe
      </Link>
      <Spacer />
      <Flex align='center'>
        <Button
          colorScheme='teal'
          size='sm'
          rightIcon={<AddIcon />}
          onMouseDown={e => e.preventDefault()}
          onClick={() => router.push('/recipe/create/step1')}
          hidden={router.pathname.includes('create')}
        >
          New Recipe
        </Button>

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
