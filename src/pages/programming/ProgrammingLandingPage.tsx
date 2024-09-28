import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import { GITHUB_PROFILE } from '../../services/dummyData';
import Card from 'antd/es/card/Card';
import { Button, Divider, Empty, Flex, Space, Typography } from 'antd';
import { Link, Navigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

export default function ProgrammingLandingPage() {
  const [githubProfile, setGithubProfile] = useState<any>(null);
  useEffect(() => {
    setGithubProfile(GITHUB_PROFILE);
  }, []);
  return (
    <ContentWrapper>
      {githubProfile ? (
        <>
          <Flex gap={20}>
            <div
              className="w-60 aspect-square bg-cover"
              style={{ backgroundImage: `url(${githubProfile.avatar_url})` }}
            ></div>
            <Space className="text-left" direction="vertical">
              <Title>{githubProfile.name}</Title>
              <Text>{githubProfile.login}</Text>
              <Divider />
              <Paragraph>{githubProfile.bio}</Paragraph>
              <Divider />
              <Link to={githubProfile.html_url}>
                <Button>Visit</Button>
              </Link>
            </Space>
          </Flex>
          <Card>{githubProfile.avatar_url}</Card>
        </>
      ) : (
        <Empty />
      )}
    </ContentWrapper>
  );
}
