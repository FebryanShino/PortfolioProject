import { Divider, Flex, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../config/footer';
import { useMediaQuery } from 'react-responsive';
import ContentWrapper from './ContentWrapper';

const { Title } = Typography;

export default function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  return (
    <div className="bg-black w-full h-auto text-white">
      <ContentWrapper>
        <Flex wrap={!isDesktopOrLaptop} gap={20}>
          <Flex
            className={isDesktopOrLaptop ? 'w-[50%]' : 'w-[100%]'}
            align={isDesktopOrLaptop ? 'flex-start' : 'center'}
          >
            <div
              style={{
                height: '100px',
                width: '300px',
                backgroundImage: 'url(/logo.png)',
              }}
              className="bg-cover bg-center"
            ></div>
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
        <Divider className="border-white mt-20" />
        <Flex justify="center">Created with love by FebryanS</Flex>
      </ContentWrapper>
    </div>
  );
}
