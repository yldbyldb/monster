import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(65 65 65);
    border-radius: 30px;
    border: 0px;
    font-size: 15px;
    color: white;
    margin: 0 auto;
    &:hover {
        cursor:pointer;
    };
`;

interface ScientificButtonProps {
    children: React.ReactNode
}

const ScientificButton = (props: ScientificButtonProps) => {
    return (
        <Button onClick={() => console.log('>_<! Nothing happened...')}>
            {props.children}
        </Button>
        );
}

export default ScientificButton