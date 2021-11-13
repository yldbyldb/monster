import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(241 142 47);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: white;
    margin: 0 auto;
    &:hover {
        cursor:pointer;
    };
`;

const OperationButton = ({ symbol }) => {
    return (
        <Button onClick={() => console.log('hdhd')}>
            {symbol}
        </Button>
        );
}

export default OperationButton