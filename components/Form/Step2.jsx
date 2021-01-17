import { Button, Stack } from '@chakra-ui/react'
import { FormTextarea, FormWrapper } from '.'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { schema } from '@lib/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { createRecipe, updateRecipe } from '@utils/api'
import Link from 'next/link'

const Step2 = ({ recipe }) => {
  const router = useRouter()
  const queryCache = useQueryClient()
  const { setFormValues, formData } = useFormData()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {},
  })

  const create = useMutation(createRecipe)
  const update = useMutation(updateRecipe)
  const isLoading = create.isLoading || update.isLoading

  const submit = async () => {
    recipe
      ? await update.mutateAsync({ ...formData, id: recipe.id })
      : await create.mutateAsync(formData)
    queryCache.invalidateQueries('recipes')
    router.push('/')
  }

  const back = data => {
    setFormValues(data)
    router.push('/recipe/create/step1')
  }

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
      <Stack spacing={4}>
        <FormTextarea
          ref={register}
          id='step1'
          label='Step 1'
          placeholder='Enter instructions here'
          error={errors.step1}
        />
        <Stack isInline pt={2} justify='space-between'>
          <Link href='/recipe/create/step1'>
            <Button w='40%'>Back</Button>
          </Link>
          <Button w='40%' colorScheme='green' type='submit'>
            Create!
          </Button>
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default Step2
