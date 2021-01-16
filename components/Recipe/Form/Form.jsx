import { Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { FormInput, FormNumberInput, FormSelect } from '..'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import { createRecipe } from '@utils/api'
import { schema } from '@lib/schema'

const RecipeForm = () => {
  const router = useRouter()
  const queryCache = useQueryClient()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const { mutateAsync, isLoading } = useMutation(createRecipe)

  const create = async data => {
    await mutateAsync(data)
    queryCache.invalidateQueries('recipes')
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(create)}>
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
            addon='°C'
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
          <Button
            w='40%'
            colorScheme='green'
            type='submit'
            isLoading={isLoading}
            loadingText='Creating'
          >
            Create!
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default RecipeForm