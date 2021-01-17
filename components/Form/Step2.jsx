import { useState } from 'react'
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
import { AddIcon, CheckIcon, MinusIcon } from '@chakra-ui/icons'

const Step2 = ({ recipe }) => {
  const queryCache = useQueryClient()
  const router = useRouter()
  const {
    state: { form },
    actions,
  } = useStateMachine({ updateForm })
  const [count, setCount] = useState(form.steps.length)

  const { handleSubmit, register, errors, getValues } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: form.steps,
  })

  const create = useMutation(createRecipe)
  const update = useMutation(updateRecipe)
  const isLoading = create.isLoading || update.isLoading

  const add = () => {
    setCount(count + 1)
    const payload = {
      ...form,
      steps: [...form.steps, ''],
    }
    actions.updateForm(payload)
  }

  const remove = () => {
    setCount(count - 1)
    const payload = {
      ...form,
      steps: [
        ...form.steps.slice(0, form.steps.length - 1),
        ...form.steps.slice(form.steps.length - 1 + 1),
      ],
    }
    actions.updateForm(payload)
  }

  const save = () => {
    const payload = {
      ...form,
      steps: Object.values(getValues()),
    }
    actions.updateForm(payload)
  }

  const back = () => {
    save()
    router.push('/recipe/create/step1')
  }

  const submit = async data => {
    recipe
      ? await update.mutateAsync({ ...data, id: recipe.id })
      : await create.mutateAsync(data)
    queryCache.invalidateQueries('recipes')
    router.push('/')
  }

  const Steps = () =>
    form.steps.map((_, i) => (
      <FormTextarea
        id={i}
        key={i}
        ref={register}
        label={`Step ${i + 1}`}
        placeholder='Enter instructions here'
      />
    ))

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
      <Stack spacing={4}>
        <Stack isInline pt={2} justify='space-between'>
          <IconButton
            onClick={remove}
            icon={<MinusIcon />}
            colorScheme='red'
            type='button'
            disabled={count <= 1}
          />
          <Button rightIcon={<CheckIcon />} onClick={save}>
            Save
          </Button>
          <IconButton
            onClick={add}
            icon={<AddIcon />}
            colorScheme='green'
            type='button'
          />
        </Stack>

        {<Steps />}

        <Stack isInline pt={2} justify='space-between'>
          <Button w='40%' onClick={back} type='button'>
            Back
          </Button>
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
