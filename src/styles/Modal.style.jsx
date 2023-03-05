import styled from 'styled-components';

export const StyledModal = styled.div`
    background-color: #fff;
    width: 600px;
    position: absolute;
    height: 300px;
    border-radius:8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5em;
    flex-wrap: wrap;
    padding: 10px;
    transition: .5s;
    animation: showing .7s ease-in-out;


    & > svg{
        position: absolute;
        right: 15px;
        top:15px;
    }
    & > svg:hover{
        cursor: pointer;
    }


    @keyframes showing {
        from{
            transform: translateY(800px);
        }
        to{
            transform: translateY(0);
        }
    }

    @media (max-width:600px){
        &{
            width: 90%;
            font-size: 20px;
        }
    }
`