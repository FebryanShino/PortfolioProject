import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../component/ContentWrapper';
import { Flex, Typography } from 'antd';
import ResponsiveGridWrapper from '../../component/ResponsiveGridWrapper';
import { Link } from 'react-router-dom';
import { callAPI } from '../../config/api';
import { databaseURL } from '../../app.constants';

export default function AndroidAppsListPage() {
  const [apps, setApps] = useState<any[]>([]);

  async function fetchApps() {
    const data = await callAPI<any[]>({
      url: databaseURL('database', 'creation/android-apps/data.json'),
      method: 'GET',
    });

    setApps(data);
  }
  useEffect(() => {
    fetchApps();
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <ContentWrapper>
      <Flex justify="center" className="w-auto">
        <Flex vertical className="text-left w-auto">
          <Typography.Title level={1} style={{ lineHeight: 0 }}>
            Android Applications
          </Typography.Title>
        </Flex>
      </Flex>
      <ResponsiveGridWrapper minSize="10rem">
        {apps.map((app: any) => (
          <Link to={app.uniqueId}>
            <div
              className="w-full aspect-square rounded"
              style={{
                backgroundImage: `url(${app.iconUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {app.name}
          </Link>
        ))}
      </ResponsiveGridWrapper>
    </ContentWrapper>
  );
}
