import { GlobalStyleComponent, createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html, body, #root{
    max-height: 100vh;
    height: 100%;
    
  }

`