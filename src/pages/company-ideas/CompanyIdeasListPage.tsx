import React from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import { Flex, Typography } from 'antd';
import ResponsiveGridWrapper from '../../component/ResponsiveGridWrapper';
import { Link } from 'react-router-dom';

export default function CompanyIdeasListPage() {
  return (
    <ContentWrapper>
      <Flex justify="center" className="w-auto">
        <Flex vertical className="text-left w-auto">
          <Typography.Title level={1} style={{ lineHeight: 0 }}>
            Company Ideas
          </Typography.Title>
          {/* <Typography.Text>#HelloWorld</Typography.Text> */}
        </Flex>
      </Flex>
      <ResponsiveGridWrapper minSize="10rem">
        <Link to="yoan-griya-batik">
          <Flex
            className="w-full aspect-square bg-black rounded-full"
            justify="center"
            align="center"
          >
            <img src="/logo.png" className="w-[80%]" />
          </Flex>
        </Link>
      </ResponsiveGridWrapper>
    </ContentWrapper>
  );
}
