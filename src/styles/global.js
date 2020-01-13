import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;    
  }
  
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #E3EAD9;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Roboto, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }
  ::backdrop {
    z-index:0;  
    background-color: white !important;
}

  html, *:fullscreen, *:-webkit-full-screen, *:-moz-full-screen {
    background-color: white !important;
    z-index:1;
}
`;
