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

    //init history state
    const initHistoryList = {
        historyList: []
    };
    //to save the history state
    const [history, setHistory] = useState(initHistoryList);

    //to save the process temporarily for history
    const [proc, setProc] = useState('');
    //to save the result temporarily for history
    const [result, setResult] = useState('');
        
    const { preNum, symbol, num, resInProvider } = useContext(CalculatorContext);

    const handleDisplayProcess = () => {
        setProc(preNum + symbol + num);
        console.log('proc:'+proc);
        return proc
    }

    const handleDisplayResult = () => {
        setResult(preNum)
        console.log('result:'+resInProvider);

        return resInProvider;
    }

    const pushInList = () => {
        handleDisplayProcess();
        handleDisplayResult()
        setHistory([...history.historyList, {process: proc, result: preNum}])
        console.log(history);
    }

    // useEffect(() => {
    //     const historyList = JSON.parse(localStorage.getItem('historyList' || '[]'))
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('historyList', JSON.stringify())
    // })

    useEffect(() => {
        // pushInList()
        handleDisplayProcess();
        handleDisplayResult()


    })
    
    return (
        <HistoryStyles>
            <h2>{`${preNum} ${symbol} ${num}`}</h2>
            <h1>{resInProvider}</h1>
        </HistoryStyles>
    );
}

export default History