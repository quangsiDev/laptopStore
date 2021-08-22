import React from "react";
import { Route, Redirect, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
export default function AdminTemplate(props) {
  let { Component } = props;
  return (
    <Route
      {...props}
      render={(propsComponent) => {
      return (
          <Layout>
            <Sider
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
              }}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  Xem Danh Sách LapTop
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  Xem Danh Sách Hãng Laptop
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  Xem Danh Sách đơn hàng
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                {Component()}
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
