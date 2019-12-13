import React from "react";
import { Provider } from "react-redux";
import App from './App';
import configureStore from "./store/configureStore";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <App />
        </Provider>
      </div>
    );
  }
}

export default Root;
