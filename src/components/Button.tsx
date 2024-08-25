import React from 'react';

type ButtonType = {
    name: string,
    onClick: () => void,

}
export const Button = (props:  ButtonType) => {
    const{name, onClick} = props;
    const onClickButtonHandler = () => {
        onClick()

    }
    return (
        <div>
           <button onClick={onClickButtonHandler}>{name}</button>
        </div>
    );
};

