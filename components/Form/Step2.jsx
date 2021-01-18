import { Button, IconButton, Stack } from '@chakra-ui/react'
import { FormTextarea, FormWrapper } from '.'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { createRecipe, updateRecipe } from '@utils/api'
import { AddIcon, CheckIcon, MinusIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { saveInstructions, addInstruction, removeInstruction } from './reduxSlice'

const Step2 = ({ recipe }) => {
  const queryCache = useQueryClient()
  const router = useRouter()

  const { handleSubmit, register, errors, getValues } = useForm()

  const instructions = useSelector(state => state.recipe.instructions)
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

  const save = () => dispatch(saveInstructions(Object.values(getValues())))

  const add = () => dispatch(addInstruction())

  const remove = () => dispatch(removeInstruction())

  const back = () => {
    dispatch(saveInstructions(Object.values(getValues())))
    router.push('/recipe/create/step1')
  }

  const submit = data => console.log(data)

  return (
    <FormWrapper onSubmit={handleSubmit(submit)}>
      <Stack spacing={4}>
        <Stack isInline pt={2} justify='space-between'>
          <IconButton
            onClick={() => remove(instructions.length - 1)}
            icon={<MinusIcon />}
            colorScheme='red'
            disabled={instructions.length < 2}
          />
          <Button rightIcon={<CheckIcon />} onClick={save}>
            Save
          </Button>
          <IconButton onClick={add} icon={<AddIcon />} colorScheme='green' />
        </Stack>

        {instructions.map((_, i) => (
          <FormTextarea
            key={i}
            id={i}
            ref={register}
            label={`Step ${i + 1}`}
            defaultValue={instructions[i]}
            placeholder='Enter instructions here'
            remove={remove}
          />
        ))}

        <Stack isInline pt={2} justify='space-between'>
          <Button w='40%' onClick={back}>
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
