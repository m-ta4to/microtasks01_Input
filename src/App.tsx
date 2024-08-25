import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


export type filterBtnType = 'all'| 'active'|'completed'
function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const[title, setTitle] = useState('')

    const addTitle = (title: string) => {
        let newMessage={message: title}
   setMessage([newMessage,...message])

    }

   const  OnClikkHandler = () => {
        addTitle(title)
       setTitle('')
    }
    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            {/*<FullInput addTitle={addTitle}/>*/}
            <Input title={title}
                   setTitle={setTitle}/>
            <Button name={'+'}
                    onClick={OnClikkHandler}

            />

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );

}

export default App;
