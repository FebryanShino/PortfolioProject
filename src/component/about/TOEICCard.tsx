import { CircularProgress } from '@mui/joy';
import { Button, Card, Flex, Space, Typography } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useCountUp } from 'use-count-up';

const { Title, Paragraph, Text } = Typography;

interface TOEICCardInterface extends React.ComponentPropsWithoutRef<'div'> {
  readingScore: number;
  listeningScore: number;
}

export default function TOEICCard(props: TOEICCardInterface) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });

  const { value: totalScorePercentage, reset: resetTotal } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: ((props.readingScore + props.listeningScore) / 990) * 100,
  });
  const { value: readingScorePercentage, reset: resetReading } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: (props.readingScore / 495) * 100,
  });
  const { value: listeningScorePercentage, reset: resetListening } = useCountUp(
    {
      isCounting: true,
      duration: 1,
      start: 0,
      end: (props.listeningScore / 495) * 100,
    },
  );
  return (
    <Card className="w-full">
      <Flex justify="space-between" vertical={!isDesktopOrLaptop}>
        <Space direction="vertical" className="text-left w-full">
          <Title level={2}>
            Ready to <br />
            communicate in English
          </Title>
          <Paragraph>
            TOEIC is Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tempore ratione ipsum fugiat, aut deleniti praesentium odit
            blanditiis obcaecati at iste!
          </Paragraph>
          <Button className="bg-secondary text-primary" size="large">
            See Certificate
          </Button>
          <Text>Test date: August 1st, 2024</Text>
        </Space>
        <Space direction="vertical" className="w-full">
          <Card className="h-auto w-full">
            <Flex className="w-full" align="center" justify="space-between">
              <Title className="text-nowrap" level={5}>
                TOEIC Score
              </Title>
              <CircularProgress
                determinate
                sx={{
                  '--CircularProgress-size': isDesktopOrLaptop
                    ? '10rem'
                    : '8rem',
                }}
                value={totalScorePercentage as number}
              >
                {props.readingScore + props.listeningScore}
              </CircularProgress>
            </Flex>
          </Card>
          <Flex gap={8}>
            <Card className="w-full">
              <Flex
                className="w-full"
                align="center"
                justify="space-between"
                vertical={!isDesktopOrLaptop}
              >
                <Title className="text-nowrap" level={5}>
                  Reading
                </Title>
                <CircularProgress
                  determinate
                  sx={{ '--CircularProgress-size': '5rem' }}
                  size="md"
                  value={readingScorePercentage as number}
                >
                  {props.readingScore}
                </CircularProgress>
              </Flex>
            </Card>
            <Card className="w-full">
              <Flex
                className="w-full"
                align="center"
                justify="space-between"
                vertical={!isDesktopOrLaptop}
              >
                <Title className="text-nowrap" level={5}>
                  Listening
                </Title>
                <CircularProgress
                  determinate
                  sx={{ '--CircularProgress-size': '5rem' }}
                  value={listeningScorePercentage as number}
                >
                  {props.listeningScore}
                </CircularProgress>
              </Flex>
            </Card>
          </Flex>
        </Space>
      </Flex>
    </Card>
  );
}
