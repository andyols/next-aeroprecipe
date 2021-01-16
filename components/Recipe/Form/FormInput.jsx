import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

const RecipeFormInput = forwardRef((props, ref) => {
  const { id, label, error, placeholder, help, addon } = props
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input ref={ref} name={id} placeholder={placeholder} />
        {addon && <InputRightAddon children={addon} />}
      </InputGroup>
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
})

export default RecipeFormInput
