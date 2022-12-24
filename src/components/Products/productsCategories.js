import styled from "styled-components";
import React from "react";
import "./hello.css";
import mobileCase from "../../assets/mobile-case.jpg";
export default function hello() {
  return (
    <div>
      <CategoryWrapper>
        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(
      rgba(255, 0, 0, 0.15), 
      rgba(255, 0, 0, 0.15)
    ),url("https://images.unsplash.com/photo-1511282419954-ef8b90aec22b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
          }}
        >
          <EachItemDiv>
            <CategoryHeading>Mobile displays</CategoryHeading>
            <Button>Fix My Screen</Button>
          </EachItemDiv>
        </EachItemContainer>

        <EachItemContainer
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(
      rgba(255, 0, 0, 0.35), 
      rgba(255, 0, 0, 0.30)
    ),url("https://i.pinimg.com/originals/06/be/6e/06be6e1edf9ed8cb9c309d121ea189e7.png")`,
          }}
        >
          <EachItemDiv>
            <CategoryHeading>Oca Machines</CategoryHeading>
            <Button>View Products</Button>
          </EachItemDiv>
        </EachItemContainer>
        <EachItemContainer>
          <EachItemDiv>
            <CategoryHeading>Electronics</CategoryHeading>
            <Button>View Products</Button>
          </EachItemDiv>
        </EachItemContainer>
      </CategoryWrapper>
    </div>
  );
}

const EachItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryHeading = styled.h3`
  padding: 1px 0px;
  margin: 10px 0px 50px 0px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.1rem;
  color: white;
  /* text-align: center; */
`;

const CategoryWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr)); */
`;

const EachItemContainer = styled.div`
  background: white;
  padding: 25px 20px;
  border-radius: 6px;
  /* border: 1px solid rgba(204, 214, 246); */
  overflow-wrap: break-word;
  flex-direction: column;
  justify-self: auto;
  background-image:linear-gradient(
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0.30)
    ) ,url("https://images.unsplash.com/photo-1566793474285-2decf0fc182a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
`;

const Button = styled.button`
  background: transparent;
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 50px;
  outline:none;
  cursor:pointer;
  font-size: 0.85rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;
