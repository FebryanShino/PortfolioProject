import React from 'react';
import {
  generatePath,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import ContentWrapper from '../../component/ContentWrapper';
import {
  Breadcrumb,
  Button,
  Divider,
  Flex,
  Image,
  Space,
  Typography,
} from 'antd';
import {
  DownloadOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ResponsiveGridWrapper from '../../component/ResponsiveGridWrapper';

const { Title, Paragraph, Text } = Typography;

export default function AssetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ContentWrapper>
      <Breadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            href: '/#/creation/blender/assets',
            title: (
              <>
                <UserOutlined />
                <span>Assets List</span>
              </>
            ),
          },
          {
            title: id,
          },
        ]}
      />

      <Flex gap={30} wrap className="mb-10">
        <div
          style={{ backgroundImage: 'url(/hero.png)' }}
          className="bg-cover bg-center w-96 aspect-square cursor-pointer"
        ></div>
        <Space direction="vertical" className="text-left w-[30rem]">
          <Title level={2}>Title</Title>
          <Space>
            {Array(5)
              .fill('')
              .map((item: any) => (
                <Button size="small">Tags</Button>
              ))}
          </Space>
          <Divider />
          <Text>Description</Text>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quaerat consequuntur aliquam illo dolorum repellat doloribus
            molestias deleniti cum illum dolore molestiae provident corporis,
            placeat doloremque et quidem fugiat optio cupiditate, fugit omnis
            suscipit voluptatem! Modi vero, fugit beatae aliquam, iusto cum
            voluptatem tenetur quia temporibus perferendis ad? Tempora, minima?
          </Paragraph>
          <Divider />
          <Space>
            <Button
              shape="circle"
              size="large"
              icon={<DownloadOutlined />}
            ></Button>
          </Space>
        </Space>
      </Flex>

      <ResponsiveGridWrapper minSize="10rem">
        {Array(5)
          .fill('')
          .map((item: string) => (
            <div
              style={{ backgroundImage: 'url(/hero.png)' }}
              className="bg-cover bg-center aspect-square cursor-pointer"
            ></div>
          ))}
      </ResponsiveGridWrapper>
    </ContentWrapper>
  );
}
