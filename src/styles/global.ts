import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 18px;
    background: #171a21;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;

    @media (max-width: 650px) {
      margin: 0 25px;
    }
  }
`;
