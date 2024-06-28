import './App.css';
import { GroceryList } from './TodoList';
import picture from './todolist3.avif';

function App() {
  return (
    <div className="app">
      <div className="right">
        <h1>Just do it</h1>
        <GroceryList />
      </div>
      <div className="left">
        <img
          src={picture}
          alt="Girl"
        />
      </div>

    </div>
  );
}

export default App;
