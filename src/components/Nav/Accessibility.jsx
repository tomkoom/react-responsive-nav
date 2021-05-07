import React from "react";
import styled from "styled-components";


const AccesibilityContainer = styled.div`
    display: flex;
    margin: 0 20px;
`;

const SignUpBtn = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 4px;
    background-color: #6adf76;
    background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #00c9ff;
    }

    &:not(:last-of-type) {
        margin-right: 12px;
    }
`;

const SignInBtn = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #222;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #000;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #222;
    }

    &:not(:last-of-type) {
        margin-right: 12px;
    }
`;

export function Accesibility(props) {
    return (
        <AccesibilityContainer>

            <SignInBtn>
                Sign In
            </SignInBtn>

            <SignUpBtn>
                Sign Up
            </SignUpBtn>

        </AccesibilityContainer>
    )

}