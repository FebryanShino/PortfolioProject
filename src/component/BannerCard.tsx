import { Button, Flex, Typography } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title } = Typography;
gsap.registerPlugin(ScrollTrigger);

interface BannerCardInterface extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  href: string;
  backgroundUrl: string;
}

export default function BannerCard(props: BannerCardInterface) {
  const navigate = useNavigate();
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        {
          xPercent: -100,
        },
        {
          scrollTrigger: {
            trigger: container.current,
            toggleActions: 'restart none none none',
          },
          xPercent: 0,
          duration: 2,
        },
      );
    },
    { scope: container },
  );

  return (
    <Flex
      ref={container}
      justify="flex-end"
      align="flex-start"
      vertical
      style={{ backgroundImage: `url(${props.backgroundUrl})` }}
      className="bg-cover bg-center w-full h-96 cursor-pointer relative"
    >
      <div
        className="absolute w-full h-full z-[-1]"
        style={{
          background:
            'linear-gradient(45deg, hsla(0,0%,0%, .8), hsla(0,0%,0%, .3))',
        }}
      />
      <div className="p-10 text-left">
        <Title level={1} style={{ color: 'white' }}>
          {props.title}
        </Title>
        <Button
          ghost
          iconPosition="end"
          icon={<ArrowRightOutlined className="text-white" />}
          size="large"
          onClick={() => navigate(props.href)}
          style={{
            backgroundColor: 'hsla(0,0%,50%,.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          Browse
        </Button>
      </div>
    </Flex>
  );
}
