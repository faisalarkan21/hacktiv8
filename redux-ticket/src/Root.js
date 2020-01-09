import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import IndexLogin from "./pages/login/IndexLogin";
import Sider from "./components/sidebar";
import configureStore from "./store/configureStore";
import ListTicket from "./pages/list-ticket/IndexListTicket";
import Profile from "./pages/profile/IndexProfile";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
              <Switch>
                <Sider>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/list-ticket" />}
                />
                <Route exact path="/login" component={IndexLogin} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/list-ticket" component={ListTicket} />
            </Sider>
              </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Root;
