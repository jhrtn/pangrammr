import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    /* box-shadow: inset 0px 0px 0px 0.75px red; */
  }

  body {
    background-color: #FAFAFA;
    font-family: 'Cabinet Grotesk', sans-serif;
  }
`;

export default GlobalStyle;
