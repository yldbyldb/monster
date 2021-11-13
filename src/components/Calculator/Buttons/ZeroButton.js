import React, { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 60px;
    background: rgb(65 65 65);
    border-radius: 30px;
    border: 0px;
    font-size: 25px;
    color: white;
    margin: 0 auto;
`;

const ZeroButton = ({ num }) => {
    return (
        <Button>0</Button>
        );
}

export default ZeroButton