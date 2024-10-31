import { Card, Progress, Space, Typography } from 'antd';
import React from 'react';
import ResponsiveGridWrapper from '../ResponsiveGridWrapper';
import { SkillCategoryType, SKILLS } from '../../app.constants';

const { Title, Paragraph, Text } = Typography;

interface SkillInterface extends React.ComponentPropsWithoutRef<'div'> {
  data: SkillCategoryType[];
}

export default function Skill(props: SkillInterface) {
  return (
    <Card>
      <Title level={2}>My Skills</Title>
      <ResponsiveGridWrapper minSize="20rem">
        {props.data.map((skill) => (
          <Card>
            <Title level={5}>{skill.title}</Title>
            <Space direction="vertical" className="w-full text-left">
              {skill.data.map((item) => (
                <Space direction="vertical" className="w-full text-left">
                  <Space>
                    {item.icon}
                    <Text>{item.title}</Text>
                  </Space>
                  <Progress
                    percent={item.percentage}
                    size="small"
                    strokeColor={item.color}
                  />
                </Space>
              ))}
            </Space>
          </Card>
        ))}
      </ResponsiveGridWrapper>
    </Card>
  );
}
