import { ArrowRightOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Flex } from 'antd';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface RenderCardProps extends React.ComponentPropsWithoutRef<'div'> {
  backgroundUrl: string;
  href: string;
}

export default function RenderCard(props: RenderCardProps) {
  const navigate = useNavigate();
  const container = useRef(null);
  const content = useRef(null);
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
    gsap.to(content.current, {
      xPercent: 0,
      duration: 0.5,
    });
  });
  const notOnHover = contextSafe(() => {
    gsap.to(content.current, {
      xPercent: -100,
      duration: 0.5,
    });
  });

  return (
    <Flex
      ref={container}
      className="w-full h-[30rem] bg-cover bg-center overflow-x-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${props.backgroundUrl})`,
      }}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => notOnHover()}
      onClick={() => navigate(props.href)}
    >
      <div ref={content} className="w-full h-full bg-[rgba(0,0,0,.6)]"></div>
    </Flex>
  );
}
