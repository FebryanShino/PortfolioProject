import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import {
  Breadcrumb,
  Button,
  Descriptions,
  Divider,
  Empty,
  Flex,
  Image,
  Typography,
} from 'antd';
import ResponsiveGridWrapper from '../../component/ResponsiveGridWrapper';
import { Link, useParams } from 'react-router-dom';
import { callAPI } from '../../config/api';
import { databaseURL } from '../../app.constants';
import { LeftOutlined, PictureOutlined } from '@ant-design/icons';

export default function AndroidAppsDetailPage() {
  const { id } = useParams();
  const [app, setApp] = useState<any>();

  async function fetchApp() {
    const data = await callAPI<any[]>({
      url: databaseURL('database', `creation/android-apps/${id}/data.json`),
      method: 'GET',
    });

    setApp(data);
  }
  useEffect(() => {
    fetchApp();
    window.scrollTo({
      top: 0,
    });
  }, []);

  return app ? (
    <ContentWrapper contentGap={50}>
      <Breadcrumb
        items={[
          {
            href: '/#/creation/android-apps',
            title: (
              <>
                <LeftOutlined />
                <span>Apps List</span>
              </>
            ),
          },
          {
            title: (
              <>
                <span>{app.name}</span>
              </>
            ),
          },
        ]}
      />
      <Flex className="w-auto" gap={30}>
        <div
          className="w-[20rem] aspect-square rounded"
          style={{
            backgroundImage: `url(${app.iconUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Flex vertical className="text-left w-auto">
          <Typography.Title level={2} style={{ lineHeight: 0 }}>
            {app.name}
          </Typography.Title>
          <Descriptions
            className="mt-auto"
            bordered
            layout="vertical"
            items={[
              {
                label: 'Version',
                children: app.version,
              },
              {
                label: 'Size',
                children: app.size,
              },
            ]}
          />

          <Link to={app.downloadUrl}>
            <Button className="mt-3 w-full" size="large">
              Download
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex vertical className="text-left" gap={20}>
        <Typography.Title level={4} style={{ lineHeight: 0 }}>
          Descriptions
        </Typography.Title>
        <Typography.Paragraph>{app.description}</Typography.Paragraph>
      </Flex>

      <Flex vertical className="text-left" gap={20}>
        <Typography.Title level={4} style={{ lineHeight: 0 }}>
          Screenshots
        </Typography.Title>
        <ResponsiveGridWrapper minSize="20rem">
          {app.screenshots.map((imgUrl: string) => (
            <div className="w-full h-full rounded overflow-hidden">
              <Image src={imgUrl} />
            </div>
          ))}
        </ResponsiveGridWrapper>
      </Flex>

      {app.youtubeEmbed && (
        <Flex vertical className="text-left" gap={20}>
          <Typography.Title level={4} style={{ lineHeight: 0 }}>
            YouTube
          </Typography.Title>

          <iframe
            width="560"
            height="315"
            src={app.youtubeEmbed}
            title={app.name}
          ></iframe>
        </Flex>
      )}
    </ContentWrapper>
  ) : (
    <Empty />
  );
}
