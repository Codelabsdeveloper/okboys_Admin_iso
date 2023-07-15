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
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'SL no',
    dataIndex: 'slno',
    key: 'slno',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Employee Count',
    dataIndex: 'empCount',
    key: 'empCount',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((status) => {
          let color = status.length > 5 ? 'geekblue' : 'green';
          if (status === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    slno : '1',
    name: 'John Brown',
    age: 32,
    empCount: 32,
    date: '20/12/2020',
    address: 'New York No. 1 Lake Park',
    status: ['nice', 'developer'],
  },
  {
    key: '2',
    slno : '2',
    name: 'Jim Green',
    age: 42,
    empCount: 32,
    date: '20/12/2020',
    address: 'London No. 1 Lake Park',
    status: ['loser'],
  },
  {
    key: '3',
    slno : '3',
    name: 'Joe Black',
    age: 32,
    date: '20/12/2020',
    empCount: 32,
    address: 'Sydney No. 1 Lake Park',
    status: ['cool', 'teacher'],
  },
];

const ListFranchise = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  
  

  return (
    <div style={{ width : "70%" , marginLeft : "10%"}}>
    list
    <Table 
    columns={columns} 
    dataSource={data} 
    showSizeChanger
    />
</div>
  );
};

export default ListFranchise;
