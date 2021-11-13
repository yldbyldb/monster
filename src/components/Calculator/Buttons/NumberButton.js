import React, { useContext } from 'react'
import styled from 'styled-components';

import { CalculatorContext } from '../../../commons/calculatorProvider'

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(65 65 65);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: white;
    margin: 0 auto;
    &:hover {
        cursor:pointer;
    };
`;

const NumberButton = ({ num }) => {

    const { handleDisplayNum } = useContext(CalculatorContext)

    return (
        <Button onClick={() => handleDisplayNum(num)}>
            {num}
        </Button>
        );
}

export default NumberButton