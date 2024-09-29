import { Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import RenderCard from '../../component/RenderCard';
import Hero from '../../component/Hero';

export default function RenderList() {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    const current = Array(20)
      .fill('')
      .map(() => {
        return ['/hero.png', '/room-bed.png', '/room-right.png'][
          Math.floor(Math.random() * 3)
        ];
      });

    setData(current);
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          width: '100%',
          height: '100svh',
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
        }}
      >
        <Flex
          className="h-full text-left"
          style={{
            background:
              'linear-gradient(180deg, hsla(0,0%,0%, .5), hsla(0,0%,0%, 1))',
            backdropFilter: 'blur(10px)',
          }}
          vertical
          justify="center"
          gap={0}
        >
          lrem
        </Flex>
      </div>
      {data.map((item: string) => (
        <RenderCard image={item} />
      ))}
    </div>
  );
}
