import { Button, Carousel, Flex, Splitter, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ContentWrapper from '../component/ContentWrapper';
import ResponsiveGridWrapper from '../component/ResponsiveGridWrapper';
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/all';
import BannerCard from '../component/BannerCard';
import { databaseURL } from '../app.constants';
import { BlenderRenderResponseType } from '../config/api/responseTypes';
import { callAPI } from '../config/api';

const { Title } = Typography;

export default function BlenderCreationPage() {
  const location = useLocation();
  const [renders, setRenders] = useState<BlenderRenderResponseType[]>([]);
  useEffect(() => {}, []);

  async function fetchRenders() {
    const data = await callAPI<BlenderRenderResponseType[]>({
      url: databaseURL('database', 'creation/blender/render/data.json'),
      method: 'GET',
    });
    setRenders(data);
  }

  useEffect(() => {
    fetchRenders();
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {renders.map((item) => (
          <img src={item.originalImageUrl} />
        ))}
      </Carousel>
      <Flex className="bg-black p-8" justify="center">
        <Title level={1}>
          <span>Feel the world</span>
        </Title>
      </Flex>

      {renders && (
        <Splitter
          style={{ height: 400, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
          <Splitter.Panel>
            <div
              style={{
                backgroundImage: `url(${renders[0]?.originalImageUrl})`,
              }}
              className="bg-cover bg-center w-full h-full cursor-pointer"
            ></div>
          </Splitter.Panel>
          <Splitter.Panel>
            <div
              style={{
                backgroundImage: `url(${renders[7]?.originalImageUrl})`,
              }}
              className="bg-cover bg-center w-full h-full cursor-pointer"
            ></div>
          </Splitter.Panel>
          <Splitter.Panel>
            <div
              style={{
                backgroundImage: `url(${renders[3]?.originalImageUrl})`,
              }}
              className="bg-cover bg-center w-full h-full cursor-pointer"
            ></div>
          </Splitter.Panel>
        </Splitter>
      )}

      <ContentWrapper>
        <Title level={1}>Browse</Title>
        <Flex justify="center" vertical gap={5} className="content mb-20">
          <BannerCard
            title="3D Assets"
            href="assets"
            backgroundUrl={databaseURL('website', 'images/hero.png')}
          />
          <BannerCard
            title="3D Renders"
            href="render"
            backgroundUrl={databaseURL('website', 'images/hero.png')}
          />
        </Flex>
      </ContentWrapper>
    </div>
  );
}
