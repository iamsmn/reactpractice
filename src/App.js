import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import SmnFooter from "./smnproject/components/layouts/SmnFooter";
import CustomSider from "./smnproject/components/layouts/CustomSider";
import MainBody from "./smnproject/components/MainBody";
import { BrowserRouter } from "react-router-dom";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomSider />
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Smn</Breadcrumb.Item>
            <Breadcrumb.Item>Bhandari</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <BrowserRouter>
              <MainBody />
            </BrowserRouter>
          </div>
        </Content>
        <SmnFooter />
      </Layout>
    </Layout>
  );
}

export default App;
