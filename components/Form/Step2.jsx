import { Button, IconButton, Stack, Heading, Divider } from '@chakra-ui/react'
import { FormTextarea, FormWrapper } from '.'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import {
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  MinusIcon,
} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { saveInstructions, addInstruction, removeInstruction } from './reduxSlice'

const Step2 = props => {
  const recipe = useSelector(state => state.recipe)
  const router = useRouter()
  const dispatch = useDispatch()

  const { handleSubmit, register, errors, getValues } = useForm({
    mode: 'all',
  })

  const add = () => dispatch(addInstruction())

  const remove = () => dispatch(removeInstruction())

  const back = () => {
    dispatch(saveInstructions(Object.values(getValues())))
    router.push('step1')
  }

  const submit = data => {
    dispatch(saveInstructions(Object.values(data)))
    router.push('summary')
  }

  return (
    <Stack spacing={4}>
      <Stack isInline textAlign='center' justify='space-around' align='center'>
        <IconButton
          onClick={remove}
          icon={<MinusIcon />}
          colorScheme='red'
          variant='ghost'
          disabled={recipe.instructions.length < 2}
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
          {recipe.instructions.map((_, i) => (
            <FormTextarea
              key={i}
              id={i}
              ref={register({
                required: "Can't have an empty step!",
                pattern: {
                  value: /^[a-zA-Z0-9 -.,:?!"';/$@~=_]*$/,
                  message: 'Numbers, letters and common punctation only please',
                },
              })}
              label={`Step ${i + 1}`}
              defaultValue={recipe.instructions[i]}
              placeholder='Enter instructions here'
              error={errors[i.toString()]}
            />
          ))}

          <Stack isInline pt={2} justify='space-between'>
            <Button w='40%' onClick={back} leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
            <Button
              w='40%'
              colorScheme='green'
              type='submit'
              rightIcon={<ArrowForwardIcon />}
            >
              To Summary
            </Button>
          </Stack>
        </Stack>
      </FormWrapper>
    </Stack>
  )
}

export default Step2
