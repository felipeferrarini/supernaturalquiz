import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from '../pages/_app';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font: 400 16px Roboto, sans-serif;
    color: ${({ theme }: ThemeProps) => theme.colors.contrastText};
    -webkit-font-smoothing: antialiased !important;
  }
  html, body {
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
