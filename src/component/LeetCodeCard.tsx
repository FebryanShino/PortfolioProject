import { CircularProgress } from '@mui/joy';
import { Card, Flex, Progress, Space, Typography } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface LeetCodeCardInterface extends React.ComponentPropsWithoutRef<'div'> {
  easy: number;
  medium: number;
  hard: number;
  taskTotal: number;
}

export default function LeetCodeCard(props: LeetCodeCardInterface) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  return (
    <Card className="w-full">
      <Flex
        justify="space-between"
        gap={50}
        className={isDesktopOrLaptop ? '' : 'flex-col-reverse'}
      >
        <CircularProgress
          determinate
          sx={{ '--CircularProgress-size': '20rem' }}
          value={80}
        >
          <Typography.Title level={2}>
            {props.easy + props.medium + props.hard}
          </Typography.Title>
          <Typography.Text>/{props.taskTotal}</Typography.Text>
        </CircularProgress>
        <Space direction="vertical" className="w-full text-left">
          <Typography.Title level={2}>LeetCode Problems</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            facilis exercitationem possimus cum repudiandae dolorum quis
            voluptatum corporis expedita sunt!
          </Typography.Paragraph>
          <Space direction="vertical" className="w-full text-left">
            <Space>
              <Typography.Text>Hard</Typography.Text>
            </Space>
            <Progress percent={props.hard} size="small" strokeColor={'red'} />
          </Space>
          <Space direction="vertical" className="w-full text-left">
            <Space>
              <Typography.Text>Medium</Typography.Text>
            </Space>
            <Progress percent={40} size="small" strokeColor={'yellow'} />
          </Space>
          <Space direction="vertical" className="w-full text-left">
            <Space>
              <Typography.Text>Easy</Typography.Text>
            </Space>
            <Progress percent={80} size="small" strokeColor={'aquamarine'} />
          </Space>
        </Space>
      </Flex>
    </Card>
  );
}
