import styled from "styled-components";

export const header = styled.header`
  top: 0;
  z-index: 9;
  width: 100vw;
  height: 4rem;
  position: fixed;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);

  .headerContainer {
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1000;
    color: #962062;
    font-size: 15px;
    padding: 0px 8%;
    font-weight: 300;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    font-family: Poppins, sans-serif;
  }

  @media screen and (max-width: 780px) {
    .headerContainer {
      height: auto;
      width: 100vw;
      position: fixed;
      margin-top: -50vh;
      flex-direction: column;
      border-radius: 0 0 25px 25px;
      box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
      transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .headerContainer.active {
      margin-top: 0;
    }
  }
`;

export const headerFixed = styled.div`
  display: flex;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 0 5px;
  }

  .logo_Icon {
    display: flex;
    align-items: center;
  }

  i {
    color: #fe4365;
  }

  span {
    color: #fe4365;
  }

  .toggleButton {
    display: none;
  }

  @media screen and (max-width: 780px) {
    top: 0;
    width: 100%;
    height: 4rem;
    padding: 0 8%;
    position: fixed;
    background: #fff;
    align-items: center;

    .toggleButton {
      z-index: 9;
      width: 50px;
      height: 30px;
      border: none;
      outline: none;
      display: block;
      cursor: pointer;
      background: transparent;
    }

    .toggleButton span {
      width: 100%;
      height: 5px;
      margin: 6px 0;
      display: block;
      position: relative;
      border-radius: 15px;
      background: #962062;
      transition: .3s linear;
    }

    .toggleButton.active span:nth-child(1) {
        margin-top: 0px;
        transform: rotate(-45deg);
    }

    .toggleButton.active span:nth-child(2) {
        opacity: 0;
    }

    .toggleButton.active span:nth-child(3) {
        transform: rotate(45deg);
        margin-top: -20px;
    }
  }
`;

export const nav = styled.nav`
  width: 70%;
  display: flex;
  min-width: 600px;
  align-items: center;
  justify-content: space-between;

  li {
    font-weight: 500;
    align-items: center;
    padding: 0 0 0 20px;
    display: inline-flex;
    text-decoration: none;
    list-style-type: none;
  }

  a {
    color: #fe4365;
    transition: all 1s;
    text-decoration: none;
  }

  a:hover {
    color: #962062;
  }

  @media screen and (max-width: 780px) {
    margin: 4.2rem 0 0 0;
    flex-direction: column-reverse;

    li {
      padding: 0;
      display: flex;
      line-height: 50px;
      flex-direction: column;
    }

    ul {
      margin: 10px 0;
    }
  }
`;

export const searchBar = styled.div`
  height: 30px;
  width: 200px;
  display: flex;
  background: #FCD4D9;
  border-radius: 15px;
  flex-direction: row;
  padding: 0 0 0 15px;
  border: 1px solid #962062;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    width: 90vw;
  }
`;

export const button = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  line-height: 0;
  color: #FCD4D9;
  cursor: pointer;
  border-radius: 50%;
  background: #fe4365;
  transition: all .5s;
  border-left: solid 1px #962062;

  &:hover {
    background: #f67280;
  }
`;

export const input = styled.input`
  width: 80%;
  border: none;
  outline: none;
  color: #962062;
  background: transparent;
  font-family: Poppins, sans-serif;

  ::-webkit-input-placeholder {
   color: #962062;
  }

  ::-webkit-search-cancel-button {
    display: none;
  }
`;