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

  @media screen and (max-width: 780px) {
    .headerContainer {
      flex-direction: column;
      height: auto;
      margin-top: -50vh;
      transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
      border-radius: 0 0 25px 25px;
    }

    .headerContainer.active {
      margin-top: 0;
    }
  }
`;

export const headerFixed = styled.div`
  font-size: 20px;
  align-items: center;
  display: flex;
  cursor: pointer;;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    margin: 0 0 0 5px;
  }

  .logo_Icon {
    display: flex;
    align-items: center;
  }

  i {
    color: #169873;
  }

  span {
    color: #169873;
  }

  .toggleButton {
    display: none;
  }

  @media screen and (max-width: 780px) {
    top: 0;
    width: 100%;
    padding: 0 8%;
    height: 4.5rem;
    position: fixed;
    align-items: center;

    .toggleButton {
      width: 50px;
      height: 30px;
      border: none;
      outline: none;
      z-index: 101;
      display: block;
      cursor: pointer;
      background: transparent;
    }

    .toggleButton span {
      width: 100%;
      height: 5px;
      display: block;
      margin: 6px 0;
      border-radius: 15px;
      position: relative;
      background: #fff;
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
  display: flex;
  width: 70%;
  min-width: 600px;
  align-items: center;
  justify-content: space-between;

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

  @media screen and (max-width: 780px) {
    flex-direction: column-reverse;
    margin: 4.5rem 0 0 0;

    li {
      display: flex;
      line-height: 50px;
      flex-direction: column;
      padding: 0;
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
  background: gray;
  border-radius: 15px;
  flex-direction: row;
  padding: 0 0 0 15px;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    width: 90vw;
  }
`;

export const button = styled.button`
  width: 30px;
  height: 30px;
  line-height: 0;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  color: white;
`;

export const input = styled.input`
  background: transparent;
  outline: none;
  border: none;
  width: 80%;
  color: #fff;
  font-family: Poppins, sans-serif;

  ::-webkit-input-placeholder {
   color: #fff;
  }

  ::-webkit-search-cancel-button {
    display: none;
  }
`;