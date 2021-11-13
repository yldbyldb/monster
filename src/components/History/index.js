import React, { useState } from 'react'
import styled from 'styled-components';

const HistoryStyles = styled.div`
    background: white;
    width: 300px;
    height: 500px;
    padding: 10px
`

const History = () => {
    return (
        <HistoryStyles>
            <h2>9 + 9 =</h2>
            <h1>18</h1>
        </HistoryStyles>
    );
}

export default History