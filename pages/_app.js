import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { StateMachineProvider, createStore } from 'little-state-machine'
import theme from '@lib/theme'
import formDefault from '@lib/formDefault'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  createStore(formDefault)
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <StateMachineProvider>
          <Component {...pageProps} />
        </StateMachineProvider>
      </ChakraProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default MyApp
