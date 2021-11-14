import React, { useContext } from 'react'
import styled from 'styled-components';

import NumberButton from './Buttons/NumberButton';
import CButton from './Buttons/CButton';
import OperationButton from './Buttons/OperationButton';
import PercentageButton from './Buttons/PercentageButton';
import NegativeButton from './Buttons/NegativeButton';
import ZeroButton from './Buttons/ZeroButton';
import ScientificButton from './Buttons/ScientificButton';
import EqualButton from './Buttons/EqualButton';
import { CalculatorContext } from '../../commons/calculatorProvider'

const CalculatorStyles = styled.div`
    background: black;
    width: 700px;
    height: 500px;
    padding: 10px;
    @media (max-width: 1200px) {
        width: 300px;
    };
    .displayArea {
        width: 100%;
        height: 20%;
        color: white;
        text-align: right;
        font-size: 80px;
    };
    .buttonArea {
        display: flex;

    }
    .scientificButton {
        margin: 0 auto;
        display: grid;
        grid-gap: 20px 10px;
        grid-template-columns: repeat(6, 1fr);
        @media (max-width: 1200px) {
        display: none;
    };

    }
    .simpleButton {
        margin: 0 auto;
        display: grid;
        grid-gap: 20px 10px;
        grid-template-columns: repeat(4, 1fr);
    }
`

const Calculator = () => {

    const { num, symbol, preNum, resInProvider } = useContext(CalculatorContext)

    return (
        <CalculatorStyles>
            <div className="displayArea">
                { num || preNum } 
            </div>
            <div className="buttonArea">
                <div className="scientificButton">
                    <ScientificButton>(</ScientificButton>
                    <ScientificButton>)</ScientificButton>
                    <ScientificButton>mc</ScientificButton>
                    <ScientificButton>m+</ScientificButton>
                    <ScientificButton>M-</ScientificButton>
                    <ScientificButton>Mr</ScientificButton>
                    <ScientificButton>2<sup>nd</sup></ScientificButton>
                    <ScientificButton>x<sup>2</sup></ScientificButton>
                    <ScientificButton>x<sup>3</sup></ScientificButton>
                    <ScientificButton>x<sup>y</sup></ScientificButton>
                    <ScientificButton>e<sup>x</sup></ScientificButton>
                    <ScientificButton>10<sup>x</sup></ScientificButton>
                    <ScientificButton>1/x</ScientificButton>
                    <ScientificButton><sup>2</sup>&radic;x</ScientificButton>
                    <ScientificButton><sup>3</sup>&radic;x</ScientificButton>
                    <ScientificButton><sup>y</sup>&radic;x</ScientificButton>
                    <ScientificButton>ln</ScientificButton>
                    <ScientificButton>log<sub>10</sub></ScientificButton>
                    <ScientificButton>x!</ScientificButton>
                    <ScientificButton>sin</ScientificButton>
                    <ScientificButton>cos</ScientificButton>
                    <ScientificButton>tan</ScientificButton>
                    <ScientificButton>e</ScientificButton>
                    <ScientificButton>EE</ScientificButton>
                    <ScientificButton>Rad</ScientificButton>
                    <ScientificButton>sinh</ScientificButton>
                    <ScientificButton>cosh</ScientificButton>
                    <ScientificButton>tanh</ScientificButton>
                    <ScientificButton>&pi;</ScientificButton>
                    <ScientificButton>Rand</ScientificButton>
                </div>
                <div className="simpleButton">
                    <CButton />
                    <NegativeButton />
                    <PercentageButton />
                    <OperationButton symbol='/'/>
                    <NumberButton num={1}/>
                    <NumberButton num={2}/>
                    <NumberButton num={3}/>
                    <OperationButton symbol='*'/>
                    <NumberButton num={4}/>
                    <NumberButton num={5}/>
                    <NumberButton num={6}/>
                    <OperationButton symbol='-'/>
                    <NumberButton num={7}/>
                    <NumberButton num={8}/>
                    <NumberButton num={9}/>
                    <OperationButton symbol='+'/>
                    <div style={{gridColumn: '1/3'}}>
                        <ZeroButton num={0}/>
                    </div>
                    <NumberButton num='.'/>
                    <EqualButton />
                </div>
            </div>
        </CalculatorStyles>
    );
}

export default Calculator