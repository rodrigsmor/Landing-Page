import styled from "styled-components";

export const Testimonials = styled.section`
    width: 100vw;
    color: #594f4f;
    background: #fff;
    height: fit-content;
    font-family: Poppins, sans-serif;
`;

export const container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5vw;

    @media screen and (max-width: 1040px) {
        padding: 1vw;
    }

    @media screen and (max-width: 930px) {
        padding: 2vh 5px;
    }
`;

export const sectionTitle = styled.div`
    width: auto;
    height: auto;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 40px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    
    span {
        height: 3px;
        width: 100px;
        display: block;
        background: #594f4f;
    }
`;

export const testimonialsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: fit-content;
    justify-content: space-between;

    @media screen and (max-width: 790px) {
        flex-direction: column;
    }
`;

export const cards = styled.div`
    font-size: 15px;
    min-width: 25vw;
    max-width: 300px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0px 0px 20px -2px rgba(0,0,0,0.35);

    i {
        color: #fe4365;
        font-size: 30px;
        margin: 10px 0 0 10px;
    }

    p {
        width: 85%;
        margin: 0 auto;
        height: 180px;
        text-align: justify;
    }

    .profile {
        width: 100%;
        color: #fff;
        display: flex;
        height: 150px;
        background: #fe4365;
        border-radius: 0 0 8px 8px;
        flex-direction: column;

        svg {
            left: 0;
            margin: -5px 0 0;
            fill: #fff;
            width: 100%;
            z-index: 1;
            line-height: 0;
            overflow: hidden;
            position: absolute;
        }

        h3 {
            margin: 10px auto 0 auto;
        }

        h5 {
            font-size: 13px;
            font-weight: 400;
            margin: -5px auto 0 auto;
        }

        .avaliacaoUsuario {
            width: 60%;
            color: #fff;
            display: flex;
            margin: 0 auto;
            justify-content: space-between;

            i {
                font-size: 20px;
                color: #fff;
            }
        }

        .circleImage {
            z-index: 2;
            width: 100px;
            height: 100px;
            margin: auto 0;
            border-radius: 50%;
            margin: -50px auto 0 auto;
            border: 3px solid #fff;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }

    @media (min-width: 790px) and (max-width: 925px) {
        width: 30vw;

        p {
            line-height: 19px;
        }
    }

    @media screen and (max-width: 790px) {
        width: 300px;
        margin: 0 auto 30px auto;
    }

    @media screen and (max-width: 300px) {
        width: 90vw;
    }
`;