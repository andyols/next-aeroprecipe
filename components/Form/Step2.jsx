import { Button, IconButton, Stack } from '@chakra-ui/react'
import { FormTextarea, FormWrapper } from '.'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { schema } from '@lib/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { createRecipe, updateRecipe } from '@utils/api'
import { useStateMachine } from 'little-state-machine'
import updateForm from '@utils/updateForm'
import Link from 'next/link'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const Step2 = ({ recipe }) => {
  const queryCache = useQueryClient()
  const router = useRouter()
  const {
    state: { form },
    actions,
  } = useStateMachine({ updateForm })

  const addStep = () => actions.updateForm(form.steps.push({ value: '' }))
  const removeStep = step => actions.updateForm(form.steps.pop())

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: form.steps.map((step, i, arr) => ({
      i: form.steps[i].value,
    })),
  })

  const create = useMutation(createRecipe)
  const update = useMutation(updateRecipe)
  const isLoading = create.isLoading || update.isLoading

  const submit = async data => {
    recipe
      ? await update.mutateAsync({ ...data, id: recipe.id })
      : await create.mutateAsync(data)
    queryCache.invalidateQueries('recipes')
    router.push('/')
  }

  const back = data => {
    router.push('/recipe/create/step1')
  }

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
      <Stack spacing={4}>
        <Stack isInline pt={2} justify='space-between'>
          <IconButton
            onClick={addStep}
            icon={<AddIcon />}
            colorScheme='green'
          />
          {form.steps.length > 1 && (
            <IconButton
              onClick={removeStep}
              icon={<MinusIcon />}
              colorScheme='red'
            />
          )}
        </Stack>
        {form.steps.map((step, i) => (
          <FormTextarea
            key={i}
            ref={register}
            id={`step${i + 1}`}
            label={`Step ${i + 1}`}
            placeholder='Enter instructions here'
          />
        ))}
        <Stack isInline pt={2} justify='space-between'>
          <Link href='/recipe/create/step1'>
            <Button w='40%'>Back</Button>
          </Link>
          <Button
            w='40%'
            colorScheme='green'
            type='submit'
            isLoading={isLoading}
          >
            Create!
          </Button>
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default Step2
