import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { FormInput, FormNumberInput, FormSelect, FormWrapper } from '.'
import { saveInformation } from './reduxSlice'
import {
  COFFEE_MAX,
  TEMPERATURE_MAX,
  TIME_MAX,
  validateStep1,
  WATER_MAX
} from './validation'

const Step1 = ({ recipe }) => {
  const router = useRouter()

  const dispatch = useDispatch()
  const information = useSelector(state => state.recipe.information)

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validateStep1),
    defaultValues: {
      title: recipe ? recipe.title : information.title,
      creator: recipe ? recipe.creator : information.creator,
      method: recipe ? recipe.method : information.method,
      coffee: recipe ? recipe.coffee : information.coffee,
      grind: recipe ? recipe.grind : information.grind,
      water: recipe ? recipe.water : information.water,
      temperature: recipe ? recipe.temperature : information.temperature,
      time: recipe ? recipe.time : information.time
    }
  })

  const submit = data => {
    dispatch(saveInformation(data))
    router.push('step2')
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
            { value: 'Other', text: 'Other' }
          ]}
        />
        <Stack isInline={useBreakpointValue({ base: false, lg: true })}>
          <FormNumberInput
            ref={register}
            id='coffee'
            label='How much coffee?'
            addon='g'
            max={COFFEE_MAX}
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
              { value: 'Very Coarse', text: 'Very Coarse' }
            ]}
          />
        </Stack>
        <Stack isInline={useBreakpointValue({ base: false, lg: true })}>
          <FormNumberInput
            ref={register}
            id='water'
            label='How much water?'
            addon='mL'
            step={5}
            max={WATER_MAX}
            error={errors.water}
          />
          <FormNumberInput
            ref={register}
            id='temperature'
            label='How hot?'
            addon='°C'
            help='Or cold, depends on your perspective'
            max={TEMPERATURE_MAX}
            error={errors.temperature}
          />
        </Stack>
        <FormNumberInput
          ref={register}
          id='time'
          label='About how long will the brew take?'
          addon='seconds'
          step={10}
          help='A rough estimate here will be fine :)'
          max={TIME_MAX}
          error={errors.time}
        />
        <Stack isInline pt={2} justify='space-between'>
          <Button
            w='40%'
            leftIcon={<ArrowBackIcon />}
            onClick={() => router.push('/')}
          >
            Back
          </Button>
          <Button
            w='40%'
            colorScheme='green'
            type='submit'
            rightIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default Step1
