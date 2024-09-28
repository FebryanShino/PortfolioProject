import { Divider, Flex, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function Footer() {
  return (
    <div className="bg-black w-full h-auto text-white p-20">
      <Flex wrap={false}>
        <Flex className="w-[50%]">
          <Title style={{ color: 'white' }}>FebryanShino</Title>
        </Flex>
        <Flex gap="3rem" justify="space-between" className="w-full" wrap>
          {Array(4)
            .fill('')
            .map((item: string, index: number) => (
              <Space direction="vertical" className="text-left">
                <Title style={{ color: 'white' }} level={4}>
                  Section {index + 1}
                </Title>
                <Link to={index.toString()}>Lorem, ipsum dolor.</Link>
                <Link to={index.toString()}>Lorem ipsum dolor sit amet.</Link>
                <Link to={index.toString()}>Lorem, ipsum.</Link>
                <Link to={index.toString()}>lorem</Link>
              </Space>
            ))}
        </Flex>
      </Flex>
      <Divider className="border-white mt-20" />
      <Flex justify="center">Created with love by FebryanS</Flex>
    </div>
  );
}
