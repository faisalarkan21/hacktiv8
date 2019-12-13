import React from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { addNumber, addNumber170 } from "./action/count";
import "./App.css";

class App extends React.Component {
  handleAddDegree = () => {
    const { inputImage1 } = this.state;
    this.props.dispatch(
      addNumber(this.props.addNumberRotateLeft.data - parseInt(inputImage1))
    );
  };

  handleAddDegree170 = () => {
    const { inputImage2 } = this.state;
    // console.log("inputImage2", inputImage2);
    this.props.dispatch(
      addNumber170(this.props.addNumberRotateRight.data + parseInt(inputImage2))
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRotateImage = event => {
    if (event.target.name === "img1") {
      this.setState(
        {
          inputImage1: this.state.inputImage1
        },
        () => {
          this.handleAddDegree();
        }
      );
    } else if (event.target.name === "img2") {
      this.setState(
        {
          inputImage2: this.state.inputImage2
        },
        () => {
          this.handleAddDegree170();
        }
      );
    }
  };

  render() {
    console.log("app", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <a onClick={this.handleAddDegree}>
            <img
              width={150}
              height={150}
              style={{
                transform: `rotate(${this.props.addNumberRotateLeft.data}deg)`
              }}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNk2TAhMhb6Yesea2fhsWzG8jhgSaB1YcHYCSpTdTnnNoeFBbL"
              }
              className="App-logo"
              alt="logo"
            />
          </a>

          <input name="inputImage1" onChange={this.handleChange}></input>
          <button name="img1" onClick={this.handleRotateImage}>
            Rotate Image 1
          </button>

          <a style={{ marginTop: 10 }} onClick={this.handleAddDegree170}>
            <img
              width={150}
              height={150}
              style={{
                transform: `rotate(${this.props.addNumberRotateRight.data}deg)`
              }}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNk2TAhMhb6Yesea2fhsWzG8jhgSaB1YcHYCSpTdTnnNoeFBbL"
              }
              className="App-logo"
              alt="logo"
            />
          </a>
          <input name={"inputImage2"} onChange={this.handleChange}></input>
          <button onClick={this.handleRotateImage} name="img2">
            Rotate Image 2
          </button>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addNumberRotateLeft: state.addNumberComponent,
    addNumberRotateRight: state.addNumberComponent2
  };
}

export default connect(mapStateToProps)(App);
