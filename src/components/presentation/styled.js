import styled from 'styled-components';

export const presentation = styled.section`
    width: 100%;
    position: relative;
    height: fit-content;
    background: #fe4365;
    clip-path: polygon(0 7%, 100% 0, 100% 93%, 0% 100%);

    @media screen and (max-width: 830px) {
        clip-path: polygon(0 4%, 100% 0, 100% 96%, 0% 100%);
    }
`;

export const container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5vh 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 945px) {
        padding: 7vh 0 8vh;
    }

    @media screen and (max-width: 780px) {
        padding: 8vh 0 5vh;
    }
`;

export const sectionTitle = styled.div`
    color: #fff;
    width: auto;
    height: auto;
    display: flex;
    font-size: 20px;
    margin: 0 0 40px;
    font-weight: 600;
    align-items: center;
    flex-direction: column;
    font-family: Poppins, sans-serif;

    span {
        height: 3px;
        width: 100px;
        display: block;
        background: #fff;
    }

    p {
        width: 50vw;
        font-size: 15px;
        margin: 10px 0 0;
        font-weight: 400;
        line-height: 15px;
        text-align: center;
    }

    @media screen and (max-width: 780px) {
        font-size: 18px;

        p {
            font-size: 13px;
            width: 90vw;
        }
    }
`;

export const boxCards = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    height: fit-content;
    justify-content: space-between;

    @media screen and (max-width: 780px) {
        flex-direction: column;
    }
`;

export const cards = styled.div`
    width: 300px;
    padding: 20px 0 0 0;
    height: 300px;
    color: #fff;
    font-family: Poppins, sans-serif;

    img {
        width: 100px;
        height: auto;
        margin: 0 0 10px;
    }

    p {
        margin: 0 auto;
        line-height: 17px;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
    }

    .imagem {
        display: grid;
        width: 100%;
        height: 40%;
        margin: 0px 0 40px;
        place-items: center;
    }

    @media screen and (max-width: 780px) {
        .imagem {
            margin: 0 0 30px;
        }

        p {
            font-size: 13px;
        }
    }
`;