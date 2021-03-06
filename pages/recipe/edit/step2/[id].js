import { Step2 } from '@components/Form'
import { Layout } from '@components/Layout'
import { q_findRecipe } from '@utils/queries'

export default function Page({ recipe }) {
  return (
    <Layout title={`Edit - ${recipe.title}`} align='center'>
      <Step2 recipe={recipe} />
    </Layout>
  )
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
