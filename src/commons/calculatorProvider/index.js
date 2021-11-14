import React, { createContext, useState, useCallback } from 'react'

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {
    
    //display area number state
    const [num, setNum] = useState('');

    //operation symbol state
    const [symbol, setSymbol] = useState('');

    //to save the previous number state
    const [preNum, setPreNum] = useState('')

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
    

    //save the result for history list
    const [resInProvider, setResInProvider] = useState('')

    //show the number in display area, when clicking the number button
    const handleDisplayNum = useCallback((numInButton) => {
        setNum(num + numInButton)
        console.log(num);
    }, [num, setNum]);

    //clear the display area
    const handleClearNum = useCallback(() => {
        setNum('');
        setSymbol('');
        setPreNum('');
    }, [setNum, setSymbol, setPreNum]);

    //percentage the number which is input
    const handlePercentNum = useCallback(() => {
        setNum((num*1000)/100000) //to deal with 0.1 + 0.2 ≠ 0.3 issue
    }, [num, setNum]);

    //toggle to negative/positive
    const handleToggleNegative = useCallback(() => {
        if (num && num > 0) {
            setNum('-' + num)
        } else {
            setNum(num.slice(1))
        }
    }, [num, setNum]);

    //get the symbol when clicking
    const handleGetSymbol = useCallback((symbolInButton) => {
        if(num) {
            setSymbol(symbolInButton)//save the operation symbol
            setPreNum(num);//save the previous num that clicked
            setNum('');//clear the display area
        }
    }, [num]);

    //get the result when clicking the '='
    const handleClickEqualButton = () => {
        if (num && preNum) {
            switch(symbol) {
                case '/': 
                    setPreNum((preNum*1000)/(num*1000));
                    setSymbol('')
                    setResInProvider((preNum*1000)/(num*1000))
                    break;
                case '*': 
                    setPreNum(((preNum*1000)*(num*1000))/1000000);
                    setSymbol('')
                    setResInProvider(((preNum*1000)*(num*1000))/1000000)
                    break;
                case '-': 
                    setPreNum(((preNum*1000)-(num*1000))/1000);
                    setSymbol('')
                    setResInProvider(((preNum*1000)-(num*1000))/1000)
                    break;
                case '+': 
                    setPreNum(((preNum*1000)+(num*1000))/1000);
                    setSymbol('')
                    setResInProvider(((preNum*1000)+(num*1000))/1000)
                    break;
                default: 
                    break;
            }
            setNum('')
        }
    }

    return (
        <CalculatorContext.Provider value={{
            handleDisplayNum, 
            num, 
            preNum,
            symbol,
            resInProvider,
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