import { Layout } from '@components/Layout'
import { Form } from '@components/Recipe'
import { q_findRecipe } from '@utils/queries'

const Edit = ({ recipe }) => {
  return (
    <Layout title={`Edit - ${recipe.title}`} align='center'>
      <Form recipe={recipe} />
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

export default Edit
