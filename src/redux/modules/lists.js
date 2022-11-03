// lists.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "lists/CREATE";

const initialState = {
  list: [
    // { word: "set", mean: "두다", ex: "예시" },
  ],
};

// Action Creators
export function loadDictionary(dic_list) {
  return { type: LOAD, dic_list };
}
export function createList(lists) {
  return { type: CREATE, lists };
}

//middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    console.log(dictionary_data);
    

    let dic_list = [];

    dictionary_data.forEach((b) => {
      console.log(b.data());
      dic_list.push({id:b.id, ...b.data() });
    });
    console.log(dic_list);

    dispatch(loadDictionary(dic_list)); //27->여기로 =={ type: "bucket/LOAD", dic_list }
  };
};

export const addDictionaryFB = (list) =>{
    return async function (dispatch){
       const docRef= await addDoc(collection(db,"dictionary"),list);
       console.log((await getDoc(docRef)).data());
       alert('성공!')
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
        return{list:action.dic_list};
    }
    case "lists/CREATE": {
      const new_list = [...state.list, action.lists];
      return { list: new_list };
    }
    default:
      return state;
  }
}
