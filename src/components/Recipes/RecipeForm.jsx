import { Button, HStack, Stack } from '@chakra-ui/react'
import { RecipeFormInput } from '.'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const RecipeForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = values => console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RecipeFormInput
          register={register}
          id='title'
          label={`What's the name?`}
        />
        <RecipeFormInput
          register={register}
          id='author'
          label={`Who made it?`}
        />
        <HStack pt={3} justify='space-between'>
          <Link href='/'>
            <Button w='40%'>Back</Button>
          </Link>
          <Button w='40%' colorScheme='green' type='submit'>
            Create!
          </Button>
        </HStack>
      </Stack>
    </form>
  )
}

export default RecipeForm
