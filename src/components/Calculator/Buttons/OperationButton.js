import React, { useContext } from 'react'
import styled from 'styled-components';

import { CalculatorContext } from '../../../commons/calculatorProvider';

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(241 142 47);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: white;
    margin: 0 auto;
    &:hover {
        cursor:pointer;
    };
`;

const OperationButton = ({ symbol }) => {

    const { handleGetSymbol } = useContext(CalculatorContext)

    return (
        <Button onClick={() => handleGetSymbol(symbol)}>
            {symbol}
        </Button>
        );
}

export default OperationButton