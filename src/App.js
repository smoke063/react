import './App.css';

import {useState} from "react";

import Input from "./components/Input";
import Message from "./components/Message";
import MessageClass from "./components/MessageClass";

function App() {


  const [text, setText] = useState('')

  const textChange = (e) => {
      setText(e.target.value)
  }

  return (
    <div className="app">
     <div className="form">
         <Input onChange={textChange} />
         <Message message={text} />
         <MessageClass message={text} />
     </div>
    </div>
  );
}

export default App;
