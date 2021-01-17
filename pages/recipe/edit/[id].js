import { Layout } from '@components/Layout'
import { Step1 } from '@components/Recipe'
import { q_findRecipe } from '@utils/queries'
import { FormContextProvider } from '@components/Recipe/Form/FormContext'

const Edit = ({ recipe }) => {
  return (
    <Layout title={`Edit - ${recipe.title}`} align='center'>
      <FormContextProvider>
        <Step1 recipe={recipe} />
      </FormContextProvider>
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
