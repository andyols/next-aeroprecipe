import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const RecipeFormInput = ({ id, label }) => {
  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <Input />
    </FormControl>
  )
}

export default RecipeFormInput
