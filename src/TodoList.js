import { Component } from "react";
import icon from './imgCheck.png';

export class GroceryList extends Component {
  state = {
    userInput: '',
    todoList: [],
  }

  onChangeEvent(e) {
    this.setState({ userInput: e })
  }

  addItem(item) {
    if (item === '') {
      alert("Please enter an item");
    } else {
      let listItems = this.state.todoList;
      listItems.push(item);
      this.setState({
        todoList: listItems,
        userInput: ''
      })
    }
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addItem(this.state.userInput);
    }
  }

  deleteItem(item) {
    let listItems = this.state.todoList;
    listItems = [];

    this.setState({
      todoList: listItems,
    })
  }

  crossWord(event) {
    const li = event.target;
    li.classList.toggle('crosed');
  }

  render() {
    return (
      <>
        <div className="container">
          <input
            type="text"
            placeholder="Add a task"
            onChange={(e) => { this.onChangeEvent(e.target.value) }}
            value={this.state.userInput}
            onKeyDown={this.handleKeyDown}
          />
        </div>

        <div className="container">
          <button
            onClick={() => this.addItem(this.state.userInput)}
            className="btn"
          >
            Add
          </button>
        </div>

        <ul className='list'>
          {this.state.todoList.map((i, index) => (
            <li key={index} onClick={this.crossWord} className='list-item'>
              <img
                src={icon}
                alt="checkIcon"
                className='list-icon'
              />
              {i}
            </li>
          ))}
        </ul>

        <div className="container">
          <button
            onClick={() => this.deleteItem(this.state.userInput)}
            className="btn"
          >
            Delete
          </button>
        </div>

        
      </>
    )
  }
}