import { Divider, Flex, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../config/footer';

const { Title } = Typography;

export default function Footer() {
  return (
    <div className="bg-black w-full h-auto text-white p-20">
      <Flex wrap={false}>
        <Flex className="w-[50%]" align="flex-start">
          <div
            style={{
              height: '100px',
              width: '300px',
              backgroundImage: 'url(/logo.png)',
            }}
            className="bg-cover bg-center"
          ></div>
        </Flex>
        <Flex gap="4rem" className="w-full" wrap>
          {FOOTER_LINKS.map((link: any, index: number) => (
            <Space direction="vertical" className="text-left">
              <Title style={{ color: 'white' }} level={4}>
                {link.header}
              </Title>
              {link.items.map((item: any) => (
                <Link to={item.href}>{item.name}</Link>
              ))}
            </Space>
          ))}
        </Flex>
      </Flex>
      <Divider className="border-white mt-20" />
      <Flex justify="center">Created with love by FebryanS</Flex>
    </div>
  );
}
