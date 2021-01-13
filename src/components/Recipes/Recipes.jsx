import { Stack } from '@chakra-ui/react'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  return (
    <Stack>
      {recipes.map(r => (
        <Recipe recipe={r} key={r._id} />
      ))}
    </Stack>
  )
}

export default Recipes
