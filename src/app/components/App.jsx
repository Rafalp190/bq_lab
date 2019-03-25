import React from 'react'
import { Helmet } from 'react-helmet'
import '../static/style/BQStyles.scss'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Index from './Index.jsx'

function pxToRem(value) {
  return `${value / 16}rem`;
}
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  breakpoints,
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTypography: {
      headline: {
        fontSize: pxToRem(24),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(32),
        },
      },
      title: {
        fontSize: pxToRem(21),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(24),
        },
      },
      body1: {
        fontSize: pxToRem(14),

        [breakpoints.up('md')]: {
          fontSize: pxToRem(16),
        },
      },
      body2: {
        fontSize: pxToRem(14),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(16),
        },
      },
      button: {
        fontSize: pxToRem(14),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(16),
        },
      },
    },
  },
});


const App = () => (
  <div className="main">
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Biochemistry Lab Tools</title>
      </Helmet>
      <Index />
    </MuiThemeProvider>
  </div>
)

export default App
