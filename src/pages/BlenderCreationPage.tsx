import { Button, Carousel, Flex, Splitter, Typography } from 'antd';
import React, { useRef } from 'react';
import ContentWrapper from '../component/ContentWrapper';
import ResponsiveGridWrapper from '../component/ResponsiveGridWrapper';
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/all';
import BannerCard from '../component/BannerCard';

const { Title } = Typography;

export default function BlenderCreationPage() {
  const location = useLocation();

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {['/hero.png', '/room-right.png', '/room-bed.png'].map(
          (item: string) => (
            <img src={item} />
          ),
        )}
      </Carousel>
      <Flex className="bg-black p-8" justify="center">
        <Title level={1}>
          <span className="text-white">Feel the world</span>
        </Title>
      </Flex>

      <Splitter
        style={{ height: 400, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <Splitter.Panel>
          <div
            style={{ backgroundImage: 'url(/hero.png)' }}
            className="bg-cover bg-center w-full h-full cursor-pointer"
          ></div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div
            style={{ backgroundImage: 'url(/room-right.png)' }}
            className="bg-cover bg-center w-full h-full cursor-pointer"
          ></div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div
            style={{ backgroundImage: 'url(/room-bed.png)' }}
            className="bg-cover bg-center w-full h-full cursor-pointer"
          ></div>
        </Splitter.Panel>
      </Splitter>

      <ContentWrapper>
        <Title level={1}>Browse</Title>
        <Flex justify="center" vertical gap={5} className="content mb-20">
          <BannerCard title="3D Assets" href="assets" />
          <BannerCard title="3D Renders" href="render" />
        </Flex>
      </ContentWrapper>
    </div>
  );
}
