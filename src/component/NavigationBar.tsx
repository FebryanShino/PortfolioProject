import { MoonOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Button, Flex, Space } from 'antd';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const container = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      gsap.set(container.current, { yPercent: -100 });
      const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY === 0) {
          gsap.to(container.current, { yPercent: -100, duration: 0.5 });
        } else {
          gsap.to(container.current, { yPercent: 0, duration: 0.5 });
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    },
    { scope: container },
  );
  return (
    <Flex
      className="relative"
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
      <div
        ref={container}
        className="bg-white absolute w-full h-full ml-[-70px] z-[-1]"
      ></div>
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
