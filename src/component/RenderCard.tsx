import { ArrowRightOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Button, Divider, Flex, Space, Typography } from 'antd';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import { useMediaQuery } from 'react-responsive';

interface RenderCardProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
  date: Date;
  backgroundUrl: string;
  href: string;
}

export default function RenderCard(props: RenderCardProps) {
  const navigate = useNavigate();
  const container = useRef(null);
  const content = useRef(null);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  useGSAP(
    () => {
      gsap.set(content.current, {
        xPercent: -100,
      });
      gsap.fromTo(
        container.current,
        { xPercent: Math.floor(Math.random() * 2) === 0 ? -100 : 100 },
        {
          scrollTrigger: container.current,
          xPercent: 0,
          duration: 1,
        },
      );
    },
    { scope: container },
  );

  const { contextSafe } = useGSAP({ scope: content });

  const onHover = contextSafe(() => {
    if (isDesktopOrLaptop)
      gsap.to(content.current, {
        xPercent: 0,
        duration: 0.5,
      });
  });
  const notOnHover = contextSafe(() => {
    if (isDesktopOrLaptop)
      gsap.to(content.current, {
        xPercent: -100,
        duration: 0.5,
      });
  });

  return (
    <Flex
      ref={container}
      className="w-full h-[30rem] bg-cover bg-center overflow-x-hiddenrelative"
      style={{
        backgroundImage: `url(${props.backgroundUrl})`,
      }}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => notOnHover()}
    >
      {isDesktopOrLaptop && (
        <div
          ref={content}
          className="absolute w-full h-full bg-[rgba(0,0,0,.6)] z-[0] flex justify-end"
        >
          <Button
            className="h-full aspect-square bg-white"
            type="default"
            shape="default"
            onClick={() => navigate(props.href)}
          >
            <ArrowRightOutlined style={{ fontSize: '10rem' }} />
          </Button>
        </div>
      )}

      <div className="absolute w-full h-full bg-[rgba(0,0,0,.6)] z-[-2]" />
      <ContentWrapper>
        <Flex
          className=" h-full w-full z-1"
          vertical
          align="flex-start"
          justify="flex-end"
        >
          <Typography.Title style={{ color: 'white', textAlign: 'left' }}>
            {props.title}
          </Typography.Title>
          <Space>
            <Typography.Text className="text-white">
              {props.description}
            </Typography.Text>
            <Divider type="vertical" className="border-white" />
            <Typography.Text className="text-white">
              {props.date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Typography.Text>
          </Space>
          {!isDesktopOrLaptop && (
            <>
              <Divider />
              <Button
                className="rounded-none"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                onClick={() => navigate(props.href)}
              >
                Details
              </Button>
            </>
          )}
        </Flex>
      </ContentWrapper>
    </Flex>
  );
}
