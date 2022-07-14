import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Buttonbox>
        <Button>☑️</Button>
        <Button> ☑️</Button>
         
        <Button>✖️</Button>
      </Buttonbox>
      <Titlebox>
        <Title className="list_item" >
          
        </Title>

        <div>{props.list.word}</div>
        <C>{props.list.mean}</C>
        <C>{props.list.ex}</C>
      </Titlebox>
    </Card>
  );
};

const Buttonbox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Button = styled.div`
  color: rgb(10, 112, 41);
  font-size: 24px;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  border: 2px solid rgb(10, 112, 41);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: box-shadow 300ms ease-in-out 0s;
  text-align: left;
`;

const Titlebox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin-right: 5px;
  font-size: 24px;
  font-weight: 600;
`;

const P = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;

const C = styled.div`
  margin-top: 5px;
  color: rgb(9, 132, 227);
  font-size: 14px;
`;

export default Cards;
