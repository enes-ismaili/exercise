import React from 'react';
import ItemSearch from './itemSearch';


const items = [
  { id: 1, name: 'Enes' },
  { id: 2, name: 'Diar' },
  { id: 3, name: 'Raonar' },
  { id: 4, name: 'Rubina' },
  
];

function App() {
  return (
    <div class="center">
      <h1>Search Items</h1>
      <ItemSearch items={items} />
    </div>
  );
}

export default App;
