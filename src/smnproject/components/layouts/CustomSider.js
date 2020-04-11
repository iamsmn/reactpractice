import React from "react";
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";

const { Sider } = Layout;
class CustomSider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        {" "}
        <div className="logo" />
        <Router>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>
                <Link to="/react">Home</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="unordered-list" />
              <span>
                <Link to="/react/list">List</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="plus-circle" />
              <span>Create</span>
            </Menu.Item>
          </Menu>
        </Router>
      </Sider>
    );
  }
}

export default CustomSider;
