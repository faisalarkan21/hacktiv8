
import React from "react";
import { withRouter } from "react-router-dom";


import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        selectedKey: 'Profile',
    };

    handlePushRoute = (routes) => {

        this.setState({
            selectedKey: routes
        }, () => {
            this.props.history.push(routes)
        })
    }

    render() {

        console.log('this.props', this.props)

        const { selectedKey } = this.state;

        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={selectedKey} mode="inline">
                        <Menu.Item key="Profile" onClick={() => this.handlePushRoute('Profile')}>
                            <Icon type="user" />
                            <span>Profile</span>
                        </Menu.Item>
                        <Menu.Item key="list-ticket" onClick={() => this.handlePushRoute('list-ticket')} >
                            <Icon type="user" />
                            <span>List Tiket</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: "#fff", padding: 0 }} />
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>{selectedKey}</Breadcrumb.Item>
                        </Breadcrumb>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
          </Footer>
                </Layout>


            </Layout>
        );
    }
}

export default withRouter(SiderDemo);