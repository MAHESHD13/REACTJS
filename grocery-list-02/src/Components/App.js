import './App.css';
import Header from './Header';
import AddItem from '../AddItem';
import Footer from './Footer';
import ItemsList from './ItemsList';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems(items => [...items, item]);
  }

  function deleteItem(id) {
    setItems(items => {
      return items.filter(item => item.id !== id);
    });
  }

  function onItemSelected(id) {
    setItems(items => {
      return items.map(item => {
        return item.id === id ? { ...item, selected: !item.selected } : item;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <AddItem addItem={addItem} />
        <ItemsList items={items} deleteItem={deleteItem} itemSelected={onItemSelected} />
      </div>

      <Footer items={items} />
    </div>
  );
}

export default App;
