import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select
} from '@chakra-ui/react'
import { forwardRef } from 'react'

const RecipeFormSelect = forwardRef((props, ref) => {
  const { id, label, error, placeholder, help, options } = props
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Select ref={ref} name={id} placeholder={placeholder}>
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.text}
          </option>
        ))}
      </Select>
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
})

export default RecipeFormSelect
