import { Button, Divider, Flex, Space, Typography } from 'antd';
import React from 'react';
import ContentWrapper from './ContentWrapper';
import { useNavigate } from 'react-router-dom';
import { databaseURL } from '../app.constants';
import { useMediaQuery } from 'react-responsive';

const { Text, Title, Paragraph } = Typography;

export default function Hero() {
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  return (
    <div
      style={{
        width: '100%',
        height: '100svh',
        backgroundImage: `url(${databaseURL('website', 'images/hero.png')})`,
        backgroundSize: 'cover',
      }}
    >
      <Flex
        className="h-full text-left"
        style={{
          background:
            'linear-gradient(180deg, hsla(0,0%,95%, .5), hsla(0,0%,95%, 1))',
          backdropFilter: 'blur(10px)',
        }}
        vertical
        justify="center"
        gap={0}
      >
        <ContentWrapper contentGap={0}>
          <Flex vertical>
            <Text>Hello!</Text>
            <h3>This is</h3>
            <Title level={1}>Febryan Shino</Title>
          </Flex>
          <Paragraph className={isDesktopOrLaptop ? 'w-[50%]' : 'w-[100%]'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            non incidunt odio! Quae quo obcaecati eius, provident vero
            laudantium tempore qui quasi voluptate debitis maxime dolorum?
            Suscipit at rem velit?
          </Paragraph>
          <Flex gap={0} vertical>
            <Title level={5}>Specialties</Title>
            <Text>3D arts</Text>
            <Text>Frontend Development</Text>
            <Text>Backend Development</Text>
          </Flex>
          <Button
            className="w-32 bg-[#453f3c] text-white"
            size="large"
            onClick={() => navigate('contact')}
          >
            Contact me
          </Button>
        </ContentWrapper>
      </Flex>
    </div>
  );
}
