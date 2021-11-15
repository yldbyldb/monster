import React, { useContext, FC } from 'react'
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

const EqualButton: FC = () => {

    const { handleClickEqualButton } = useContext(CalculatorContext)

    return (
        <Button onClick={() => handleClickEqualButton()}>=</Button>
        );
}

export default EqualButton