import {
  CaretRightOutlined,
  DownloadOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Button, Divider, Flex, Image, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

interface GameCardProps extends React.ComponentPropsWithoutRef<'div'> {
  backgroundUrl: string;
  gameLogoUrl: string;
  description: string;
  playUrl: string;
  downloadUrl?: string;
  repositoryUrl?: string;
}

export default function GameCard(props: GameCardProps) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  return (
    <div
      style={{
        width: '100%',
        height: '35rem',
        backgroundImage: `url(${props.backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Flex
        className="h-[100%] text-left text-white"
        style={{
          background:
            'linear-gradient(-90deg, hsla(0,0%,0%, .5), hsla(0,0%,0%, 1))',
        }}
      >
        <ContentWrapper>
          <Flex className="h-[100%]" vertical justify="space-between" gap={0}>
            <div
              style={{
                backgroundImage: `url(${props.gameLogoUrl}`,
                backgroundSize: 'cover',
              }}
              className=" h-32 w-64"
            ></div>
            <Space
              direction="vertical"
              className={isDesktopOrLaptop ? 'w-[50%]' : 'w-[100%]'}
            >
              <Paragraph style={{ color: 'white' }}>
                {props.description}
              </Paragraph>
              <Flex
                align="flex-end"
                wrap={!isDesktopOrLaptop}
                gap={!isDesktopOrLaptop ? 10 : 0}
              >
                <a href={props.playUrl}>
                  <Button
                    size="large"
                    style={{ color: 'white' }}
                    className="bg-success border-none"
                    icon={<CaretRightOutlined style={{ color: 'white' }} />}
                  >
                    Play
                  </Button>
                </a>
                {isDesktopOrLaptop && <Divider type="vertical" />}
                <Flex>
                  {props.downloadUrl && (
                    <>
                      <Link to={props.downloadUrl}>
                        <Button
                          ghost
                          icon={<DownloadOutlined style={{ color: 'white' }} />}
                        >
                          Android
                        </Button>
                      </Link>
                    </>
                  )}
                  {props.repositoryUrl && (
                    <>
                      <Divider type="vertical" />
                      <Link to={props.repositoryUrl}>
                        <Button ghost icon={<GithubOutlined />}>
                          Repository
                        </Button>
                      </Link>
                    </>
                  )}
                </Flex>
              </Flex>
            </Space>
          </Flex>
        </ContentWrapper>
      </Flex>
    </div>
  );
}
