import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components';

import { CalculatorContext } from '../../commons/calculatorProvider'

const HistoryStyles = styled.div`
    background: white;
    width: 300px;
    height: 500px;
    padding: 10px
`

const History = () => {
        
    const { history } = useContext(CalculatorContext);

    //get the history list for local storage
    // const [historyList, setHistoryList] = useState('')

    // useEffect(() => {
    //     const historyListFromLocalStorage = JSON.parse(localStorage.getItem('historyList') || '[]');
    //     setHistoryList(historyListFromLocalStorage);
    // }, [])

    // save the history into localStorage
    // useEffect(() => {
    //     localStorage.setItem('historyList', JSON.stringify(history))
    // }, [history])
    
    return (
        <HistoryStyles>
            {history && history.map(item => 
                    <div key={item.id}>
                        <h2>{item.process}</h2>
                        <h1>{item.result}</h1>
                    </div>
              )}
        </HistoryStyles>
    );
}

export default History