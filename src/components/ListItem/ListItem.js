import './ListItem.css';

export default function ListItem({text, index, checkStatus, deleteHandler}) {
    return (
        <li><input type="checkbox" checked={checkStatus} onChange={deleteHandler.bind(null, index)}></input>{text}</li>
    )
}
