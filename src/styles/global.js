import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(180deg, #22202c, #402845) fixed;
  }

  body, input, textarea, button {
    font: 14px 'Roboto', sans-serif;
    -internal-autofill-selected: none;
  }

  input, textarea {
    border: none;
    background: rgba(0, 0, 0, 0.1);
    font-size: 18px;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 13px;
    color: #fff;
  }

  button {
    border: none;
    font-weight: bold;
    padding: 15px;
    border-radius: 4px;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  form {
    /* For Yup errors */
    input + span,
    textarea + span {
      color: red;
      margin: -10px 0 10px 10px;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
