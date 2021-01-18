import { Button, IconButton, Stack } from '@chakra-ui/react'
import { FormTextarea, FormWrapper } from '.'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { schema } from '@lib/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { createRecipe, updateRecipe } from '@utils/api'
import { AddIcon, CheckIcon, MinusIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setInstructions } from '@lib/rootSlice'

const Step2 = ({ recipe }) => {
  const queryCache = useQueryClient()
  const router = useRouter()

  const { handleSubmit, register, errors, getValues } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const instructions = useSelector(({ instructions }) => instructions)
  const dispatch = useDispatch()

  // const create = useMutation(createRecipe)
  // const update = useMutation(updateRecipe)
  // const isLoading = create.isLoading || update.isLoading
  // const submit = async data => {
  //   recipe
  //     ? await update.mutateAsync({ ...data, id: recipe.id })
  //     : await create.mutateAsync(data)
  //   queryCache.invalidateQueries('recipes')
  //   router.push('/')
  // }
  const submit = data => console.log(data)

  const add = () => dispatch(setInstructions([...instructions, '']))

  const remove = () =>
    dispatch(
      setInstructions([
        ...instructions.slice(0, instructions.length - 1),
        ...instructions.slice(instructions.length - 1 + 1),
      ])
    )

  /**
   * TODO: form values are not saving correctly... need to find a way to
   * properly communicate with react-hook-form to send the current values
   * to redux dispatch
   *  */
  const save = () => dispatch(setInstructions(Object.values(getValues())))

  const back = () => {
    router.push('/recipe/create/step1')
  }

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
      <Stack spacing={4}>
        <Stack isInline pt={2} justify='space-between'>
          <IconButton
            onClick={remove}
            icon={<MinusIcon />}
            colorScheme='red'
            type='button'
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

        {instructions.map((_, i) => (
          <FormTextarea
            key={i}
            id={i}
            ref={register}
            label={`Step ${i + 1}`}
            defaultValue={instructions[i]}
            placeholder='Enter instructions here'
          />
        ))}

        <Stack isInline pt={2} justify='space-between'>
          <Button w='40%' onClick={back} type='button'>
            Back
          </Button>
          <Button w='40%' colorScheme='green' type='submit'>
            Create!
          </Button>
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default Step2
