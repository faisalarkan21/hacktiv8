import "antd/dist/antd.css";
import axios from "axios";
import React from "react";
import { ConfirmModal } from "./components/modal-confirm";

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
    console.log("sas");
    axios
      .get("https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users")
      .then(({ data }) => {
        this.setState({
          data
        });
      });
  }

  handleToggle = name => {
    this.setState({ [name]: !this.state[name] });
  };

  handleNonValidURL = value => {
    const patt = new RegExp(
      /^(ftp|http|https):\/\/[^ "]+$/
    );

    if (patt.test(value)) {
      return <img width={150} height={150} src={value}></img>;
    } else {
      return <img width={150} height={150} src={"http://www.dpbatour.com/img/profile_none.png"}></img>;
    }
  };

  handleOkDelete = () => {};

  render() {
    console.log(this.state);
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

        <div  className="col-md-5">
          <table
            className="table table-striped table-hover "
          >
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
              {this.state.data.map(v => {
                return (
                  <tr>
                    <td>{v.name}</td>
                    <td>
                      {this.handleNonValidURL(v.avatar)}
                      
                    </td>
                    <td>{v.email}</td>
                    <td>{v.cash}</td>
                    <td>
                      <button
                        onClick={() => this.handleToggle("modalDelete")}
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
