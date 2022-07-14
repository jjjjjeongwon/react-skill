import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addDictionaryFB, } from "../redux/modules/lists";


const Write = (props) => {

    const word =React.useRef(null);
    const mean =React.useRef(null);
    const ex =React.useRef(null);


    // const inputData = [{title:"단어",Ref:word},
    //                 {title:"뜻", Ref:mean},
    //                 {title:"예시", Ref:ex}];

    const navigate = useNavigate();
    const dispatch =useDispatch();

    

    const saveWord = ()=>{
        console.log(word.current.value); 
        console.log(mean.current.value); 
        console.log(ex.current.value); 

        const new_word ={
            word:word.current.value, mean:mean.current.value, ex:ex.current.value
        }
       
        dispatch(addDictionaryFB(new_word));
        //모든값정리해서 리덕스로 올려주고 navigate
        navigate("/");
    }

    
    

  return (
        <A>
        <Content>
        <Title>단어 수정하기</Title>

        <form onSubmit ={saveWord}>
        <Word>
            <List>
                <Label>단어</Label>
                <Line
                required
                type ="text"
                ref ={word}
                // maxLength ={limit}
                />
            </List>
        </Word>
       

       
        <Word>
            <List>
                <Label>뜻</Label>
                <Line
                required
                type ="text"
                ref ={mean}
                // maxLength ={limit}
                />
            </List>
        </Word>
    

    
        <Word>
            <List>
                <Label>예시</Label>
                <Line
                required
                type ="text"
                ref ={ex}
                // maxLength ={limit}
                />
            </List>
        </Word>
    
       
        
    

        {/* {inputData.map((list, index) => {
            console.log(list, index)
              return <Input add={list} key={index}/>;
            })} */}

        <Button>등록하기</Button>
        
        </form>

        </Content>
        </A>

    
  )
}

const A =styled.div`
    margin-top: 40px;
    padding: 0px 30px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
`;

const Content =styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 400px;
    margin: 50px auto;
`;

const Title =styled.div`
font-size: 18px;
font-weight: 600;
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
color: rgb(10, 112, 41);
`;


const Word =styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`;

const List =styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`;

const Label =styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
`;

const Line =styled.input`
height: 28px;
    padding: 5px 0px;
    border-bottom: 2px solid rgb(219, 232, 216);
    font-size: 16px;
    font-weight: 500;
    transition: border-color 300ms ease-in-out 0s;
`;

const Button =styled.button`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background-color: rgb(10, 112, 41);
    width: 200px;
    height: 40px;
    font-size: 16px;
    align-self: center;
`;




export default Write;