import React, { createContext, useState } from 'react'

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {
    
    //display area number state
    const [num, setNum] = useState('');
    
    //show the number in display area, when clicking the number button
    const handleDisplayNum = (numInButton) => {
        setNum(num + numInButton)
        console.log(num);
    }

    return (
        <CalculatorContext.Provider value={{handleDisplayNum, num}}>
            {props.children}
        </CalculatorContext.Provider>
    );
}

export default CalculatorProvider