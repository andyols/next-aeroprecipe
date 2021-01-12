import { Box, Text, useColorMode } from '@chakra-ui/react'

const Recipe = ({ recipe }) => {
  const { colorMode } = useColorMode()
  const border = { light: 'gray.200', dark: 'gray.700' }
  const typography = { light: 'gray.600', dark: 'gray.400' }
  return (
    <Box
      border='1px'
      borderRadius='md'
      borderColor={border[colorMode]}
      px={3}
      py={2}
    >
      <Text fontWeight='medium'>{recipe.title}</Text>
      <Text fontSize='sm' color={typography[colorMode]}>
        {recipe.author}
      </Text>
    </Box>
  )
}

export default Recipe
