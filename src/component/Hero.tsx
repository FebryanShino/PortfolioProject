import { Button, Divider, Flex, Space, Typography } from 'antd';
import React from 'react';
import ContentWrapper from './ContentWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { databaseURL } from '../app.constants';
import { useMediaQuery } from 'react-responsive';

const { Text, Title, Paragraph } = Typography;

export default function Hero() {
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  return (
    <div
      className={`flex ${isDesktopOrLaptop ? 'flex-row' : 'flex-col-reverse'}`}
      style={{
        width: '100%',
        height: '100svh',
        backgroundSize: 'cover',
      }}
    >
      <Flex
        className={`${isDesktopOrLaptop ? 'w-[50%] pt-32' : 'w-[100%] pt-4'} h-full text-left`}
        vertical
        gap={0}
        justify="space-between"
      >
        <div className="px-16">
          <Flex vertical>
            <Title level={1}>Febryan Shino</Title>
          </Flex>
          <Flex vertical align="end" style={{ border: '.1rem solid black' }}>
            <Paragraph className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              non incidunt odio! Quae quo obcaecati eius, provident vero
              laudantium tempore qui quasi voluptate debitis maxime dolorum?
              Suscipit at rem velit?
            </Paragraph>
            <Link to="/contact">
              <Button
                style={{ transform: 'translate(-1rem, 50%)' }}
                className="w-32 bg-[black] text-white"
                size="large"
                // onClick={() => navigate('contact')}
              >
                Contact me
              </Button>
            </Link>
          </Flex>
        </div>
        <Flex className="w-full h-[40%] mt-auto" align="end">
          <div
            className={`h-full w-auto aspect-[2] bg-cover bg-center bg-black`}
            style={
              {
                // backgroundImage: `url(${databaseURL(
                //   'website',
                //   'images/hero.png',
                // )})`,
              }
            }
          >
            <div
              className={`h-[25%] w-auto aspect-[4] bg-white text-black text-[1.5rem] flex pl-4 items-center`}
              style={{
                transform: 'translate(10%, -50%)',
                border: '.1rem solid black',
              }}
            >
              Specialty
            </div>
            <Flex
              className="ml-[1rem]"
              gap={0}
              vertical
              style={{ color: 'white' }}
            >
              <Text style={{ color: 'white' }}>3D arts</Text>
              <Text style={{ color: 'white' }}>Frontend Development</Text>
              <Text style={{ color: 'white' }}>Backend Development</Text>
            </Flex>
          </div>
          <div
            className={`h-[60%] w-auto aspect-[2] bg-cover bg-center`}
            style={{
              transform: 'translate(-30%, 30%)',
              backgroundImage: `url(${databaseURL(
                'website',
                'images/hero.png',
              )})`,
            }}
          />
        </Flex>
      </Flex>
      <div
        className={`h-full ${isDesktopOrLaptop ? 'w-[50%]' : 'w-[100%]'} aspect-square bg-cover bg-center`}
        style={{
          backgroundImage: `url(${databaseURL('website', 'images/hero.png')})`,
        }}
      />
    </div>
  );
}
