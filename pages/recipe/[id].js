import { Recipe } from '@components/Recipe'
import { Layout } from '@components/Layout'
import { q_findRecipe } from '@utils/queries'

/**
 * TODO: figure out how to pass recipe server side prop to child component
 */
export default function Page({ recipe }) {
  return recipe ? (
    <Layout title={recipe.information.title} align='center' textAlign='center'>
      <Recipe
        information={recipe.information}
        instructions={recipe.instructions}
      />
    </Layout>
  ) : null
}

export async function getServerSideProps({ params: { id } }) {
  try {
    const { data: recipe } = await q_findRecipe(id)
    return {
      props: { recipe }
    }
  } catch (err) {
    return { notFound: true }
  }
}
