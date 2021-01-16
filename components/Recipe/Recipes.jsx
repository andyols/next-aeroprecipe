import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  const bg = useColorModeValue('gray.50', 'gray.700')
  return (
    <Stack>
      {recipes.map(r => (
        <Box bg={bg} borderRadius='md' boxShadow='base' key={r.id}>
          <Recipe recipe={r} />
        </Box>
      ))}
    </Stack>
  )
}

export default Recipes
