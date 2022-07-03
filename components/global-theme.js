import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
a{
color:blue;
}

::selection { background: #79BB40; }


`;
