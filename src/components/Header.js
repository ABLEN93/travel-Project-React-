import React from "react";
import styled from 'styled-components';

const MyHeader=styled.h1`
background-color: #d4c6eb;
margin-top: 0%;
height: 50px;
color: brown;
padding: 10px;
text-align: center;
position: fixed;
  top: 0%;
  width: 100%;

`

function Header() {
  return (
    <>
    <MyHeader>my travel Journal</MyHeader>
    </>
  )
}

export default Header