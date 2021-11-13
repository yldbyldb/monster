import React, { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 60px;
    height: 60px;
    background: rgb(65 65 65);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: white;
    margin: 0 auto;
`;

const NumberButton = ({ num }) => {
    return (
        <Button>
            {num}
        </Button>
        );
}

export default NumberButton