import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #FAFAFA;
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
} 

li{
  list-style: none;
 }
`



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
