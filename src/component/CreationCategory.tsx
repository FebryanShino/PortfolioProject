import { useGSAP } from '@gsap/react';
import { Button, Flex } from 'antd';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CreationCategoryProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  href: string;
  backgroundImage: string;
  animationStartPosition: 'LEFT' | 'CENTER' | 'RIGHT';
}

export default function CreationCategory(props: CreationCategoryProps) {
  const navigate = useNavigate();
  const container = useRef(null);
  const content = useRef(null);
  const [onHover, setOnHover] = useState(false);

  useGSAP(
    () => {
      gsap.set(content.current, {
        yPercent: 500,
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
        yPercent: 500,
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
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: '100%',
      }}
      className=" bg-center w-60 aspect-square cursor-pointer overflow-hidden"
      onClick={() => navigate(props.href)}
    >
      <Button ref={content} ghost>
        {props.title}
      </Button>
    </Flex>
  );
}
