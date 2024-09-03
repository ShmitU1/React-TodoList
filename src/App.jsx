import { useState, useEffect } from 'react';
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'
import './style.css'


export default function App() {
  //* Store items in state */
  const [items, setItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem('ITEM'));
    if (savedItems) return savedItems;

    return [];
  });

  //* Store items in local storage */
  useEffect(() => {
    localStorage.setItem('ITEM', JSON.stringify(items));
  }, [items]);

  //* Add new item */
  function addItem(newItem) {
    setItems(currentItem => {
      return [
        {id: crypto.randomUUID(), text: newItem, completed: false},
       ...currentItem,
      ]
    });
  }

  //* Toggle checked status of an item */ 
  function toggleChecked(itemId, isChecked) {
    setItems(currentItem => {
      return currentItem.map(item => {
        if (item.id === itemId) {
          return {...item, completed: isChecked};
        }
        return item;
      });
    });
  }

  //* Delete an item */
  function deleteItem(itemId) {
    setItems(currentItem => {
      return currentItem.filter(item => item.id!== itemId);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addItem}/>
      <h1 className="header">Todo List</h1>
      <TodoList items={items} toggleChecked={toggleChecked} deleteItem={deleteItem}/>
    </>
  )
}