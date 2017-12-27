import React from 'react';
import { views as Todos } from './todos/';
import { views as Filter } from './filter/';

function App(){
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  )
}

export default App;
