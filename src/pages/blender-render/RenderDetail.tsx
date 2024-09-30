import React, { useEffect, useState } from 'react';
import {
  BlenderRenderDetailResponseType,
  BlenderRenderResponseType,
} from '../../config/api/responseTypes';
import { callAPI } from '../../config/api';
import { databaseURL } from '../../app.constants';
import { Link, useParams } from 'react-router-dom';
import ContentWrapper from '../../component/ContentWrapper';
import {
  Breadcrumb,
  Button,
  Descriptions,
  Divider,
  Image,
  Space,
  Typography,
} from 'antd';
import {
  DownloadOutlined,
  InstagramOutlined,
  LeftOutlined,
  PictureOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import ResponsiveGridWrapper from '../../component/ResponsiveGridWrapper';

export default function RenderDetail() {
  const [render, setRender] = useState<BlenderRenderResponseType>();
  const [renderDetail, setRenderDetail] =
    useState<BlenderRenderDetailResponseType>();
  useEffect(() => {}, []);
  const { id } = useParams();

  async function fetchRender() {
    const data = await callAPI<BlenderRenderResponseType[]>({
      url: databaseURL('database', 'creation/blender/render/data.json'),
      method: 'GET',
    });
    setRender(data.find((item) => item.uniqueId === id));
  }

  async function fetchRenderDetail() {
    try {
      const data = await callAPI<BlenderRenderDetailResponseType>({
        url: databaseURL('database', `creation/blender/render/${id}/data.json`),
        method: 'GET',
      });
      setRenderDetail(data);
    } catch (error) {
      setRenderDetail(undefined);
    }
  }

  useEffect(() => {
    fetchRender();
    fetchRenderDetail();
  }, []);

  return (
    <ContentWrapper>
      {render && (
        <>
          <Breadcrumb
            items={[
              {
                href: '/#/creation/blender/render',
                title: (
                  <>
                    <LeftOutlined />
                    <span>Renders List</span>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <PictureOutlined />
                    <span>{render.name}</span>
                  </>
                ),
              },
            ]}
          />
          <Typography.Title className="text-left">
            {render.name}
          </Typography.Title>
          <Image src={render.originalImageUrl} />
          <Space>
            <Link to={render.originalImageUrl}>
              <Button icon={<DownloadOutlined />} size="large">
                Download Image
              </Button>
            </Link>
            {renderDetail?.instagramUrl && (
              <a href={renderDetail.instagramUrl}>
                <Button icon={<InstagramOutlined />} size="large">
                  View Post
                </Button>
              </a>
            )}
          </Space>
          <Typography.Text className="text-left">Descriptions</Typography.Text>
          <Descriptions
            className="text-left"
            bordered
            column={1}
            items={[
              {
                label: 'Programs',
                children: 'Blender 3D',
              },
              {
                label: 'Render Engine',
                children: render.renderEngine,
              },
              {
                label: 'Created At',
                children: new Date(render.createdAt).toLocaleDateString(
                  'en-US',
                  {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  },
                ),
              },
            ]}
          />
          {renderDetail?.variations && (
            <>
              <Divider />
              <Typography.Title level={3} className="text-left">
                Variations
              </Typography.Title>
              <ResponsiveGridWrapper minSize="20rem">
                {renderDetail.variations.map((item) => (
                  <div className="w-full h-full">
                    <Image src={item} />
                  </div>
                ))}
              </ResponsiveGridWrapper>
            </>
          )}
        </>
      )}
    </ContentWrapper>
  );
}
