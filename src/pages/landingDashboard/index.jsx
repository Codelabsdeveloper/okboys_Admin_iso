/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/*
 * File: index.jsx
 * Project: codelabs-boilderplate
 * Created Date: Mon Sep 26 2022 12:22:47 AM
 * Author: Mohammed Parveez <ahamed.parveez@gmail.com>
 * ------------------------------------
 *
 * Copyright (c) 2022 All rights reserved by Codelabs
 * ------------------------------------
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;


const AddFranchise = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const navBarMenuItems = [
    {key : 1 , label: `Dashboard`},
    {key : 2 , label: `Add Franchise`},
    {key : 3 , label: `Franchise`}
  ]

  return(
      <Layout className="layout">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            
            // items={new Array(15).fill(null).map((_, index) => {
            //   const key = index + 1;
            //   return {
            //     key,
            //     label: `nav ${key}`,
            //   };
            // })}
          >
            <SubMenu key="1" title="Settings">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
          <SubMenu key="4" title="Sub-Menu">
            <Menu.Item key="5">Option 3</Menu.Item>
            <Menu.Item key="6">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="7" title="Profile">
          <Menu.Item key="8">Option 5</Menu.Item>
          <Menu.Item key="9">Option 6</Menu.Item>
          <Menu.Item key="10">Option 7</Menu.Item>
          <Menu.Item key="11">Option 8</Menu.Item>
        </SubMenu>
            </Menu>
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"           
          >
            Content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    
  );
};

export default AddFranchise;
