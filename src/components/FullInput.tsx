import React, {ChangeEvent, useState} from 'react';


 type InputType = {
    addTitle: (title: string) => void
}
export const FullInput = (props: InputType) => {
    const{addTitle} = props;
   let [title, setTitle] = useState('')
   const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
       setTitle(event.target.value)
   }


   const ButtonOnClickHandler = () => {
   addTitle(title)
       setTitle('')
   }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={ButtonOnClickHandler}>+</button>
        </div>
    );
};

