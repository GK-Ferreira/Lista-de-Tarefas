import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 100px;
    font-weight: bold;
    color: #fff;
    background-color: #05c5e8;
    border-radius: 8px;
    border: 0;
    transition: transform .5s;

    &:hover{
        cursor: pointer;
    transform: scale(1.1);
    }

    @media (max-width:600px){
        & {
            position: absolute;
            bottom: 12px;
            width: 90%;
           margin: 0 auto;
            height: 50px;
            transition: transform .2s;
        }
        &:hover{
            transform: none;
        }
        &:active{
            transform: scale(1.1);
        }
    }
`