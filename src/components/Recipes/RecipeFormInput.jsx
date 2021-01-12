import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const RecipeFormInput = ({ register, id, label }) => {
  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <Input ref={register} name={id} />
    </FormControl>
  )
}

export default RecipeFormInput
