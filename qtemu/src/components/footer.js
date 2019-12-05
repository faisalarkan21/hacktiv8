import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    );
  }
}

export default FooterComponent;
