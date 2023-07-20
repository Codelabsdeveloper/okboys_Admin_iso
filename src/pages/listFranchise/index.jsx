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
import DashboardLayout  from 'src/layouts/DashboardLayout';
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
    name: 'ABC Franchise',
    age: 32,
    empCount: 32,
    date: '20/12/2020',
    address: 'Hyderabad',
    status: ['ACTIVE'],
  },
  {
    key: '2',
    slno : '2',
    name: 'Vast Franchise',
    age: 42,
    empCount: 32,
    date: '20/12/2020',
    address: 'Bangalore',
    status: ['In-Review'],
  },
  {
    key: '3',
    slno : '3',
    name: 'James Franchise',
    age: 32,
    date: '20/12/2020',
    empCount: 32,
    address: 'Chennai',
    status: ['ACTIVE'],
  },
];

const ListFranchise = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  
  

  return (
    <DashboardLayout>
       <div>
          <p style={{ fontWeight : "bold" , fontSize : "20px" , marginLeft : "40%" }}>Franchise List</p>

        </div>
    <div style={{ width : "90%" , marginLeft : "5%"}}>
    
    <Table 
    columns={columns} 
    dataSource={data} 
    showSizeChanger
    />
</div>
</DashboardLayout>
  );
};

export default ListFranchise;