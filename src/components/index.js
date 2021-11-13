import React, { useState } from 'react'
import styled from 'styled-components';

import History from './History';
import Calculator from './Calculator';

const CalculatorAndHistoryStyles = styled.div`
    display: flex;
    justify-content: space-around;
    background: rgb(210 210 210);
    width: 90vw;
    padding: 10px;
    margin: 0 auto;
`

const CalculatorAndHistory = () => {
    return (
        <CalculatorAndHistoryStyles>
            <History />
            <Calculator />
        </CalculatorAndHistoryStyles>
    );
}

export default CalculatorAndHistory