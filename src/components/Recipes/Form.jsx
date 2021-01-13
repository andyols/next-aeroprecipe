import { Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { FormInput, FormNumberInput, FormSelect } from '.'
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
  coffee: yup
    .number()
    .min(5, "I think we're gonna need more than that!")
    .max(50, 'Easy there, big shot!'),
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
        <FormInput
          ref={register}
          id='title'
          label='What shall we call this recipe?'
          placeholder='Recipe Title'
          error={errors.title}
        />
        <FormInput
          ref={register}
          id='author'
          label='Who made it?'
          placeholder='Recipe Author'
          help="Unless it's a super secret recipe"
          error={errors.author}
        />
        <FormSelect
          ref={register}
          id='method'
          label='What brewing method?'
          options={[
            { value: 'standard', text: 'Standard' },
            { value: 'inverted', text: 'Inverted' },
            { value: 'other', text: 'Other' },
          ]}
        />
        <Stack isInline={useBreakpointValue({ base: false, lg: true })}>
          <FormNumberInput
            ref={register}
            id='coffee'
            label='How much coffee?'
            addon='grams'
            error={errors.coffee}
          />
          <FormSelect
            ref={register}
            id='grind'
            label='How fine we grinding?'
            options={[
              { value: 'veryfine', text: 'Very Fine' },
              { value: 'fine', text: 'Fine' },
              { value: 'medium', text: 'Medium' },
              { value: 'coarse', text: 'Coarse' },
              { value: 'verycoarse', text: 'Very Coarse' },
            ]}
          />
        </Stack>
        <Stack isInline pt={2} justify='space-between'>
          <Link href='/'>
            <Button w='40%'>Back</Button>
          </Link>
          <Button w='40%' colorScheme='green' type='submit'>
            Create!
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default RecipeForm
