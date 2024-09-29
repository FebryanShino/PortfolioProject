import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Card,
  Descriptions,
  DescriptionsProps,
  Flex,
  Space,
  Statistic,
  StatisticProps,
  Steps,
  Timeline,
  Typography,
} from 'antd';
import React from 'react';
import ContentWrapper from '../component/ContentWrapper';
import CountUp from 'react-countup';
import { databaseURL } from '../app.constants';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

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
  return (
    <div>
      <Flex
        style={{
          backgroundImage: `url(${databaseURL('website', 'images/hero.png')})`,
        }}
        className="w-full h-auto bg-cover bg-center"
        align="center"
      >
        <ContentWrapper>
          <Flex
            justify={isDesktopOrLaptop ? 'space-between' : 'center'}
            wrap={!isDesktopOrLaptop}
          >
            {!isDesktopOrLaptop && (
              <Space>
                <Avatar size={256} icon={<UserOutlined />} />
              </Space>
            )}
            <Space direction="vertical" className="w-[30rem]">
              <Title level={2} className="text-left">
                Hello,
                <br /> I'm FebryanShino
              </Title>
              <Descriptions
                className="text-left"
                bordered
                column={1}
                items={items}
              />
            </Space>
            {isDesktopOrLaptop && (
              <Space>
                <Avatar size={256} icon={<UserOutlined />} />
              </Space>
            )}
          </Flex>
        </ContentWrapper>
      </Flex>

      {/* <ContentWrapper>
        <Flex vertical align="center">
          <Title>Accomplishments</Title>
          <Space>
            <Card
              actions={[
                <EditOutlined key="edit" />,
                <SettingOutlined key="setting" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
              style={{ minWidth: 300 }}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
                title="Card title"
                description={
                  <>
                    <p>This is the description</p>
                    <p>This is the description</p>
                  </>
                }
              />
            </Card>
            <Card
              actions={[
                <EditOutlined key="edit" />,
                <SettingOutlined key="setting" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
              style={{ minWidth: 300 }}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
                title="Card title"
                description={
                  <>
                    <p>This is the description</p>
                    <p>This is the description</p>
                  </>
                }
              />
            </Card>
            <Card
              actions={[
                <EditOutlined key="edit" />,
                <SettingOutlined key="setting" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
              style={{ minWidth: 300 }}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
                title="Card title"
                description={
                  <>
                    <p>This is the description</p>
                    <p>This is the description</p>
                  </>
                }
              />
            </Card>
          </Space>
        </Flex>
        <Flex justify="center" align="center">
          <Steps
            className="w-64"
            direction="vertical"
            size="small"
            current={1}
            items={[
              { title: 'Finished', description: 'something' },
              {
                title: 'In Progress',
                description: 'lorem',
              },
              {
                title: 'Waiting',
                description: 'something',
              },
            ]}
          />
          <Statistic
            className="text-nowrap"
            title="Active Users"
            value={112893}
            formatter={formatter}
          />
        </Flex>
      </ContentWrapper> */}
    </div>
  );
}
