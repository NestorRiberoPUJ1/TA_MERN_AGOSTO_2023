import styled from "styled-components";




const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.variant === "primary" && `
        background: #BF4F74;
        color: white;
    `}
    ${props => props.variant === "secondary" && `
    background: dodgerblue;
    color: white;
    `}
    ${props => props.variant === "dark" && `
    background: black;
    color: white;
    `}
`;


export default StyledButton;