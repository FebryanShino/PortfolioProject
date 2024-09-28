import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import { GITHUB_PROFILE, GITHUB_REPOS } from '../../services/dummyData';
import Card from 'antd/es/card/Card';
import {
  Button,
  Divider,
  Empty,
  Flex,
  Space,
  Statistic,
  Typography,
} from 'antd';
import { Link, Navigate } from 'react-router-dom';
import CountUp from 'react-countup';

const { Title, Text, Paragraph } = Typography;

export default function ProgrammingLandingPage() {
  const [githubProfile, setGithubProfile] = useState<any>(null);
  const [githubRepos, setGithubRepos] = useState<any[]>([]);
  useEffect(() => {
    setGithubProfile(GITHUB_PROFILE);
    setGithubRepos(GITHUB_REPOS);
  }, []);
  return (
    <ContentWrapper>
      {githubProfile ? (
        <>
          <Flex gap={20}>
            <div
              className="w-72 aspect-square bg-cover"
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
          <Card>
            <Flex justify="space-around">
              <Statistic
                title="Joined on"
                value={new Date(githubProfile.created_at).toLocaleDateString()}
                precision={2}
              />
              <Statistic
                title="Number of Repos"
                value={githubRepos.length}
                precision={2}
                formatter={(value) => <CountUp end={value as number} />}
              />
            </Flex>
          </Card>
        </>
      ) : (
        <Empty />
      )}
    </ContentWrapper>
  );
}
