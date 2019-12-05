import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: []
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    }, () => {
      console.log('state baru', this.state.name)
    });
    console.log('state lama', this.state.name)
  };

  handleButton = e => {
    axios
      .get("http://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users")
      .then(({ data }) => {
        let tempData = [...data];
        // push object
        tempData.push({
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/incubo82/128.jpg",
          cash: 1780,
          city: "Lake Hallie",
          createdAt: "2019-11-25T16:35:56.395Z",
          description: "Generic circuit Operations",
          email: "faisalarkan21@gmail.com",
          id: "42",
          name: "faisalarkan"
        });
        console.log("tempData", tempData);
        this.setState({ data: tempData });
      });
  };

  render() {
    console.log("this.state", this.state.data);
    return (
      <div className="App">
        <div style={{ marginTop: 70 }} className="offset-md-5 col-md-2">
          <input
            className="form-control"
            id="aa"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.handleButton} className="btn btn-primary">
            Call Api
          </button>

          <ul>
            {this.state.data.map(v => {
              return <li>{v.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
