import './Checkbox.css';
import React, {useState} from 'react';

export default function Checkbox({deleteHandler, index}) {
    return (
        <input type="checkbox" onClick={deleteHandler.bind(null, index)}></input>
    )
}