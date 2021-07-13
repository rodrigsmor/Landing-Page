import styled from "styled-components";

export const header = styled.header`
  height: 4.5rem;
  width: 100%;
  top: 0;
  position: fixed;

  .headerContainer {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    background: transparent;
    justify-content: space-between;
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
  }

  .logo i {
    color: #169873;
  }

  span {
    color: #169873;
  }
`;

export const nav = styled.nav`
  li {
    display: inline-flex;
    align-items: center;
    padding: 0 0 0 20px;
    font-weight: 500;
    text-decoration: none;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;