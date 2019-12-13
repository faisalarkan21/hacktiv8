import "antd/dist/antd.css";
import axios from "axios";
import React from "react";
import { ConfirmModal } from "./components/modal-confirm";
import { Services } from "./utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalDelete: false,
      modalAddUsers: false
    };
  }

  componentDidMount() {
    const api = new Services();
    api.get("users").then((data) => {
      console.log('data', data)
      this.setState({
        data
      });
    });
  }

  handleToggle = (name, v) => {
    // console.log('i', i)
    this.setState({ [name]: !this.state[name] });
  };

  handleNonValidURL = value => {
    const patt = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

    console.log("value handleNonValidURL", patt.test(value));

    if (patt.test(value)) {
      return <img width={150} height={150} src={value}></img>;
    } else {
      return (
        <img
          width={150}
          height={150}
          src={"http://www.dpbatour.com/img/profile_none.png"}
        ></img>
      );
    }
  };

  handleOkDelete = () => {

    // console.log('kena')

  };

  render() {
    return (
      <div className="App">
        <ConfirmModal
          title="Hapus Users"
          onCancelProps={() => this.handleToggle("modalDelete")}
          visible={this.state.modalDelete}
          onOk={this.handleOkDelete}
        >
          Yakin mau hapus user tersebut ?
        </ConfirmModal>

        <div className="col-md-5">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
                <th scope="col">Email</th>
                <th scope="col">Cash</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((v, i) => {
                return (
                  <tr>
                    <td>{v.name}</td>
                    <td>{this.handleNonValidURL(v.avatar)}</td>
                    <td>{v.email}</td>
                    <td>{v.cash}</td>
                    <td>
                      <button
                        onClick={() => this.handleToggle("modalDelete", v)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
