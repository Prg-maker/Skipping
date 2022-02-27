import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;


  }

  * , input, button {
    font-family: 'Poppins', sans-serif;
    border:0;
    outline:0;
  }

  html,body,#root{
    height:100%;
    overflow:none;

  }

`
