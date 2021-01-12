import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

const RecipeFormInput = forwardRef((props, ref) => {
  const { id, label, error, placeholder, help } = props
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input ref={ref} name={id} placeholder={placeholder} />
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
})

export default RecipeFormInput
