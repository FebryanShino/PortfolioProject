import React from 'react';
import { Card, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nationality',
    children: 'Indonesia',
  },
  {
    key: '2',
    label: 'Languages',
    children: 'Indonesia, English',
  },
  {
    key: '3',
    label: 'Hobby',
    children: 'Programming and Listening to Music',
  },
  {
    key: '4',
    label: 'Birthday',
    children: 'February 1st',
  },
  {
    key: '5',
    label: 'Based in',
    children: 'Indonesia',
  },
  {
    key: '6',
    label: 'Business Email',
    children: 'none',
  },
];

export default function DetailCard() {
  return (
    <Card className="mt-20">
      <Descriptions
        title="Detailed Information"
        items={items}
        className="w-full mb-20"
        layout="vertical"
      />
    </Card>
  );
}
