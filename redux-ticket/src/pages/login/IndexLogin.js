import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./login.css";
import { postLogin } from "../../action/auth";

class Login extends React.Component {
  handleLogin = () => {
    console.log("props", this.props);
    this.props.history.push('/list-ticket')
  };

  render() {
    return (
      <Form className="login-form">
        <Form.Item>
          <Input
            id="username"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            onClick={this.handleLogin}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          {/* Or <Link to="register">register now!</Link> */}
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default (Login);
