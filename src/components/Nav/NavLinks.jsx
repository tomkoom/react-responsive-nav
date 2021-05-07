import React from "react";
import styled from "styled-components";


const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding 0;
    display: flex;
    height: 100%;
    list-style: none;
`;


const LinkItem = styled.li`
    height: 100%;
    padding: 0 15px;
    // color: #222;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
        border-bottom: 2px solid #2ecc71; 
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;


export function NavLinks(props) {
    return (
        <NavLinksContainer>
            <LinksWrapper>

                <LinkItem>
                    <Link href="#">About Us</Link>
                </LinkItem>

                <LinkItem>
                    <Link href="#">How It Works</Link>
                </LinkItem>

                <LinkItem>
                    <Link href="#">Contact</Link>
                </LinkItem>

            </LinksWrapper>
        </NavLinksContainer>
    )
}