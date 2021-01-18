import {
  Button,
  IconButton,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react'
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

  const { handleSubmit, register, errors, getValues } = useForm({
    mode: 'all',
  })

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

  const add = () => dispatch(addInstruction())

  const remove = () => dispatch(removeInstruction())

  const back = () => {
    dispatch(saveInstructions(Object.values(getValues())))
    router.push('/recipe/create/step1')
  }

  const submit = data => console.log(data)

  return (
    <Stack spacing={4}>
      <Stack isInline textAlign='center' justify='space-around' align='center'>
        <IconButton
          onClick={() => remove(instructions.length - 1)}
          icon={<MinusIcon />}
          colorScheme='red'
          variant='ghost'
          disabled={instructions.length < 2}
        />
        <Heading size='md' justifyContent='space-between'>
          Recipe Instructions
        </Heading>
        <IconButton
          onClick={add}
          icon={<AddIcon />}
          colorScheme='green'
          variant='ghost'
        />
      </Stack>
      <Divider />
      <FormWrapper onSubmit={handleSubmit(submit)}>
        <Stack spacing={4}>
          {instructions.map((_, i) => (
            <FormTextarea
              key={i}
              id={i}
              ref={register({
                required: "Can't have an empty step!",
                pattern: {
                  value: /^[a-zA-Z0-9 -.,:?!"'/$@~=_]*$/,
                  message: 'Numbers, letters and common punctation only please',
                },
              })}
              label={`Step ${i + 1}`}
              defaultValue={instructions[i]}
              placeholder='Enter instructions here'
              error={errors[i.toString()]}
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
    </Stack>
  )
}

export default Step2
