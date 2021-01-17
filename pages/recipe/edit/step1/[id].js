import { Layout } from '@components/Layout'
import { Step1 } from '@components/Form'
import { q_findRecipe } from '@utils/queries'

export default function Page({ recipe }) {
  return (
    <Layout title={`Edit - ${recipe.title}`} align='center'>
      <Step1 recipe={recipe} />
    </Layout>
  )
}

export async function getServerSideProps({ params: { id } }) {
  try {
    const { data: recipe } = await q_findRecipe(id)
    return {
      props: { recipe },
    }
  } catch (err) {
    return { notFound: true }
  }
}
