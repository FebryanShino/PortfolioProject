import React from 'react';
import Hero from '../component/Hero';
import { Avatar, Card, Carousel, Descriptions, Image, Typography } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import ResponsiveGridWrapper from '../component/ResponsiveGridWrapper';
import ContentWrapper from '../component/ContentWrapper';
import BannerCard from '../component/BannerCard';
import CardsPreviewContainer from '../component/CardsPreviewContainer';

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
        <CardsPreviewContainer
          style={{ marginTop: 100 }}
          items={Array(4).fill({
            image: '/hero.png',
            title: 'Card Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ratione vitae tempore incidunt illum blanditiis totam magnam dolorem accusamus labore?',
            href: '#',
          })}
        />
      </ContentWrapper>
    </div>
  );
}
