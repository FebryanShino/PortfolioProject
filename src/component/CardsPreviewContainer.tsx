import { useGSAP } from '@gsap/react';
import { Avatar, Button, Card, Flex, Space, Typography } from 'antd';
import gsap from 'gsap';
import React, { useRef } from 'react';
import ResponsiveGridWrapper from './ResponsiveGridWrapper';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

const { Title, Paragraph } = Typography;

interface CardsPreview {
  image: string;
  title: string;
  description: string;
  href: string;
}

interface CardsPreviewContainer extends React.ComponentPropsWithoutRef<'div'> {
  items: CardsPreview[];
}

export default function CardsPreviewContainer(props: CardsPreviewContainer) {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: container.current,
            toggleActions: 'restart none none none',
          },
          opacity: 1,
          duration: 2,
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="border-2 rounded border-[hsl(0,0%,90%)] p-10"
      {...props}
    >
      <Flex justify="space-between" className="mb-10 text-left">
        <Title level={3}>Latest Posts</Title>
        <Button type="link">More</Button>
      </Flex>
      <ResponsiveGridWrapper minSize="18rem">
        {props.items.map((item: CardsPreview) => (
          <Card loading={false} cover={<img alt="example" src="/hero.png" />}>
            <Meta
              title={
                <Title level={4} className="text-left">
                  {item.title}
                </Title>
              }
              description={
                <Space direction="vertical" align="start">
                  <Paragraph className="text-left" ellipsis={{ rows: 2 }}>
                    {item.description}
                  </Paragraph>
                  <Button type="link" className="p-0">
                    Read More
                  </Button>
                </Space>
              }
            />
          </Card>
        ))}
      </ResponsiveGridWrapper>
    </div>
  );
}
