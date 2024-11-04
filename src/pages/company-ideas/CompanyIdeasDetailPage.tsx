import React from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import { Flex, Image, Space, Typography } from 'antd';

export default function CompanyIdeasDetailPage() {
  return (
    <ContentWrapper>
      <Flex justify="center" className="w-auto mb-20">
        <Flex vertical className=" w-auto">
          <Typography.Title level={1} style={{ lineHeight: 0 }}>
            YOAN
          </Typography.Title>
          <Typography.Title level={5} style={{ lineHeight: 0 }}>
            Griya Batik
          </Typography.Title>
        </Flex>
      </Flex>
      <Flex justify="space-between" className="text-left" gap={40}>
        <img src="/logo.png" className="h-[20rem]" />
        <Space direction="vertical" className="w-full">
          <Typography.Title level={2} style={{ lineHeight: 0 }}>
            Philosophy
          </Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            similique quis sunt odit, quaerat sint nulla provident
            necessitatibus explicabo assumenda quae veniam architecto a quisquam
            molestiae placeat. Quidem, sint magnam!
          </Typography.Paragraph>
        </Space>
      </Flex>
    </ContentWrapper>
  );
}
