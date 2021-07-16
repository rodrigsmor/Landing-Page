import styled from "styled-components";

export const Footer = styled.footer`
    width: 100vw;
    height: fit-content;
    background: #cc0025;

    .footer {
        color: #fff;
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
        background: #5e020d;
        font-size: 15px;
        align-items: center;
        font-family: Poppins, sans-serif;

        a {
            color: #fff;
            font-size: 16px;
            padding: 0 0 0 10px;
        }
    }
`;

export const container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   padding: 2rem 10vw;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const boxItems = styled.div`
    color: #fff;
    display: flex;
    display: flex;
    font-size: 13px;
    flex-direction: row-reverse;
    font-family: Poppins, sans-serif;

    .items {
        margin: 0 8vw 0 0;

        p {
            font-weight: 600;
            font-size: 14px;
        }

        li {
            list-style: none;
            cursor: pointer;
            line-height: 30px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export const inputWrapper = styled.div`
    margin: 0;
    color: #fff;
    font-size: 15px;
    width: fit-content;
    font-family: Poppins, sans-serif;

    div {
        padding: 5px 5px 5px 20px;
        width: fit-content;
        background: #fcd4d9;
        border-radius: 30px;
        margin: 10px 0 0;
        border: 1px solid #962062;
    }

    input[type^="email"] {
        width: 15vw;
        outline: none;
        color: #962062;
        font-size: 13px;
        border: transparent;
        background: transparent;
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
`;

export const contacts = styled.div`
    flex-basis: 100%;
    display: flex;
    margin: 30px 0 0;
    color: #fff;
    font-family: Poppins, sans-serif;
    align-items: center;

    i {
        color: #5e020d;
        font-size: 20px;
        margin: 0 5px 0 15px;
    }

    p {
    }

    .logo_Icon {
        font-size: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
    
        h1 {
            font-size: 20px;
            font-weight: 500;
            margin: 0 0 0 5px;
            color: #fff;
        }

        span {
            color: #5e020d;
        }

        i {
            margin: 0 0 0 0;
        }
    }
`;