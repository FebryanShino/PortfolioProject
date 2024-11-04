import React, { useEffect, useState } from 'react';
import { Flex, Typography } from 'antd';
import ContentWrapper from '../component/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import CreationCategory from '../component/CreationCategory';

const { Title, Text } = Typography;

export default function CreationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <ContentWrapper>
      <Flex justify="center" className="w-auto">
        <Flex vertical className="text-left w-auto">
          <Title level={1} style={{ lineHeight: 0 }}>
            Creation
          </Title>
          <Text>#HelloWorld</Text>
        </Flex>
      </Flex>
      <Flex justify="center" gap={20} wrap>
        <CreationCategory
          hashtag="#BLENDER3D"
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/hero.png"
          title="3D Arts"
          animationStartPosition="LEFT"
          href="blender"
        />

        <CreationCategory
          hashtag="#INDIEGAMES"
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/game.png"
          title="Game"
          animationStartPosition="RIGHT"
          href="game"
        />
        <CreationCategory
          hashtag="#PROGRAMMING"
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/programming.jpg"
          title="Programming"
          animationStartPosition="RIGHT"
          href="programming"
        />
        <CreationCategory
          hashtag="#ILLUSTRATION"
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/illustration.webp"
          title="Illustration"
          animationStartPosition="LEFT"
          href="illustration"
        />
        <CreationCategory
          hashtag="#GRAPHICDESIGN"
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/graphic_design.webp"
          title="Graphic Design"
          animationStartPosition="LEFT"
          href="graphic-design"
        />
        <CreationCategory
          hashtag="#COMPANYIDEAS"
          backgroundImage="https://febryanshino.github.io/PortfolioDatabase/website/images/company_ideas.webp"
          title="Company Ideas"
          animationStartPosition="LEFT"
          href="company-ideas"
        />
      </Flex>
    </ContentWrapper>
  );
}
