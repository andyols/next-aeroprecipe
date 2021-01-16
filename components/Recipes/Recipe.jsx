import {
  Box,
  Button,
  Flex,
  IconButton,
  Tag,
  Text,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { ArrowForwardIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import { deleteRecipe } from '@/utils/api'
import Link from 'next/link'

const Recipe = ({ recipe }) => {
  const { colorMode } = useColorMode()
  const queryCache = useQueryClient()
  const typography = { light: 'gray.600', dark: 'gray.400' }

  const { mutateAsync, isLoading } = useMutation(deleteRecipe)

  const handleDelete = async () => {
    await mutateAsync(recipe.id)
    queryCache.invalidateQueries('recipes')
  }

  const id = recipe.id
  const {
    title,
    creator,
    method,
    coffee,
    grind,
    water,
    temperature,
    time,
  } = recipe.data

  return (
    <Box flex='1' textAlign='left' p={3}>
      <Flex justify='space-between'>
        <Flex direction='column'>
          <Text fontWeight='medium'>{title}</Text>
          <Text fontSize='sm' color={typography[colorMode]}>
            {creator ? `${creator} - ${method}` : `${method}`}
          </Text>
        </Flex>

        <Stack direction='row' spacing={0} m={-3}>
          <IconButton
            variant='ghost'
            aria-label='Edit Recipe'
            icon={<EditIcon />}
          />
          <IconButton
            variant='ghost'
            colorScheme='red'
            aria-label='Delete Recipe'
            icon={<DeleteIcon />}
            onClick={handleDelete}
            isLoading={isLoading}
          />
        </Stack>
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
          size='sm'
          colorScheme='teal'
          rightIcon={<ArrowForwardIcon />}
        >
          Go to Recipe
        </Button>
      </Link>
    </Box>
  )
}

export default Recipe
