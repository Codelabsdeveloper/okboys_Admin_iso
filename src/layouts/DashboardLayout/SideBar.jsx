import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';

const { Sider } = Layout;
const items2 = [
  {
    icon: UserOutlined,
    label: 'subnav 1',
    children: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'Add Boys', route: '/addboys' },
      // Add more menu items with the "route" property
    ],
  },
  {
    icon: LaptopOutlined,
    label: 'subnav 2',
    children: [
      { label: 'option3', route: '/path/to/option3' },
      { label: 'option4', route: '/path/to/option4' },
      // Add more menu items with the "route" property
    ],
  },
  {
    icon: NotificationOutlined,
    label: 'subnav 3',
    children: [
      { label: 'option5', route: '/path/to/option5' },
      { label: 'option6', route: '/path/to/option6' },
      // Add more menu items with the "route" property
    ],
  },
];

function SideBar() {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <Sider width={200} className="fixed bg-white overflow-auto left-0 h-screen pb-16">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        className="h-full border-r-0 bg-secondary text-white"
      >
        {items2.map((item, index) => (
          <Menu.SubMenu
            key={`sub${index + 1}`}
            icon={React.createElement(item.icon)}
            title={item.label}
          >
            {item.children.map((child) => (
              <Menu.Item key={child.label} onClick={() => handleClick(child.route)}>
                {child.label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBar;
