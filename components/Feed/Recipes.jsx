import { Box, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  const router = useRouter()
  const bg = useColorModeValue('gray.50', 'gray.700')
  const subtleText = useColorModeValue('gray.700', 'gray.300')
  return recipes?.length > 0 ? (
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
          color='teal.300'
          onClick={() => router.push('recipe/create/step1')}
          onMouseDown={e => e.preventDefault()}
        >
          here!
        </Link>
      </Text>
    </Box>
  )
}

export default Recipes
