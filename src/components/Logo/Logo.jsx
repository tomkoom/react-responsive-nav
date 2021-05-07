import React from "react";
import styled from "styled-components";
import PlaceholderLogo from "./PlaceholderLogo.svg";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    // height: 40px;

    img {
        width: 28px;
    }
`;

const LogoText = styled.h2`
    font-size: 1.125rem;
    margin: 0;
    margin-left: 8px;
    color: #222;
    font-weight: 900;
`;


export function Logo(props) {
    return (
        <LogoWrapper>
            <LogoImg><img src={PlaceholderLogo} alt="Logo"/></LogoImg>
            <LogoText>Logo</LogoText>
        </LogoWrapper>
    )
}