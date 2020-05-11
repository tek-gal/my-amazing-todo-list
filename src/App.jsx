import React from 'react';
import { SidebarContainer, TodosContainer } from '@containers';
import { TodoForm } from '@components';
import '@styles/app.scss';


const App = () => (
  <div className="container">
    <SidebarContainer />
    <main className="todos">
      <TodosContainer />
    </main>
  </div>
);

export default App;
