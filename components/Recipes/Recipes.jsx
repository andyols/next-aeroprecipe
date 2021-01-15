import { Box, Stack, useColorMode } from '@chakra-ui/react'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  const { colorMode } = useColorMode()
  const bg = { light: 'gray.50', dark: 'gray.700' }
  return (
    <Stack>
      {recipes.map(r => (
        <Box bg={bg[colorMode]} borderRadius='md' boxShadow='base' key={r._id}>
          <Recipe recipe={r} />
        </Box>
      ))}
    </Stack>
  )
}

export default Recipes
