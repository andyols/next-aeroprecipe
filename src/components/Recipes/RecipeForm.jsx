import { Button, HStack, Stack } from '@chakra-ui/react'
import { RecipeFormInput } from '.'
import Link from 'next/link'

const RecipeForm = () => {
  return (
    <form>
      <Stack spacing={3}>
        <RecipeFormInput id='title' label={`What's the name?`} />
        <RecipeFormInput id='author' label={`Who made it?`} />
        <HStack pt={3} justify='space-between'>
          <Link href='/'>
            <Button w='40%'>Back</Button>
          </Link>
          <Button w='40%' colorScheme='green'>
            Create!
          </Button>
        </HStack>
      </Stack>
    </form>
  )
}

export default RecipeForm
