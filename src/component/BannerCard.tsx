import { Button, Flex, Typography } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const { Title } = Typography;
gsap.registerPlugin(ScrollTrigger);

export default function BannerCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
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
      style={{ backgroundImage: 'url(/hero.png)' }}
      className="bg-cover bg-center w-full h-96 cursor-pointer px-20 py-10"
    >
      <Title level={1}>{title}</Title>
      <Button ghost size="large" onClick={() => navigate(href)}>
        Browse
      </Button>
    </Flex>
  );
}
