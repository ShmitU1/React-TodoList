import { useState } from 'react';
import '../style.css'
export default function NewTodoForm({onSubmit}) {
    //* State variables for current item and items list */ 
    const [newItem, setNewItem] = useState('');

    //* Add new item */
    function handleSubmit(event) {
        event.preventDefault();
        if(newItem === '') return

        //* Call the parent component's function to add the new item */
        onSubmit(newItem);

        setNewItem('');
    }

    return (
        //* Form for adding a new todo item */
        <form onSubmit={handleSubmit} className='new-item-form'>
            <input
                type="text"
                placeholder="Add a new todo..."
                className="form-row"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button type="submit" className="btn">Add</button>
        </form>
    )
}