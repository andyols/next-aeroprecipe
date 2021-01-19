import { Layout } from '@components/Layout'
import dynamic from 'next/dynamic'

const DynamicForm = dynamic(() => import('@components/Form/Step2'), {
  ssr: false
})

export default function Page() {
  return (
    <Layout title='New Recipe' align='center'>
      <DynamicForm />
    </Layout>
  )
}
