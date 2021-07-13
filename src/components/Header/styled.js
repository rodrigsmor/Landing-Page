import styled from "styled-components";

export const header = styled.header`
  height: 4.5rem;
  width: 100%;
  top: 0;
  background: #4545;

  .headerContainer {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    font-family: Poppins, sans-serif;
    align-items: center;
    padding: 0px 8%;
    background: purple;
  }

  .logo {
    font-size: 20px;
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  .logo h1 {
    font-size: 20px;
    margin: 0 0 0 5px;
    text-decoration: underline;
  }
`;