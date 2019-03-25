import React from 'react'
import { Helmet } from 'react-helmet'
import Index from './Index.jsx'
import '../static/style/BQStyles.scss'


const App = () => (
  <div className="Main Page">
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Biochemistry Lab Tools</title>
    </Helmet>
    <Index />
  </div>
)

export default App
