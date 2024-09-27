import React from 'react';
import Hero from '../component/Hero';
import { Avatar, Card, Carousel, Image, Typography } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import ResponsiveGridWrapper from '../component/ResponsiveGridWrapper';
import ContentWrapper from '../component/ContentWrapper';
import BannerCard from '../component/BannerCard';

const { Title } = Typography;

export default function Homepage() {
  return (
    <div>
      <Hero />
      <ContentWrapper>
        <Carousel autoplay autoplaySpeed={3000}>
          {['', '', '', '', ''].map((item: string) => (
            <img src="/hero.png" />
          ))}
        </Carousel>
        <BannerCard href="/creation" title="Creation" />
        <Title>Latest Posts</Title>
        <ResponsiveGridWrapper minSize="20rem">
          {['', '', '', ''].map((item: string) => (
            <Card
              loading={false}
              cover={<img alt="example" src="/hero.png" />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="/hero.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          ))}
        </ResponsiveGridWrapper>
      </ContentWrapper>
    </div>
  );
}
