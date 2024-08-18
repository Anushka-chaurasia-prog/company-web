import React from 'react'
import styled from 'styled-components';

const RoojhBackground = styled.div`
  position: absolute;
  top: -220px;
  font-family: Arimo;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  font-size: 345px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.02);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;


const BgRoojh = ()=>{
    return (
        <RoojhBackground>Roojh</RoojhBackground>
    )
}

export default BgRoojh;