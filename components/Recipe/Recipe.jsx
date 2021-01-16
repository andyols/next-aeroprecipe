import {
  Box,
  Button,
  Flex,
  IconButton,
  Tag,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowForwardIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import { deleteRecipe } from '@utils/api'
import Link from 'next/link'

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
    time,
  } = recipe

  const handleDelete = async () => {
    await mutateAsync(id)
    queryCache.invalidateQueries('recipes')
  }

  return (
    <Box flex='1' textAlign='left' p={3}>
      <Flex justify='space-between'>
        <Flex direction='column'>
          <Text fontWeight='medium'>{title}</Text>
          <Text fontSize='sm' color={subtleText}>
            {creator ? `${creator} - ${method}` : `${method}`}
          </Text>
        </Flex>

        <Stack direction='row' spacing={0} m={-3}>
          <Link href={`/recipe/edit/${id}`}>
            <IconButton
              variant='ghost'
              aria-label='Edit Recipe'
              icon={<EditIcon />}
              onMouseDown={e => e.preventDefault()}
            />
          </Link>
          <IconButton
            variant='ghost'
            colorScheme='red'
            aria-label='Delete Recipe'
            icon={<DeleteIcon />}
            onClick={handleDelete}
            isLoading={isLoading}
            onMouseDown={e => e.preventDefault()}
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
          onMouseDown={e => e.preventDefault()}
        >
          Go to Recipe
        </Button>
      </Link>
    </Box>
  )
}

export default Recipe
