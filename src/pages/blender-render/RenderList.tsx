import { Empty, Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import RenderCard from '../../component/RenderCard';
import Hero from '../../component/Hero';
import { BlenderRenderResponseType } from '../../config/api/responseTypes';
import { callAPI } from '../../config/api';
import { databaseURL } from '../../app.constants';

export default function RenderList() {
  const [renders, setRenders] = useState<BlenderRenderResponseType[]>([]);
  useEffect(() => {}, []);

  async function fetchRenders() {
    const data = await callAPI<BlenderRenderResponseType[]>({
      url: databaseURL('database', 'creation/blender/render/data.json'),
      method: 'GET',
    });

    setRenders(
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    );
  }

  useEffect(() => {
    fetchRenders();
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          width: '100%',
          height: '100svh',
          backgroundImage: `url(${databaseURL('website', 'images/hero.png')})`,
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
          Renders
        </Flex>
      </div>
      {renders ? (
        renders.map((item) => (
          <RenderCard
            backgroundUrl={item.originalImageUrl}
            href={item.uniqueId}
            key={item.uniqueId}
          />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}
