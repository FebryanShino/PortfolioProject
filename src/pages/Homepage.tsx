import React, { useEffect, useState } from 'react';
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
import { callAPI } from '../config/api';
import { databaseURL } from '../app.constants';

const { Title } = Typography;

export default function Homepage() {
  const [latestPosts, setLatestPosts] = useState<any[]>([]);

  async function fetchBlogs() {
    const data = await callAPI<any[]>({
      url: databaseURL('database', 'blog/data.json'),
      method: 'GET',
    });
    setLatestPosts(data.slice(0, 5));
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Hero />
      <ContentWrapper>
        <BannerCard
          href="/creation"
          title="Creation"
          backgroundUrl={databaseURL('website', 'images/hero.png')}
        />
        <CardsPreviewContainer style={{ marginTop: 100 }} items={latestPosts} />
      </ContentWrapper>
    </div>
  );
}
