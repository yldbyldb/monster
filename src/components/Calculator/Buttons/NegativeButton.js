import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(155 155 155);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: black;
    margin: 0 auto;
    &:hover {
        cursor:pointer;
    };
`;

const NegativeButton = () => {
    return (
        <Button onClick={() => console.log('hdhd')}>+/-</Button>
        );
}

export default NegativeButton