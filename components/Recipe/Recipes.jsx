import { Box, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as NextLink } from 'next/link'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  const bg = useColorModeValue('gray.50', 'gray.700')
  const subtleText = useColorModeValue('gray.700', 'gray.300')
  return recipes ? (
    <Stack>
      {recipes.map(r => (
        <Box bg={bg} borderRadius='md' boxShadow='base' key={r.data.id}>
          <Recipe recipe={r.data} />
        </Box>
      ))}
    </Stack>
  ) : (
    <Box bg={bg} px={3} py={1} boxShadow='base' borderRadius='md'>
      <Text color={subtleText}>
        Well, this is awkward... thered are no recipes the moment. Maybe you could
        fix that by clicking{' '}
        <Link
          as={NextLink}
          color='teal.300'
          href='/recipe/create'
          onMouseDown={e => e.preventDefault()}
        >
          here!
        </Link>
      </Text>
    </Box>
  )
}

export default Recipes
