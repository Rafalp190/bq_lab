import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto';
import App from './app/components/App.jsx'

const Root = document.createElement('div', { id: 'root' })
document.body.appendChild(Root)

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  Root,
)
