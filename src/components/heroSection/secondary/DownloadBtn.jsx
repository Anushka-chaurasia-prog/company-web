import React from 'react'
import styled from 'styled-components';

const DownloadButton = styled.button`
    width: 100%;
    margin-top: 48px;
    background-color: #FA5946;
    color: white;
    padding: 24px;
    font-family: Arimo, sans-serif;
    font-weight: 500;
    border-radius: 16px;
    border: none;
    transition: all ease-in-out 300ms;


    &:hover {
        transform: scale(1.1);
    }
`;

const DownloadBtn =()=> {
  return (
    <div>
      <DownloadButton>Download Roojh App</DownloadButton>
    </div>
  )
}

export default DownloadBtn
