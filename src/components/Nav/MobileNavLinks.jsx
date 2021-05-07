import React, { useState } from "react";
import styled from "styled-components";
import { Accesibility } from "./Accessibility";
import { MenuToggle } from "./MenuToggle";


const NavLinksContainer = styled.div`
    // height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    // height: 100%;
    list-style: none;
    position: fixed;
    top: 80px;
    right: 0;
    // background-color: #cfd8dc;
    text-align: center;
`;

const LinkItem = styled.li`
    width: 100%; 
    color: #222;
    font-size: 1rem;
    display: inline-block;
    float: right;
    // background-color: #eceff1;
    margin-bottom: 10px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;


const Marginer = styled.div`
    height: 1em;
`;

export function MobileNavLinks(props) {

    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
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

                    <Marginer />

                    <Accesibility />
                    
                </LinksWrapper>
            )}
        </NavLinksContainer> 
    )
}