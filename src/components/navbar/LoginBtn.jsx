import React from 'react';
import styled from 'styled-components';

const LogInButton = styled.button`
    width: 72px;
    height: 40px;
    background-color: white;
    color: #FA5946;
    font-family: Arimo, sans-serif;
    font-weight: 500;
    border-radius: 8px;
    border: solid 1px;
    border-color: #FA5946;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
        width: 92px;

    }
`;

const SignUpButton = styled.button`
    width: 72px;
    height: 40px;
    background-color: #FA5946;
    color: white;
    font-family: Arimo, sans-serif;
    font-weight: 500;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all ease-in-out 300ms;


    &:hover {
        width: 92px;
    }
`;

const AuthButtons = () => {
    return (
        <div style={{ display: 'flex', gap: '16px' }}>
            <LogInButton>Log In</LogInButton>
            <SignUpButton>Sign Up</SignUpButton>
        </div>
    );
};

export default AuthButtons;