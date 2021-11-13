import React, { useContext } from 'react'
import styled from 'styled-components';

import { CalculatorContext } from '../../../commons/calculatorProvider';

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(155 155 155);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: black;
    margin: 0 auto;
    &:hover {
        cursor:pointer;
    };
`;

const CButton = () => {

    const{ handleClearNum } = useContext(CalculatorContext)

    return (
        <Button onClick={() => handleClearNum()}>C</Button>
        );
}

export default CButton