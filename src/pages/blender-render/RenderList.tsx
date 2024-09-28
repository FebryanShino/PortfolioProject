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
      <Hero />
      {data.map((item: string) => (
        <RenderCard image={item} />
      ))}
    </div>
  );
}
