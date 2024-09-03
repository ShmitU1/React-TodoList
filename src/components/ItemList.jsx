export default function ItemList({id, text, completed, toggleChecked, deleteItem}) {
    return (
        <li>
            <label>
                <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleChecked(id, e.target.checked)}
                />
                {text}
            </label>
            <button onClick={() => deleteItem(id)} className='btn btn-danger'>Delete</button>
        </li>
    )
}