import { Button, Divider, Flex, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, SOCIAL_MEDIA } from '../config/footer';
import { useMediaQuery } from 'react-responsive';
import ContentWrapper from './ContentWrapper';
import {
  CodepenCircleOutlined,
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
  XOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

export default function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  return (
    <div className="bg-black w-full h-auto text-white">
      <ContentWrapper>
        <Flex wrap={!isDesktopOrLaptop} gap={!isDesktopOrLaptop ? 80 : 20}>
          <Flex
            className={isDesktopOrLaptop ? 'w-[50%]' : 'w-[100%]'}
            align={isDesktopOrLaptop ? 'flex-start' : 'center'}
            vertical
          >
            <div
              style={{
                height: '100px',
                width: '300px',
                backgroundImage: 'url(/logo.png)',
              }}
              className="bg-cover bg-center"
            ></div>
            <Flex gap={10}>
              <a href={SOCIAL_MEDIA.instagram}>
                <Button
                  type="text"
                  icon={
                    <InstagramOutlined
                      className="text-white"
                      style={{ fontSize: '1.5rem' }}
                    />
                  }
                />
              </a>
              <a href={SOCIAL_MEDIA.youtube}>
                <Button
                  type="text"
                  icon={
                    <YoutubeOutlined
                      className="text-white"
                      style={{ fontSize: '1.5rem' }}
                    />
                  }
                />
              </a>
              <a href={SOCIAL_MEDIA.twitter}>
                <Button
                  type="text"
                  icon={
                    <XOutlined
                      className="text-white"
                      style={{ fontSize: '1.5rem' }}
                    />
                  }
                />
              </a>
              <a href={SOCIAL_MEDIA.github}>
                <Button
                  type="text"
                  icon={
                    <GithubOutlined
                      className="text-white"
                      style={{ fontSize: '1.5rem' }}
                    />
                  }
                />
              </a>

              <a href={SOCIAL_MEDIA.codepen}>
                <Button
                  type="text"
                  icon={
                    <CodepenCircleOutlined
                      className="text-white"
                      style={{ fontSize: '1.5rem' }}
                    />
                  }
                />
              </a>
            </Flex>
          </Flex>
          <Flex gap="4rem" className="w-full" wrap>
            {FOOTER_LINKS.map((link: any, index: number) => (
              <Space direction="vertical" className="text-left">
                <Title style={{ color: 'white' }} level={4}>
                  {link.header}
                </Title>
                {link.items.map((item: any) => (
                  <Link to={item.href}>{item.name}</Link>
                ))}
              </Space>
            ))}
          </Flex>
        </Flex>
      </ContentWrapper>
      <Flex justify="center" align="center" vertical className="pb-10">
        <Divider className="border-white" />
        <Typography.Text className="text-white">
          © {new Date(Date.now()).getFullYear()} FebryanShino
        </Typography.Text>
      </Flex>
    </div>
  );
}
