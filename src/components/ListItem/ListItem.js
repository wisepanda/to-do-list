import Checkbox from '../Checkbox/Checkbox';
import './ListItem.css';

export default function ListItem({text, index, deleteHandler}) {
    console.log(deleteHandler);
    return (
        <li>
            <Checkbox index={index} deleteHandler={deleteHandler}></Checkbox>
            {text}</li>
    )
}
