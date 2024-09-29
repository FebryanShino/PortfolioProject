import React from 'react';
import { Flex, Typography } from 'antd';
import ContentWrapper from '../component/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import CreationCategory from '../component/CreationCategory';

const { Title } = Typography;

export default function CreationPage() {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <Title level={1}>Creation</Title>
      <Flex justify="center" gap={4} wrap>
        <CreationCategory
          title="3D arts"
          animationStartPosition="LEFT"
          href="blender"
        />
        <CreationCategory
          title="Illustration"
          animationStartPosition="CENTER"
          href="illustration"
        />
        <CreationCategory
          title="Programming"
          animationStartPosition="RIGHT"
          href="programming"
        />
        <CreationCategory
          title="Game"
          animationStartPosition="RIGHT"
          href="game"
        />
      </Flex>
    </ContentWrapper>
  );
}
