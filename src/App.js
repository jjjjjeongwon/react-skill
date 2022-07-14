import React from 'react';
import './App.css';
import styled from "styled-components"; 
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import ListDic from './ListDic';
import Write from "./components/Write";
import {Route,Routes} from "react-router-dom";


function App() {
  

  return (
    <div className="App">

      <Container>
        <Title>나의 단어장</Title>
      </Container>

      <Routes>
      <Route path="/" element={<ListDic/>}/>
      {/* <Route path="/Input" element={<Input/>}/>  */}
      <Route path="/Write" element={<Write/>}/> 
      </Routes>
      
      
      
    </div>
  );
};

const Container = styled.div`
 position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid rgb(219, 232, 216);      

`;


const Title = styled.div`
    margin-top: 2px;
    height: 28px;
`;


export default App;