import React, {useState} from 'react';
import ListItem from '../ListItem/ListItem';
import toDoList from '../../lib/data/list';
import './List.css'

export default function List() {
    const [listInput, setListInput] = useState('');
    const [list, setList] = useState(toDoList);

    function addToList() {
        const newList = [...list];
        newList.push(listInput);
        setList(newList);
    }
    function removeFromList(index) {
        setTimeout(() => {
            const newList = [...list.slice(0, index), ...list.slice(index+1)];
            setList(newList);
        }, 1000)

    }
    return (
        <div className="List">
      <div className="todoItems">
        <ul>
            {list.map((item, index) => <ListItem deleteHandler={removeFromList} index={index} key={index} text={item}></ListItem>)}
        </ul>
      </div>
      <div className="todoInput">
        <input onChange={e => setListInput(e.target.value)} type="text" />
        <button onClick={addToList}>Add</button>
      </div>
    </div>
    )
}