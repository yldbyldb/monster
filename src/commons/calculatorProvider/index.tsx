import React, { createContext, useState, useCallback, useEffect, ReactNode } from 'react'

interface ContextValue {
    handleDisplayNum: (numInButton: string) => void;
    num: any; 
    proc: any; 
    result: any;
    history: IHistory[];
    handleClearNum: any;
    handlePercentNum: any;
    handleToggleNegative: any;
    handleGetSymbol: any;
    handleClickEqualButton: any;

}

export const CalculatorContext = createContext<ContextValue>({} as any);

export interface IHistory {
    process: string,
    result: number,
    id: object,
}

interface CalculatorProviderProps {
    children: ReactNode
}

export type StrOrNum = string | number

const CalculatorProvider = (props: CalculatorProviderProps) => {
    
    //for the process in history state
    const [proc, setProc] = useState<StrOrNum>('');

    //to display process state
    const [num, setNum] = useState<StrOrNum>('');

    //display result state and for the result in history state
    const [result, setResult] = useState<StrOrNum>('');

    //to save the history state
    const [history, setHistory] = useState<IHistory[]>([]);

    //show the number in display area, when clicking the number button
    const handleDisplayNum = useCallback((numInButton: StrOrNum) => {
        //in if condition the 'num' is to make sure the first number in every input number is not '0'
        if (((num as string) + (numInButton as string)).slice(0,1) !== '0' &&((num as string) + (numInButton as string)).indexOf('.') === ((num as string) + (numInButton as string)).lastIndexOf('.')) {
            setNum((num as string) + (numInButton as string))
            setProc((proc as string) + (numInButton as string))
        } 
    }, [proc, setProc, setNum, num]);

    //percentage the number which is input
    const handlePercentNum = useCallback(() => {
        setProc(((proc as number)*1000)/100000)//to deal with 0.1 + 0.2 ≠ 0.3 issue
        setNum(((num as number)*1000)/100000) //to deal with 0.1 + 0.2 ≠ 0.3 issue
    }, [proc, setProc, setNum, num]);
    
    //toggle to negative/positive
    const handleToggleNegative = useCallback(() => {
        if (proc && proc > 0) {
            setProc('-' + proc)
        } else {
            setProc((proc as string).slice(1))
        }
    }, [proc, setProc]);

    //clear the display area
    const handleClearNum = useCallback(() => {
        setProc('');

        //to make sure the num in line 22 is ''
        setNum('')
        setResult('')
    }, [setProc]);


    //get the symbol when clicking
    const handleGetSymbol = useCallback((symbolInButton) => {
        setNum('')
        setResult('')
        if(proc) {
            setProc(proc + symbolInButton)
        }
    }, [proc]);

    //get the result and push new object in history array when clicking the '='
    const handleClickEqualButton = () => {
        if (proc) {
            let result = Math.round(eval(proc as string)*100000)/100000;
            setHistory([...history, {process: proc + '=', result: result, id: new Date()}])
            setProc('')
            setNum('')
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
            num, 
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