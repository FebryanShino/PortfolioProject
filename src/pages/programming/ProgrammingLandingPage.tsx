import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import { GITHUB_PROFILE, GITHUB_REPOS } from '../../services/dummyData';
import Card from 'antd/es/card/Card';
import {
  Avatar,
  Button,
  Divider,
  Empty,
  Flex,
  List,
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
    setGithubRepos(
      GITHUB_REPOS.sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      ),
    );
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
              <Divider type="vertical" />
              <Statistic
                title="Number of Repos"
                value={githubRepos.length}
                precision={2}
                formatter={(value) => <CountUp end={value as number} />}
              />
            </Flex>
          </Card>
          <Card
            className="text-left"
            title={<Title level={3}>Repositories</Title>}
          >
            <List
              itemLayout="horizontal"
              dataSource={githubRepos}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.name}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Card>
        </>
      ) : (
        <Empty />
      )}
    </ContentWrapper>
  );
}
