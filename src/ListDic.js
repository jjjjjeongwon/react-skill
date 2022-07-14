// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loadDictionaryFB} from "./redux/modules/lists";

const ListDic = (props) => {
  const navigate = useNavigate();
  const my_lists = useSelector((state) => state.lists.list);
  console.log(my_lists);

  const dispatch =useDispatch();

  React.useEffect(()=>{
    dispatch(loadDictionaryFB());
    
}, []);

  return (
    <>
      <List>
        <All>
          <Content>
            {my_lists.map((item, index) => {
              return <Cards list={item} key={index}/>;
            })}
          </Content>
          <Circle
            onClick={() => {
              navigate("/Write");
            }}
          >
            +
          </Circle>
        </All>
      </List>
    </>
  );
};

const All = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;

const List = styled.div`
  margin-top: 40px;
  padding: 0px 30px;
`;


const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 50px 0px;
`;

const Circle = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background-color: rgb(10, 112, 41);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 10px;
  right: 10px;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default ListDic;
