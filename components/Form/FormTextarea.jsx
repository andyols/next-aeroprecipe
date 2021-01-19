import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea
} from '@chakra-ui/react'
import { forwardRef } from 'react'

const FormTextarea = forwardRef((props, ref) => {
  const { id, label, error, placeholder, help, defaultValue } = props
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Textarea
        ref={ref}
        name={id}
        label={id}
        resize='none'
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
})

export default FormTextarea
