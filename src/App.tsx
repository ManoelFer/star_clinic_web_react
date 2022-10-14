import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { Layout, Login } from './pages';

import { lightTheme, darkTheme, GlobalStyle } from '@/global'

import { ThemeContext } from './context';

function App() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
        <GlobalStyle />
        <Layout>
          <Login />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
