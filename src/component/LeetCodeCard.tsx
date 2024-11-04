import { CircularProgress } from '@mui/joy';
import { Card, Flex, Progress, Space, Typography } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface LeetCodeCardInterface extends React.ComponentPropsWithoutRef<'div'> {
  easy: number;
  medium: number;
  hard: number;
  taskEasyTotal: number;
  taskMediumTotal: number;
  taskHardTotal: number;
}

export default function LeetCodeCard(props: LeetCodeCardInterface) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  const taskTotal =
    props.taskEasyTotal + props.taskMediumTotal + props.taskHardTotal;
  const solvedTotal = props.easy + props.medium + props.hard;

  return (
    <Card className="w-full">
      <Flex
        justify="space-between"
        gap={50}
        className={isDesktopOrLaptop ? '' : 'flex-col-reverse'}
      >
        <CircularProgress
          determinate
          sx={{
            '--CircularProgress-size': isDesktopOrLaptop ? '20rem' : '18rem',
          }}
          value={(solvedTotal / taskTotal) * 100}
        >
          <Typography.Title level={2}>{solvedTotal}</Typography.Title>
          <Typography.Text>/{taskTotal}</Typography.Text>
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
            <Progress
              percent={(props.hard / props.taskHardTotal) * 100}
              size="small"
              strokeColor={'red'}
            />
          </Space>
          <Space direction="vertical" className="w-full text-left">
            <Space>
              <Typography.Text>Medium</Typography.Text>
            </Space>
            <Progress
              percent={(props.medium / props.taskMediumTotal) * 100}
              size="small"
              strokeColor={'yellow'}
            />
          </Space>
          <Space direction="vertical" className="w-full text-left">
            <Space>
              <Typography.Text>Easy</Typography.Text>
            </Space>
            <Progress
              percent={Number(
                ((props.easy / props.taskEasyTotal) * 100).toFixed(2),
              )}
              size="small"
              strokeColor={'aquamarine'}
            />
          </Space>
        </Space>
      </Flex>
    </Card>
  );
}
