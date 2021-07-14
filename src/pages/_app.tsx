import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { 
  Box,
  Container,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core'
import { useEffect } from 'react'
import theme from '../theme'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box marginTop={1}>
          <Component {...pageProps} />
        </Box>
      </Container>
    </MuiThemeProvider>
  )
}
export default MyApp
