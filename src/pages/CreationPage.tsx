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
      <Flex justify="center" gap={20} wrap>
        <CreationCategory
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/hero.png"
          title="3D arts"
          animationStartPosition="LEFT"
          href="blender"
        />
        <CreationCategory
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/illustration.webp"
          title="Illustration"
          animationStartPosition="LEFT"
          href="illustration"
        />
        <CreationCategory
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/programming.jpg"
          title="Programming"
          animationStartPosition="RIGHT"
          href="programming"
        />
        <CreationCategory
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/game.png"
          title="Game"
          animationStartPosition="RIGHT"
          href="game"
        />
      </Flex>
    </ContentWrapper>
  );
}
