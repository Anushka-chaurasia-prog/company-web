import React from 'react'
import NavButtons from './NavButtons'
import LoginBtn from './LoginBtn'
import styled from 'styled-components';
import logo from '../../assets/full-logo.png'


const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 16px 20px;
  margin: 0;
  background: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 16px;
`;


const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  gap: 24px;
  
  
`;

const btnHeadings = ["For Doctors", "For Partners", "Create ABHA", "About us"]

function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo src={logo} alt="Logo" />
            </LogoContainer>
            <NavButtonsContainer>
                {btnHeadings.map((elem, idx)=>(
                    <NavButtons key={idx} content={elem}/>
                ))} 
            <LoginBtn/>

            </NavButtonsContainer>

        </NavbarContainer>
    )
}

export default Navbar
