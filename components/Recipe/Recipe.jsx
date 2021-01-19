import {
  ArrowForwardIcon,
  DeleteIcon,
  EditIcon,
  HamburgerIcon
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { deleteRecipe } from '@utils/api'
import Link from 'next/link'
import { useMutation, useQueryClient } from 'react-query'

const Recipe = ({ recipe }) => {
  const queryCache = useQueryClient()
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  const { mutateAsync, isLoading } = useMutation(deleteRecipe)

  const {
    id,
    title,
    creator,
    method,
    coffee,
    grind,
    water,
    temperature,
    time
  } = recipe

  const handleDelete = async () => {
    await mutateAsync(id)
    queryCache.invalidateQueries('recipes')
  }

  return (
    <Box flex='1' textAlign='left' p={3}>
      <Flex justify='space-between'>
        <Flex direction='column'>
          <Text fontWeight='medium' fontSize='lg'>
            {title}
          </Text>
          <Text fontSize='sm' color={subtleText}>
            {creator ? `${creator} - ${method}` : `${method}`}
          </Text>
        </Flex>

        <Menu placement='left-start'>
          <MenuButton
            m={-3}
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='ghost'
            size='lg'
            isLoading={isLoading}
          />
          <MenuList>
            <Link href={`/recipe/edit/${id}`}>
              <MenuItem icon={<EditIcon w={5} h={5} />}>
                <Text>Edit</Text>
              </MenuItem>
            </Link>
            <MenuItem icon={<DeleteIcon w={5} h={5} />} onClick={handleDelete}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex flexWrap='wrap' mt={1}>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {coffee}g ☕
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {grind} ⚙️
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {water}mL 💧
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {temperature}c 🌡️
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {time}s ⏱️
        </Tag>
      </Flex>
      <Link href={`/recipe/${id}`}>
        <Button
          mt={3}
          variant='link'
          colorScheme='teal'
          rightIcon={<ArrowForwardIcon />}
          onMouseDown={e => e.preventDefault()}
        >
          Go to Recipe
        </Button>
      </Link>
    </Box>
  )
}

export default Recipe
