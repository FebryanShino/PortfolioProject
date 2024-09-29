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
    children: 'LIstening to music',
  },
];

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

export default function AboutMePage() {
  return (
    <div>
      <Flex
        style={{ backgroundImage: 'url(/hero.png)' }}
        className="w-full h-auto bg-cover bg-center"
        align="center"
        justify="space-between"
      >
        <ContentWrapper>
          <Flex justify="space-between">
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
            <Space>
              <Avatar size={256} icon={<UserOutlined />} />
            </Space>
          </Flex>
        </ContentWrapper>
      </Flex>

      <ContentWrapper>
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
      </ContentWrapper>
    </div>
  );
}
