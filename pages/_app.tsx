import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider  } from 'react-query'
import { queryClient } from '../src/api'

import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <Hydrate state={ pageProps.dehydratedState }>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}
