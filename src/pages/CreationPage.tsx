import React from 'react';
import { Flex, Typography } from 'antd';
import ContentWrapper from '../component/ContentWrapper';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export default function CreationPage() {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <Title level={1}>Creation</Title>
      <Flex justify="center" gap={4}>
        <div
          style={{ backgroundImage: 'url(/hero.png)' }}
          className="bg-cover bg-center w-60 h-60 cursor-pointer"
          onClick={() => navigate('/creation/blender')}
        ></div>
        <div
          style={{ backgroundImage: 'url(/hero.png)' }}
          className=" bg-cover bg-center w-60 h-60"
        ></div>
        <div
          style={{ backgroundImage: 'url(/hero.png)' }}
          className=" bg-cover bg-center w-60 h-60"
        ></div>
      </Flex>
    </ContentWrapper>
  );
}
