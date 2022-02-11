import React, {useState} from 'react';
import ListItem from '../ListItem/ListItem';
import toDoList from '../../lib/data/list';
import Placeholder from '../Placeholder/Placeholder';
import './List.css'

export default function List() {
    const [listInput, setListInput] = useState('');
    const [list, setList] = useState(toDoList);
    // const [val, setVal] = useState("");


    function addToList() {
        let newList=[];
        const newListItem = {
            text: listInput,
            checked: false
        }
        if (list === null || list.length === 0) {
            newList = [];
        } else {
            newList = [...list];
        }
        newList.push(newListItem);
        localStorage.setItem('toDoList', JSON.stringify(newList));
        setList(newList);
        setListInput("")     
        
    }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(val);
    //     // clearing the values
    //     setVal("");
    //     return addToList;
    // }
    
    function removeFromList(index) {
        const newList = [...list]
        newList[index].checked = !newList[index].checked;
        setList(newList)
        setTimeout(() => {
            const finalList = newList.filter(el => !el.checked);
            localStorage.setItem('toDoList', JSON.stringify(finalList));
            setList(finalList);
        }, 1000)
    }

    function checkToDoList() {
        if (list === null || list.length === 0) {
            return <Placeholder/>
        } else {
            return list.map((item, index) => <ListItem checkStatus={item.checked} deleteHandler={removeFromList} index={index} key={index} text={item.text}></ListItem>)
        }
    }
    return (
        <div className="List">
      <div className="todoItems">
        <ul>
            { checkToDoList() }
        </ul>
      </div>
      <div className="todoInput">
        <input onChange={e => setListInput(e.target.value)} value={listInput} type="text" />
        <button onClick={addToList}>Add</button>
      </div>
    </div>
    )
}