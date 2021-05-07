import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { DeviceSize } from "../Responsive";
import { Accesibility } from "./Accessibility";
import { NavLinks } from "./NavLinks.jsx";
import { MobileNavLinks } from "./MobileNavLinks";

const NavContainer = styled.div`
    // width: 100%;
    height 80px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.15);
    display: flex;
    align-items: center;
    padding: 0 30px;
`;


const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export function Nav(props) {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return (
        <NavContainer>
            <LeftSection>
                <Logo />
            </LeftSection>

            <MiddleSection>
                {!isMobile && <NavLinks />}
            </MiddleSection>
            
            <RightSection>
                {!isMobile && <Accesibility />}
                {isMobile && <MobileNavLinks />}
            </RightSection>
        </NavContainer>
    )
}