import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexLogin from "./pages/login/IndexLogin";
import configureStore from "./store/configureStore";
import ListTicket from "./pages/list-ticket/IndexListTicket";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/login" component={IndexLogin} />
              <Route exact path="/list-ticket" component={ListTicket} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Root;
