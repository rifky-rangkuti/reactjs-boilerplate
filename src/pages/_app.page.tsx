import '^styles/global.scss'
import React from 'react'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {store} from '^redux/store'
import {QueryClient, QueryClientProvider, Hydrate} from 'react-query'

function MyApp({Component, pageProps}: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
</Provider>
}

export default MyApp
