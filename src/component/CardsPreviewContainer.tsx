import { useGSAP } from '@gsap/react';
import { Button, Flex, Typography } from 'antd';
import gsap from 'gsap';
import React, { useRef } from 'react';

const { Title } = Typography;

export default function CardsPreviewContainer(
  props: React.ComponentPropsWithoutRef<'div'>,
) {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: container.current,
          },
          opacity: 1,
          duration: 2,
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="border-2 rounded border-[hsl(0,0%,90%)] p-10"
      {...props}
    >
      <Flex justify="space-between" className="mb-10">
        <Title level={3}>Latest Posts</Title>
        <Button type="link">More</Button>
      </Flex>
      {props.children}
    </div>
  );
}
