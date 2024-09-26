import { UserOutlined } from '@ant-design/icons';
import { Flex } from 'antd';

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <Flex align="center" justify="space-between">
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </Flex>
  ),
});

export const searchOptions = [
  {
    label: 'hello',
    options: [
      renderItem('AntDesign UI', 10600),
      renderItem('AntDesign UI', 10600),
    ],
  },
  {
    label: '<Title title="Solutions" />',
    options: [
      renderItem('AntDesign UI FAQ', 60100),
      renderItem('AntDesign FAQ', 30010),
    ],
  },
  {
    label: '<Title title="Articles" />',
    options: [renderItem('AntDesign design language', 100000)],
  },
];

export const ASSETS_DATA = Array(65)
  .fill('')
  .map((item: string, index: number) => {
    return {
      index: index,
      name: `Asset ${index + 1}`,
      href: '#',
    };
  });
