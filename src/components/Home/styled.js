import styled from 'styled-components';

export const Home = styled.section`
    height: 100vh;
    width: 100%;
    background: #fff;
    color: white;
    font-family: Poppins, sans-serif;
`;

export const homeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const headline = styled.div`
    font-size: 15px;
    width: 60vw;
    margin: 0 0 0 10%;

    h3 {
        font-size: 44px;
        font-weight: 700;
    }
`;

export const contentWrapper = styled.div`
    padding: 30px 0px 30px 20px;
    border-left: 2px solid #fff;
    text-align: justify;
    margin: 30px 0 0 10%;
    width: 40vw;
    z-index: 2;
    position: relative;

    button {
        margin-top: 25px;
        outline: none;
        font-size: 15px;
        background: red;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        cursor: pointer;
        border-radius: 30px;
        padding: 10px 15px;
    }
`;

export const boxImage = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    padding: 0 10%;
    height: 100vh;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const image = styled.img`
    height: 75vh;
    width: auto;
    z-index: 1;
    align-self: center;
`;

export const socialMedias = styled.div`
    width: 150px;
    display: flex;
    bottom: 20px;
    right: 50px;
    position: absolute;
    font-size: 25px;
    justify-content: space-between;

    a {
        color: white;
    }
`;