import './globals.css'
import { Layout } from '@/components'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ChakraProvider>
  )
  
  
}
