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
  Skeleton,
  Space,
  Statistic,
  Typography,
} from 'antd';
import { Link, Navigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { callAPI } from '../../config/api';
import { GithubProfileResposeType } from '../../config/api/responseTypes';

const { Title, Text, Paragraph } = Typography;

export default function ProgrammingLandingPage() {
  const [githubProfile, setGithubProfile] =
    useState<GithubProfileResposeType>();
  const [githubRepos, setGithubRepos] = useState<any[]>([]);

  async function fetchProfile() {
    const data = await callAPI<GithubProfileResposeType>({
      url: 'https://api.github.com/users/FebryanShino',
      method: 'GET',
    });
    setGithubProfile(data);
  }
  async function fetchRepos() {
    const data = await callAPI<any[]>({
      url: 'https://api.github.com/users/FebryanShino/repos',
      method: 'GET',
    });
    setGithubRepos(data);
  }
  useEffect(() => {
    fetchProfile();
    fetchRepos();
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
          {githubRepos ? (
            <>
              <Card>
                <Flex justify="space-around">
                  <Statistic
                    title="Joined on"
                    value={new Date(
                      githubProfile.created_at,
                    ).toLocaleDateString()}
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
            <Skeleton active />
          )}
        </>
      ) : (
        <Skeleton active />
      )}
    </ContentWrapper>
  );
}
