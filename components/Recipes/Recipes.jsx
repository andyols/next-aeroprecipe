import { Box, Stack, useColorMode } from '@chakra-ui/react'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  const { colorMode } = useColorMode()
  const border = { light: 'gray.200', dark: 'gray.700' }
  return (
    <Box border='1px' borderRadius='md' borderColor={border[colorMode]}>
      <Stack>
        {recipes.map((r, i, arr) => (
          <Box
            mb={i === arr.length - 1 ? 2 : 'none'}
            borderTop={i === 0 ? 'none' : '1px'}
            borderColor={border[colorMode]}
            key={r._id}
          >
            <Recipe recipe={r} />
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Recipes
