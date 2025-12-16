import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% { height: 0; opacity: 0; }
    100% { height: auto; opacity: 1; }
  }

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}


  @keyframes fade {
    from { opacity: 0.6; }
    to { opacity: 1; }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000;
    background-color: #F1F1F1;
  }
`;
