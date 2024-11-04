import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Flex,
  Image,
  Progress,
  Space,
  Statistic,
  StatisticProps,
  Steps,
  Timeline,
  Typography,
} from 'antd';
import React, { useEffect } from 'react';
import ContentWrapper from '../component/ContentWrapper';
import CountUp from 'react-countup';
import { databaseURL, SKILLS } from '../app.constants';
import { useMediaQuery } from 'react-responsive';
import { useCountUp } from 'use-count-up';
import LeetCodeCard from '../component/LeetCodeCard';
import TOEICCard from '../component/about/TOEICCard';
import Skills from '../component/about/Skills';
import Skill from '../component/about/Skills';
import DetailCard from '../component/about/DetailCard';

const { Title, Paragraph, Text } = Typography;

const items: DescriptionsProps['items'] = [
  {
    label: 'Name',
    children: 'Febryan Shino',
  },
  {
    label: 'Also Known As',
    children: 'FebryanS',
  },
  {
    label: 'Specialty',
    children: 'Frontend',
  },
  {
    label: 'Hobby',
    children: 'Listening to music',
  },
];

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

export default function AboutMePage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <ContentWrapper>
      <Flex
        className={`w-full h-auto bg-cover bg-center ${
          isDesktopOrLaptop ? '' : 'flex-col-reverse'
        }`}
        align="center"
        justify="space-between"
        vertical={!isDesktopOrLaptop}
      >
        <Space direction="vertical" className="text-left w-full">
          <Text>I am</Text>
          <Title>Febryan Shino</Title>
          <Paragraph>
            A Blender Artist, Programmer, Frontend Web Developer, and a Tech
            Enthusiast
          </Paragraph>
        </Space>
        <div
          className={`${
            isDesktopOrLaptop ? 'w-[30rem]' : 'w-full'
          } aspect-square bg-cover bg-center`}
          style={{
            backgroundImage: `url(${databaseURL(
              'website',
              'images/hero.png',
            )})`,
          }}
        />
      </Flex>
      <DetailCard />
      <TOEICCard listeningScore={440} readingScore={420} />
      <LeetCodeCard
        easy={15}
        medium={0}
        hard={0}
        taskEasyTotal={832}
        taskMediumTotal={1750}
        taskHardTotal={761}
      />
      <Skill data={SKILLS} />
    </ContentWrapper>
  );
}
