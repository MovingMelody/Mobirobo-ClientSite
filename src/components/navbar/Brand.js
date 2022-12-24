import React from 'react'
import styled from "styled-components";

// import logo from "../../assets/logo.jpeg";
import logo2 from "../../assets/MOBIROBO.png";

const Brand = () => {
  return (
    <Image src={logo2} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 65%;
  margin: auto 0;
  /* border-radius:50%; */
`;