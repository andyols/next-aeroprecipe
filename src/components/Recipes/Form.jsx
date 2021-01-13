import { Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { FormInput, FormNumberInput, FormSelect } from '.'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  title: yup
    .string()
    .max(64, 'This title is too powerful!')
    .required('The recipe needs a name!'),
  creator: yup
    .string()
    .max(64, "That's a long name! Maybe a little too long..."),
  coffee: yup
    .number()
    .min(5, "I think we're gonna need more than that!")
    .max(50, 'Easy there, big shot!'),
  water: yup
    .number()
    .min(20, 'Not sure how that will be possible...')
    .max(300, 'What kind of Aeropress do you have?!'),
  temperature: yup
    .number()
    .min(20, 'You think an ice cube is gonna brew very well?')
    .max(100, 'Are you trying to use a pressure cooker?!'),
  time: yup
    .number()
    .min(10, 'Do you have a time machine or something?')
    .max(1800, 'Jeez, you think anyone is gonna wait that long for coffee?'),
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
          placeholder='Title'
          error={errors.title}
        />
        <FormInput
          ref={register}
          id='creator'
          label='Who made it?'
          placeholder='Creator'
          help="Unless it's a super secret recipe"
          error={errors.creator}
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
            defaultValue={15}
            min={5}
            max={50}
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
        <Stack isInline={useBreakpointValue({ base: false, lg: true })}>
          <FormNumberInput
            ref={register}
            id='water'
            label='How much water?'
            addon='ml'
            defaultValue={200}
            min={10}
            max={300}
            step={5}
            error={errors.water}
          />
          <FormNumberInput
            ref={register}
            id='temperature'
            label='How hot?'
            addon='C'
            defaultValue={100}
            min={0}
            max={100}
            help='Or cold, depends on your perspective'
            error={errors.temperature}
          />
        </Stack>
        <FormNumberInput
          ref={register}
          id='time'
          label='About how long will the brew take?'
          addon='seconds'
          defaultValue={90}
          min={10}
          max={1200}
          step={10}
          help='A rough estimate here will be fine :)'
          error={errors.time}
        />
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
