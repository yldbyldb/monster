import React, { createContext, useState, useCallback, useEffect, ReactNode } from 'react'

interface ContextValue {
    handleDisplayNum: (numInButton: string) => void;
    num: StrOrNum; 
    process: StrOrNum; 
    result: StrOrNum;
    history: IHistory[];
    handleClearNum: () => void;
    handlePercentNum: () => void;
    handleToggleNegative: () => void;
    handleGetSymbol: (symbolInButton: string) => void;
    handleClickEqualButton: () => void;
}

export const CalculatorContext = createContext<ContextValue>({} as any);

export interface IHistory {
    process: string,
    result: number,
    id: number,
}

interface CalculatorProviderProps {
    children: ReactNode
}

export type StrOrNum = string | number

const CalculatorProvider = (props: CalculatorProviderProps) => {
    
    //for the process in history state
    const [process, setProcess] = useState<StrOrNum>('');

    //to display process state
    const [num, setNum] = useState<StrOrNum>('');

    //display result state and for the result in history state
    const [result, setResult] = useState<StrOrNum>('');

    //to save the history state
    const [history, setHistory] = useState<IHistory[]>([]);

    //show the number in display area, when clicking the number button
    const handleDisplayNum = useCallback((numInButton: StrOrNum) => {
        //in if condition the 'num' is to make sure the first number in every input number is not '0'
        if (((num as string) + (numInButton as string)).slice(0,1) !== '0' && ((num as string) + (numInButton as string)).indexOf('.') === ((num as string) + (numInButton as string)).lastIndexOf('.')) {
            setNum((num as string) + (numInButton as string))
            setProcess((process as string) + (numInButton as string))
        } 
    }, [process, setProcess, setNum, num]);

    //percentage the number which is input
    const handlePercentNum = useCallback(() => {
        setProcess(((process as number)*1000)/100000)//to deal with 0.1 + 0.2 ≠ 0.3 issue
        setNum(((num as number)*1000)/100000) //to deal with 0.1 + 0.2 ≠ 0.3 issue
    }, [process, setProcess, setNum, num]);
    
    //toggle to negative/positive
    const handleToggleNegative = useCallback(() => {
        if (num && num > 0) {
            setNum('-' + num)
            setProcess(parseInt('-' + process))
        } else {
            setNum((num as string).slice(1))
            // setProc((proc as number)*-1)
        }
    }, [num, setNum, process, setProcess]);

    //clear the display area
    const handleClearNum = useCallback(() => {
        setProcess('');
        setNum('')
        setResult('')
    }, [setProcess, setNum, setResult]);


    //get the symbol when clicking
    const handleGetSymbol = useCallback((symbolInButton) => {
        setNum('')
        setResult('')
        if(process) {
            setProcess(process + symbolInButton)
        }
    }, [process, setProcess]);

    //get the result and push new object in history array when clicking the '='
    const handleClickEqualButton = () => {
        if (process) {
            let result = Math.round(eval(process as string)*100000)/100000;
            setHistory([...history, {process: process + '=', result, id: new Date().getTime()}])
            setProcess('')
            setNum('')
            setResult(result)
        }
    }

    useEffect(() => {
        const historyListFromLocalStorage = JSON.parse(localStorage.getItem('historyList') || '[]');
        setHistory(historyListFromLocalStorage)
    }, [])

    //save the history into localStorage
    useEffect(() => {
        console.log(history);
        localStorage.setItem('historyList', JSON.stringify(history))
    }, [history])

    return (
        <CalculatorContext.Provider value={{
            handleDisplayNum,
            num, 
            process, 
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