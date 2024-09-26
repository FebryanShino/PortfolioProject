import { Button, Carousel, Flex, Splitter, Typography } from 'antd';
import React from 'react';
import ContentWrapper from '../component/ContentWrapper';
import ResponsiveGridWrapper from '../component/ResponsiveGridWrapper';
import { useLocation } from 'react-router-dom';

const { Title } = Typography;

export default function BlenderCreationPage() {
  const location = useLocation();
  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {['', '', '', '', ''].map((item: string) => (
          <img src="/hero.png" />
        ))}
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
        <Flex justify="center" vertical gap={5} className="mb-20">
          {['3D Assets', '3D Renders'].map((item: string) => (
            <Flex
              justify="flex-end"
              align="flex-start"
              vertical
              style={{ backgroundImage: 'url(/hero.png)' }}
              className="bg-cover bg-center w-full h-96 cursor-pointer px-20 py-10"
            >
              <Title level={1}>{item}</Title>
              <Button ghost size="large">
                Browse
              </Button>
            </Flex>
          ))}
        </Flex>
      </ContentWrapper>
    </div>
  );
}
