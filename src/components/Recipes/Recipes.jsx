import { Stack } from '@chakra-ui/react'
import { Recipe } from '.'

const Recipes = ({ recipes }) => {
  return (
    <Stack>
      {recipes.map(r => (
        <Recipe recipe={r.data} key={r.id} />
      ))}
    </Stack>
  )
}

export default Recipes
