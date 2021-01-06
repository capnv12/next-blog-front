import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  *:focus {
    outline: none;
  }
  body {
    box-sizing: border-box;
	  font-family: Open Sans, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei,
		WenQuanYi Micro Hei, sans-serif;
	  font-size: 100%;
	  line-height: 1.4;
	  color: #333;
    background-color: #f0f1f2;
	  margin: 0;
	  padding: 0;
	  overflow-x: hidden;
	  width: 100%;
  }
  a{
    text-decoration:none;
  }
  img{max-width:100%;}
  .container{
    max-width:1280px;
    margin 0 auto;
  }
`;

export default GlobalStyle;
