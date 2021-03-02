import { useReducer } from 'react';
import "./App.css"

import {changeName, changeWish} from './action/action'

const initialState = {
  name: "Ishrat",
  wish: "coding"
}

const reducer = (state=initialState, action) => {
  switch(action.type){
      case "CHANGE_NAME":
          return {
              ...state,
              name: action.payload
          }
      case "ADD_WISH":
          return {
              ...state,
              wish: action.payload
          }
      default:
          return state
  }
}

const App =()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <div className="App">
        <h1>useReducer</h1>
        Name: {state.name} <br/>
        Wishes: {state.wish}<br/>
        <button onClick={() => dispatch(changeName)}>Change Name</button>
        <button onClick={()=> dispatch(changeWish)}>Change Wish</button>
      </div>
    )
}

export default App;
