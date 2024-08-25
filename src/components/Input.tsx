import React, {ChangeEvent} from 'react';

type InputType = {
    title: string,
    setTitle: (title: string) => void
}
export const Input = (props: InputType) => {
const{title, setTitle} = props;
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.target.value)
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
        </div>
    );

};