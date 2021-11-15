import { fireEvent, render, waitFor, cleanup, screen } from '@testing-library/react'
import React from 'react'

import Calculator from '../components/Calculator';
import CalculatorProvider from '../commons/calculatorProvider'

describe('Calculator', () => {

    afterEach(cleanup)
    test('display area show the correct result click button', async () => {
        const { getByTestId, } = render(
            <CalculatorProvider>
                <Calculator/>
            </CalculatorProvider>
        );
        const displayNum = getByTestId('display')
        const button4 = screen.getByRole('button', {name: '4'})
        const button5 = screen.getByRole('button', {name: '5'})
        const equalButton = screen.getByRole('button', {name: '='})
        const operationButton = screen.getByRole('button', {name: '*'})
        fireEvent.click(button4);
        fireEvent.click(operationButton);
        fireEvent.click(button5);
        fireEvent.click(equalButton);
        await waitFor(() => {
            expect(displayNum.textContent).toEqual('20')
        })
    })
})
