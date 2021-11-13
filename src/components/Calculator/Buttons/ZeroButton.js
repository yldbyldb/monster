import React from 'react'
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
    &:hover {
        cursor:pointer;
    };
`;

const ZeroButton = ({ num }) => {
    return (
        <Button onClick={() => console.log('hdhd')}>
            {num}
        </Button>
        );
}

export default ZeroButton