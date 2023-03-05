import styled from 'styled-components';


export const StyledBox = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    overflow: hidden;
    overflow-y: scroll;
    
    &::-webkit-scrollbar{
        background-color: rgba(255,255,255,0.3);
        border-radius: 10px;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, 0.2);
    }

    @media (max-width:600px) {
    & {
        width: 90%;
        height: 64vh;
    }
    &::-webkit-scrollbar{
        display: none;
    }
    &::-webkit-scrollbar-thumb{
        display: none;
    }
}
`