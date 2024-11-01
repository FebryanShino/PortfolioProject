import {
  JavaScriptOutlined,
  PythonOutlined,
  UserOutlined,
} from '@ant-design/icons';
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

export function databaseURL(
  type: 'database' | 'website',
  path: string,
): string {
  const DATABASE_URL = 'https://febryanshino.github.io/PortfolioDatabase/';
  return DATABASE_URL + type + '/' + path;
}

interface SkillType {
  title: string;
  percentage: number;
  color: string;
  icon?: any;
}

export interface SkillCategoryType {
  title: string;
  data: SkillType[];
}

export const SKILLS: SkillCategoryType[] = [
  {
    title: 'Programming',
    data: [
      {
        icon: <JavaScriptOutlined />,
        title: 'JavaScript',
        percentage: 90,
        color: 'yellow',
      },
      {
        title: 'React',
        percentage: 80,
        color: 'skyblue',
      },
      {
        icon: <PythonOutlined />,
        title: 'Python',
        percentage: 70,
        color: 'orange',
      },
      {
        title: 'Laravel',
        percentage: 70,
        color: 'crimson',
      },
    ],
  },
  {
    title: '3D Art',
    data: [
      {
        title: 'Blender',
        percentage: 95,
        color: 'orange',
      },
    ],
  },
  {
    title: 'Illustration',
    data: [{ title: 'Clip Studio Paint', percentage: 50, color: 'gray' }],
  },
  {
    title: 'Photo Editing',
    data: [{ title: 'Adobe Photoshop', percentage: 80, color: 'blue' }],
  },
  {
    title: 'Video Editing',
    data: [
      { title: 'Adobe Premiere Pro', percentage: 30, color: 'blue' },
      { title: 'Adobe After Effects', percentage: 40, color: 'blue' },
      { title: 'Davinci Resolve', percentage: 10, color: 'gray' },
    ],
  },
  {
    title: 'Graphic Design',
    data: [
      { title: 'Adobe Illustrator', percentage: 80, color: 'orange' },
      { title: 'CorelDRAW', percentage: 60, color: 'lime' },
    ],
  },
  {
    title: 'Game Development',
    data: [
      { title: 'Unity', percentage: 20, color: 'black' },
      { title: 'Construct 3', percentage: 40, color: 'gray' },
    ],
  },
];

export const CREATION_CATEGORIES = [];
