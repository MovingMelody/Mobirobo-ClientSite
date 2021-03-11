import React from "react";
import styled from "styled-components";
export default function issuesWeSolve() {
  var issues = [
    {
      issueName: "Broken Screens",
      img: "https://www.flaticon.com/svg/static/icons/svg/944/944004.svg",
      width:34
    },
    {
      issueName: "Battery Dead",
      img: "https://www.flaticon.com/svg/static/icons/svg/2533/2533244.svg",
      width:35
    },
    {
      issueName: "Motherboard",
      img: "https://www.flaticon.com/svg/static/icons/svg/1130/1130123.svg",
      width:35
    },
    {
      issueName: "Apple Watch",
      img: "https://www.flaticon.com/svg/static/icons/svg/644/644529.svg",
      width:35
    },
  ];
  return (
      <div>
    <Header>Issues We Solve</Header>
    <Description>
            Apart from the below list we fix all smartphone and tablet related issues.
          </Description>
    <AllIssuesWrapper>
      {issues.map((eachIssue) => {
        return (
          <EachIssue  key={eachIssue}>
            <img
              style={{ marginRight: "20px" }}
              src={eachIssue.img}
              alt=""
              width={eachIssue.width}
            />
            <IssueTitle>{eachIssue.issueName}</IssueTitle>
          </EachIssue>
        );
      })}
    </AllIssuesWrapper>
    </div>
  );
}

const AllIssuesWrapper = styled.div`
  max-width: 700x;
  display: grid;
  margin: 0 auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;
const Header = styled.h2`
  display: flex;
  font-size: 1.8rem;
  text-align: center;
  margin: 50px 0px 6px 0px;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin: 25px 0px 12px 0px;
  }
`;
const EachIssue = styled.div`
  display: flex;
  -webkit-box-shadow: 8px 12px 24px 5px rgba(204, 214, 246, 0.45);
  box-shadow: 8px 12px 24px -5px rgba(204, 214, 246, 0.45);
  /* transform: rotate(2deg); */
  background: #fff;
  padding: 10px 0px 10px 8px;
  align-items: center;
  border: 1px solid rgba(204, 214, 246);
  border-left: 3px solid #ffaa19;
  
  border-radius: 10px;
`;

const IssueTitle = styled.p`
font-size:1.2rem;
white-space: nowrap;
font-family:"Poppins",sans-serif;
`;


const Description = styled.p`
text-align:center;
display: flex;
justify-content:center;
  margin-bottom:20px;
@media screen and (max-width: 480px) {

  font-size:0.85rem;
}
`;