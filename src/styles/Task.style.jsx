import styled from 'styled-components';


export const StyledTask = styled.div`
    background-color:${(props) => (props.checked ? "#319fe8" : "rgba(0, 0, 0, 0.3)")};
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 10px;
    
    & span{
        color:${(props) => (props.checked ? "#1f6a9c" : "#FFF")};
        text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
    }

    & .icons{
    display: flex;
    width: 55px;
    justify-content: space-between;

    & .actions {
    cursor: pointer;
}

}
`