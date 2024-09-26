import { MoonOutlined } from '@ant-design/icons';
import { Button, Flex, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        height: 70,
        width: '100%',
        paddingInline: 70,
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      Aqutan
      <Space>
        <Button type="text" ghost onClick={() => navigate('/creation')}>
          Creation
        </Button>
        <Button type="text" ghost onClick={() => navigate('/blogs')}>
          Blogs
        </Button>
        <Button type="text" ghost onClick={() => navigate('/contact')}>
          Contact
        </Button>
        <Button type="text" ghost onClick={() => navigate('/about')}>
          About
        </Button>
      </Space>
    </Flex>
  );
}
