import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'

const RecipeFormInput = ({ register, id, label, error, placeholder, help }) => {
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input ref={register} name={id} placeholder={placeholder} />
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export default RecipeFormInput
