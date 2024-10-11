import { ArrowRightOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Button, Flex, Typography } from 'antd';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { callAPI } from '../config/api';

interface CreationCategoryProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  href: string;
  backgroundImage: string;
  animationStartPosition: 'LEFT' | 'CENTER' | 'RIGHT';
  hashtag: string;
}

export default function CreationCategory(props: CreationCategoryProps) {
  const navigate = useNavigate();
  const container = useRef(null);
  const content = useRef(null);
  const [onHover, setOnHover] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });

  useGSAP(
    () => {
      gsap.set(content.current, {
        yPercent: 1000,
      });

      if (props.animationStartPosition !== 'CENTER') {
        gsap.fromTo(
          container.current,
          {
            opacity: 0,
            xPercent: props.animationStartPosition === 'LEFT' ? -100 : 100,
          },
          {
            scrollTrigger: container.current,
            xPercent: 0,
            opacity: 1,
            duration: 1,
          },
        );
      }
    },
    { scope: container },
  );

  const { contextSafe } = useGSAP({ scope: content });

  const hoverAnimation = contextSafe(() => {
    gsap.to(container.current, { backgroundSize: '50%', duration: 0.5 });
    gsap.to(
      content.current,

      {
        yPercent: 0,
        ease: 'sine',
        duration: 0.1,
      },
    );
  });

  const nonHoverAnimation = contextSafe(() => {
    gsap.to(container.current, { backgroundSize: '100%', duration: 0.5 });
    gsap.to(
      content.current,

      {
        yPercent: 1000,
        ease: 'sine',
        duration: 0.1,
      },
    );
  });

  return (
    <Flex
      align="center"
      justify="center"
      ref={container}
      onMouseEnter={() => hoverAnimation()}
      onMouseLeave={() => nonHoverAnimation()}
      className=" bg-center overflow-hidden"
      style={{
        width: isDesktopOrLaptop ? '15rem' : '100%',
      }}
    >
      <Flex vertical className="text-left p-4">
        <Flex className="h-30rem mb-2" align="flex-end" justify="space-between">
          <Button
            className="rounded-full bg-secondary text-white font-bold px-4"
            size="small"
            style={{
              fontSize: '.5rem',
              letterSpacing: '.1rem',
            }}
          >
            PROJECT
          </Button>
          <div
            style={{
              backgroundImage: `url(${props.backgroundImage})`,
              backgroundSize: 'cover',
            }}
            className="aspect-square w-[5rem] rounded-full border-8 border-black"
          />
        </Flex>
        <Typography.Title level={5}>{props.title}</Typography.Title>
        <Typography.Paragraph style={{ fontSize: '.7rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          error. Odio nostrum placeat, sunt esse vitae laborum alias aspernatur
          ullam.
        </Typography.Paragraph>
        <Flex
          justify="space-between"
          align="center"
          className="border-y-2 py-2 border-black"
        >
          <Typography.Text>{props.hashtag}</Typography.Text>
        </Flex>
        <Flex className="py-2" justify="flex-end">
          <Button
            type="text"
            size="large"
            onClick={() => navigate(props.href)}
            icon={<ArrowRightOutlined style={{ fontSize: '3rem' }} />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
