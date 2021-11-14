import React, { useContext } from 'react'
import styled from 'styled-components';

import { CalculatorContext } from '../../commons/calculatorProvider'

const HistoryStyles = styled.div`
    background: white;
    width: 300px;
    height: 500px;
    padding: 10px;
    overflow: scroll;
    & h4 {
        text-align: right;
        margin-bottom: 5px;
    }
    & h3 {
        text-align: right;
        margin-top: 5px;
    }
`

const History = () => {
        
    const { history } = useContext(CalculatorContext);
    
    return (
        <HistoryStyles>
            {history && history.map(item => 
                    <div key={item.id}>
                        <h4>{item.process}</h4>
                        <h3>{item.result}</h3>
                    </div>
              )}
        </HistoryStyles>
    );
}

export default History