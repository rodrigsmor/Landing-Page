import styled from 'styled-components';

export const Home = styled.section`
    height: 100vh;
    width: 100%;
    background: #fff;
    color: #594f4f;
    font-family: Poppins, sans-serif;
`;

export const homeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 8%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const content = styled.div`
    display: flex;
    flex-direction: column;

    .textBox {
        padding: 30px 0 30px 20px;
        width: 620px;
        border-left: 3px solid #fe4365;
    }

    p {
        font-size: 15px;
        text-align: justify;
    }

    .CTA {
        width: auto;
        color: #fff;
        height: auto;
        border: none;
        cursor: pointer;
        font-size: 15px;
        margin: 30px 0 0;
        transition: all 1s;
        padding: 15px 20px;
        border-radius: 30px;
        font-family: Poppins, sans-serif;
        background: #fe4365;
    }

    .CTA:hover {
        background: #cc0025;
    }
`;

export const headline = styled.div`
    display: inline-flex;
    flex-wrap: wrap;

    h2 {
        width: auto;
        height: auto;
        color: #fff;
        font-weight: 800;
        padding: 10px 25px;
        background: #fe4365;
        border: 3px solid #fe4365;
    }

    h2:nth-of-type(2) {
        color: #fe4365;
        background: transparent;
    }

    h3{
        width: 300px;
        margin: 15px 0;
        font-size: 50px;
        flex-basis: 100%;
        font-weight: 900;
        line-height: 50px;
        text-align: justify;
    }
`;

export const boxImage = styled.div`

`;

export const image = styled.img`

`;