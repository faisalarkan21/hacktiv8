import React from "react";
import logo from "./logo.svg";
import "./App.css";

const jsonTodos = [{ id: 1, text: "make a soup", completed: false }];

class App extends React.Component {
  state = {
    dataTodos: jsonTodos,
    conditionList: "all",
    complete: false,
    active: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSetDoneTask = id => {
    const tempTodos = [...this.state.dataTodos];
    const index = tempTodos.map(v => v.id).indexOf(id);
    tempTodos[index].completed = !tempTodos[index].completed;

    this.setState({
      dataTodos: tempTodos
    });
  };

  handleAddTodos = e => {
    if (!this.state.inputAddTodos) {
      return alert("isi inputnya!");
    }

    const tempTodos = [...this.state.dataTodos];
    tempTodos.push({
      id: this.state.dataTodos.length + 1,
      text: this.state.inputAddTodos,
      completed: false
    });

    this.setState({
      dataTodos: tempTodos,
      inputAddTodos: ""
    });
  };

  handleConditionList = e => {
    this.setState({
      conditionList: e.target.name
    });
  };

  render() {

    console.log('ass')

    const { dataTodos, conditionList, active, complete } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <input
          value={this.state.inputAddTodos}
          name="inputAddTodos"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleAddTodos}>Tambah Todos</button>
        <br></br>
        <ul>
          {conditionList === "all"
            ? dataTodos.map(v => (
                <li
                  style={{
                    textDecoration: v.completed ? "line-through" : "none"
                  }}
                  onClick={() => this.handleSetDoneTask(v.id)}
                >
                  {v.text}
                </li>
              ))
            : conditionList === "active"
            ? dataTodos
                .filter(v => v.completed === false)
                .map(v => (
                  <li
                    style={{
                      textDecoration: v.completed ? "line-through" : "none"
                    }}
                    onClick={() => this.handleSetDoneTask(v.id)}
                  >
                    {v.text}
                  </li>
                ))
            : dataTodos
                .filter(v => v.completed === true)
                .map(v => (
                  <li
                    style={{
                      textDecoration: v.completed ? "line-through" : "none"
                    }}
                    onClick={() => this.handleSetDoneTask(v.id)}
                  >
                    {v.text}
                  </li>
                ))}
        </ul>

        <div>
          Show :
          <button
            name="all"
            onClick={this.handleConditionList}
            disabled={conditionList !== 'all' ? false : true}
            style={{ marginLeft: 20 }}
          >
            All
          </button>
          <button disabled={conditionList !== 'active' ? false : true} name="active" onClick={this.handleConditionList}>
            Active
          </button>
          <button disabled={conditionList !== 'complete' ? false : true} name="complete" onClick={this.handleConditionList}>
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default App;