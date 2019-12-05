import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">QTemu</Menu.Item>
          <Menu.Item key="2">Create Meetup</Menu.Item>
          <Menu.Item key="3">Explore</Menu.Item>
          <Menu.Item style={{ float: "right" }} key="3">
            Login
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;
