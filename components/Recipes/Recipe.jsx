import { useRef } from 'react'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Tag,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import { deleteRecipe } from '@/utils/axios'

const Recipe = ({ recipe }) => {
  const { colorMode } = useColorMode()
  const queryCache = useQueryClient()
  const initalFocusRef = useRef()
  const typography = { light: 'gray.600', dark: 'gray.400' }

  const { mutateAsync, isLoading } = useMutation(deleteRecipe)

  const handleDelete = async () => {
    await mutateAsync(recipe._id)
    queryCache.invalidateQueries('recipes')
  }

  return (
    <Box flex='1' textAlign='left' p={3}>
      <Flex justify='space-between'>
        <Flex direction='column'>
          <Text fontWeight='medium'>{recipe.title}</Text>
          <Text fontSize='sm' color={typography[colorMode]}>
            {recipe.creator
              ? `${recipe.creator} - ${recipe.method}`
              : `${recipe.method}`}
          </Text>
        </Flex>

        <IconButton
          variant='ghost'
          size='sm'
          colorScheme='red'
          aria-label='Delete Recipe'
          icon={<DeleteIcon />}
          onClick={handleDelete}
          isLoading={isLoading}
        >
          Delete Recipe
        </IconButton>
      </Flex>

      <Flex flexWrap='wrap' mt={1}>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {recipe.coffee}g ☕
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {recipe.grind} ⚙️
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {recipe.water}mL 💧
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {recipe.temperature}c 🌡️
        </Tag>
        <Tag my={1} mx={2} ml={0} size='sm' borderRadius='full'>
          {recipe.time}s ⏱️
        </Tag>
      </Flex>
      <Button
        mt={3}
        variant='link'
        size='sm'
        colorScheme='teal'
        rightIcon={<ArrowForwardIcon />}
      >
        Go to Recipe
      </Button>
    </Box>
  )
}

export default Recipe
