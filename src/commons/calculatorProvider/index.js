import React, { createContext, useState, useCallback, useEffect } from 'react'

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {
    
    //display the process state
    const [proc, setProc] = useState('');

    //display result state
    const [result, setResult] = useState('');

    //to save the history state
    const [history, setHistory] = useState([]);

    //show the number in display area, when clicking the number button
    const handleDisplayNum = useCallback((numInButton) => {
        setProc(proc + numInButton)
    }, [proc, setProc]);

    //percentage the number which is input
    const handlePercentNum = useCallback(() => {
        setProc((proc*1000)/100000) //to deal with 0.1 + 0.2 ≠ 0.3 issue
    }, [proc, setProc]);
    
    //toggle to negative/positive
    const handleToggleNegative = useCallback(() => {
        if (proc && proc > 0) {
            setProc('-' + proc)
        } else {
            setProc(proc.slice(1))
        }
    }, [proc, setProc]);

    //clear the display area
    const handleClearNum = useCallback(() => {
        setProc('');
        setResult('')
    }, [setProc]);


    //get the symbol when clicking
    const handleGetSymbol = useCallback((symbolInButton) => {
        if(proc) {
            setProc(proc + symbolInButton)
        }
    }, [proc]);

    //get the result and push new object in history array when clicking the '='
    const handleClickEqualButton = () => {
        if (proc) {
            let result = Math.round(eval(proc)*100000)/100000;
            setHistory([...history, {process: proc + '=', result: result, id: new Date()}])
            setProc('')
            setResult(result)
        }
    }

    useEffect(() => {
        const historyListFromLocalStorage = JSON.parse(localStorage.getItem('historyList') || '[]');
        setHistory(historyListFromLocalStorage)
    }, [setHistory])

    //save the history into localStorage
    useEffect(() => {
        console.log(history);
        localStorage.setItem('historyList', JSON.stringify(history))
    }, [history])

    return (
        <CalculatorContext.Provider value={{
            handleDisplayNum, 
            proc, 
            result,
            history,
            handleClearNum,
            handlePercentNum,
            handleToggleNegative,
            handleGetSymbol,
            handleClickEqualButton,
        }}>
            {props.children}
        </CalculatorContext.Provider>
    );
}

export default CalculatorProvider