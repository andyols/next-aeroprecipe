import { Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { FormInput, FormNumberInput, FormSelect, FormWrapper } from '.'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@lib/schema'
import { useDispatch, useSelector } from 'react-redux'
import { setInformation } from '@lib/rootSlice'

const Step1 = ({ recipe }) => {
  const router = useRouter()

  const dispatch = useDispatch()
  const information = useSelector(({ information }) => information)

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      title: recipe ? recipe.title : information.title,
      creator: recipe ? recipe.creator : information.creator,
      method: recipe ? recipe.method : information.method,
      coffee: recipe ? recipe.coffee : information.coffee,
      grind: recipe ? recipe.grind : information.grind,
      water: recipe ? recipe.water : information.water,
      temperature: recipe ? recipe.temperature : information.temperature,
      time: recipe ? recipe.time : information.time,
    },
  })

  const submit = async data => {
    dispatch(setInformation(data))
    router.push('/recipe/create/step2')
  }

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
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
            { value: 'Standard', text: 'Standard' },
            { value: 'Inverted', text: 'Inverted' },
            { value: 'Other', text: 'Other' },
          ]}
        />
        <Stack isInline={useBreakpointValue({ base: false, lg: true })}>
          <FormNumberInput
            ref={register}
            id='coffee'
            label='How much coffee?'
            addon='g'
            min={5}
            max={50}
            error={errors.coffee}
          />
          <FormSelect
            ref={register}
            id='grind'
            label='How fine we grinding?'
            options={[
              { value: 'Very Fine', text: 'Very Fine' },
              { value: 'Fine', text: 'Fine' },
              { value: 'Medium', text: 'Medium' },
              { value: 'Coarse', text: 'Coarse' },
              { value: 'Very Coarse', text: 'Very Coarse' },
            ]}
          />
        </Stack>
        <Stack isInline={useBreakpointValue({ base: false, lg: true })}>
          <FormNumberInput
            ref={register}
            id='water'
            label='How much water?'
            addon='mL'
            min={10}
            max={300}
            step={5}
            error={errors.water}
          />
          <FormNumberInput
            ref={register}
            id='temperature'
            label='How hot?'
            addon='°C'
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
          min={10}
          max={3600}
          step={10}
          help='A rough estimate here will be fine :)'
          error={errors.time}
        />
        <Stack isInline pt={2} justify='space-between'>
          <Link href='/'>
            <Button w='40%'>Back</Button>
          </Link>
          <Button w='40%' colorScheme='green' type='submit'>
            Next
          </Button>
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default Step1
