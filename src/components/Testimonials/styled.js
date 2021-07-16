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
    justify-content: space-between;
    align-items: center;
    height: fit-content;
`;

export const cards = styled.div`
    font-size: 15px;
    min-width: 25vw;
    max-width: 400px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0px 0px 20px -2px rgba(0,0,0,0.35);

    i {
        color: #fe4365;
        font-size: 30px;
        margin: 10px 0 0 10px;
    }

    p {
        width: 300px;
        margin: 0 auto;
        height: 180px;
        text-align: justify;
    }

    .profile {
        width: 100%;
        height: 150px;
        background: #fe4365;
        border-radius: 0 0 8px 8px;
        display: flex;
        color: #fff;
        flex-direction: column;

        svg {
            left: 0;
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
`;