import { Button, HStack, Stack } from '@chakra-ui/react'
import { RecipeFormInput } from '.'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  title: yup
    .string()
    .max(
      64,
      'This title is too powerful! Try shortening it below 64 characters. :)'
    )
    .required('The recipe needs a name!'),
  author: yup
    .string()
    .max(
      64,
      "That's a long name! Try reducing the length to 64 characters please."
    ),
})

const RecipeForm = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = values => console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <RecipeFormInput
          ref={register}
          id='title'
          label={`What shall we call this recipe?`}
          placeholder={'Recipe Title'}
          error={errors.title}
        />
        <RecipeFormInput
          ref={register}
          id='author'
          label={`Who made it?`}
          placeholder={'Recipe Author'}
          help={"Unless it's a super secret recipe"}
          error={errors.author}
        />
        <HStack pt={2} justify='space-between'>
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
