import styled from "styled-components";

export const section = styled.section`
    width: 100%;
    height: 50vh;
    display: flex;
    color: #594f4f;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
`;

export const countdownWrapper = styled.div`
    width: 80%;
    height: 80%;
    padding: 2%;
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
            font-weight: 400;

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
`;