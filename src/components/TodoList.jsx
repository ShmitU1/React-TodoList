import ItemList from "./ItemList"
export default function TodoList({items, toggleChecked, deleteItem}) {
    return (
        <ul className='list'>
            {items.length === 0 && <p>No items yet.</p>  }
            {items.map(item => {
            return (
                <ItemList
                    {...item}
                    key = {item.id}
                    toggleChecked={toggleChecked}
                    deleteItem={deleteItem}
                />
            )
            })}
        </ul>
    )
}