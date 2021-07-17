import styled from 'styled-components';

export const Home = styled.section`
    width: 100vw;
    color: #594f4f;
    background: #fff;
    height: fit-content;
    font-family: Poppins, sans-serif;
`;

export const homeContainer = styled.div`
    padding: 8%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 780px) {
        flex-direction: column;
        height: fit-content;
        padding: 4.5rem 0 0;
    }
`;

export const content = styled.div`
    width: 45vw;
    display: flex;
    position: relative;
    flex-direction: column;

    .textBox {
        width: 620px;
        padding: 30px 0 30px 20px;
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

    .notAppear {
        display: none;
    }

    .appear {
        margin: 30px 0 0;
        animation: appear .5s linear;

        div {
            padding: 5px 5px 5px 20px;
            width: fit-content;
            background: #FCD4D9;
            border-radius: 30px;
            margin: 10px 0 0;
            display: flex;
            justify-content: space-between;
            border: 1px solid #962062;
        }

        input[type^="email"] {
            background: transparent;
            border: transparent;
            outline: none;
            color: #962062;
            font-size: 13px;
            width: 80%;
            font-family: Poppins, sans-serif;

            &::-webkit-input-placeholder {
                color: #962062;
            }
        }

        input[type^="submit"] {
            background: #fe4365;
            border: transparent;
            padding: 5px;
            margin: 0 0 0 10px;
            cursor: pointer;
            border-radius: 30px;
            transition: 1s all;
            font-family: Poppins, sans-serif;
            color: #fff;
        }

        input[type^="submit"]:hover {
            background: #cc0025;
        }
    }

    @keyframes appear {
        from {
            opacity: 0;
            margin: 0;
        }
        to {
            opacity: 1;
            margin: 30px 0 0;
        }
    }

    @media (min-width: 780px) and (max-width: 936px) {
        p {
            line-height: 18px;
        }

        .appear {
            div {
                width: 80%;
            }
        }
    }

    @media screen and (max-width: 780px) { 
        width: 90vw;
        margin: 20px 0;

        .textBox {
            width: 100%;
            border-left: none;
            padding: 0;

            h4 {
                font-size: 13px;
            }

            p {
                font-size: 13px;
            }

            .CTA {
                margin: 20px 0 0;
                font-size: 13px;
            }

            .appear {
                margin: 15px 0 0;

                label {
                    font-size: 13px;
                }

                div {
                    display: flex;
                    justify-content: space-between;
                    width: 80vw;
                }

                input[type^="email"] {
                }

                input[type^="submit"] {

                }
            }
        }

        @keyframes appear {
            from {
                opacity: 0;
                margin: 0;
            }
            to {
                opacity: 1;
                margin: 10px 0 0;
            }
        }
    }
`;

export const headline = styled.div`
    flex-wrap: wrap;
    display: inline-flex;

    h2 {
        color: #fff;
        font-weight: 800;
        padding: 10px 25px;
        width: fit-content;
        background: #fe4365;
        height: fit-content;
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

    @media (min-width: 780px) and (max-width: 936px) {
        margin: 20px 0 0;

        h3 {
            width: 500px;
            font-size: 35px;
            line-height: 35px;
        }
    }

    @media screen and (max-width: 780px) {
        width: 90vw;
        justify-content: center;

        h2 {
            font-size: 15px;
        }

        h3 {
            line-height: 30px;
            flex-grow: initial;
            font-size: 30px;
            text-align: center;
            max-width: 80vw;
            float: inline-end;
        }
    }
`;

export const boxImage = styled.div`
    width: fit-content;
    height: max-content;

    @media screen and (max-width: 780px) {
        margin: -8vh 0 0;
    }
`;

export const image = styled.img`
    width: auto;
    height: 60vh;
    min-height: 40vh;
    
    @media screen and (max-width: 780px) {
        width: 60vw;
        height: auto;
    }
`;

export const socialMedias = styled.div`
    width: 150px;
    display: flex;
    position: absolute;
    margin: 30px 0 0 70vw;
    justify-content: space-between;

    a {
        transition: 1s all;
        font-size: 30px;
        color: #fe4365;

        &:hover {
            color: #962062;
        }
    }

    @media screen and (max-width: 780px) {
        position: initial;
        width: 10vw;
        margin: 0 auto;
        justify-content: center;
        padding: 20px 0 0 0;

        a {
            font-size: 25px;
        }
    }
`;