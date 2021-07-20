import styled from "styled-components";

export const section = styled.section`
    width: 100%;
    height: 50vh;
    display: flex;
    color: #594f4f;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;

    @media screen and (max-width: 500px) {
        height: 25vh;
    }
`;

export const countdownWrapper = styled.div`
    width: 80%;
    padding: 2%;
    height: 210px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.2);

    .titleSection {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        h1 {
            font-size: 15pt;
            font-weight: 400;
            text-align: center;

            strong {
                color:  #fe4365;
            }
        }

        h5 {
            font-weight: 600;
            font-size: 16pt;
        }
    }

    .countdown {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 680px) {
        width: 90vw;
    }

    @media screen and (max-width: 580px) {
        .titleSection {
            h1 {
                font-size: 12pt;
            }
        }
    }

    @media screen and (max-width: 490px) {
        height: 150px;
    }

    @media screen and (max-width: 420px) {
        .titleSection {
            h1 {
                font-size: 13px;
            }
        }
    }

     @media screen and (max-width: 320px) {
         h1 {
            line-height: 15px;
         }
     }
`;

export const box = styled.div`
    width: 23%;
    display: flex;
    color:  #fe4365;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
        font-size: 45pt;
    }

    @media screen and (max-width: 490px) {
        font-size: 13px;

        h3 {
            font-size: 25pt;
        }
    }

    @media screen and (max-width: 320px) {
        font-size: 10px;
    }
`;