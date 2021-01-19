import { ChakraProvider } from '@chakra-ui/react'
import { store } from '@lib/store'
import theme from '@lib/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default MyApp
