import {
  EditOutlined,
  EllipsisOutlined,
  HomeOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  AutoComplete,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Empty,
  Flex,
  Input,
  Select,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import ContentWrapper from '../component/ContentWrapper';
import ResponsiveGridWrapper from '../component/ResponsiveGridWrapper';
import Meta from 'antd/es/card/Meta';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { DataUtil } from '../utils/DataUtil';

const { Title, Text } = Typography;

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

const options = [
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

export default function AssetsSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAscending, setIsAscending] = useState(true);
  const [currentAssetsPage, setCurrentAssetsPage] = useState<number>(1);
  const [assets, setAssets] = useState<any[]>([]);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const searchParamsId = searchParams.get('id');

  useEffect(() => {
    const data: any[] = [];
    Array(65)
      .fill('')
      .forEach((item: string, index: number) => {
        data.push(index + 1);
      });
    setAssets(data);
  }, []);
  useEffect(() => {
    const queryIsAscending = searchParams.get('sortDirection') == 'ASC';
    setIsAscending(queryIsAscending);
    const currentAssets = DataUtil.sortData(
      assets,
      queryIsAscending ? 'ASC' : 'DESC',
    );
    console.log(currentAssets);

    setPaginatedData(
      DataUtil.paginate(
        currentAssets,
        20,
        parseInt(searchParams.get('page') as string),
      ),
    );
  }, [assets, searchParams]);

  return (
    <div>
      <ContentWrapper>
        <Breadcrumb
          items={[
            {
              href: '',
              title: <HomeOutlined />,
            },
            {
              href: '',
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: 'Application',
            },
          ]}
        />
        <Title className="text-left font-thin" level={2}>
          <span className="font-thin">Search Asset</span>
        </Title>
        <Flex>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            popupMatchSelectWidth={500}
            style={{ width: 500 }}
            className="self-start"
            options={options}
            size="large"
          >
            <Input.Search
              onSearch={(value: string) =>
                setSearchParams({
                  ...Object.fromEntries(searchParams),
                  search: value,
                })
              }
              size="large"
              placeholder="input here"
            />
          </AutoComplete>
        </Flex>
        <Flex align="center">
          Sort By
          <Select
            defaultValue="lucy"
            variant="borderless"
            style={{ width: 100 }}
            className="text-left"
            onChange={(value: string) =>
              setSearchParams({
                ...Object.fromEntries(searchParams),
                sortBy: value,
              })
            }
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
          <Button
            type="text"
            onClick={() => {
              setIsAscending(!isAscending);
              setSearchParams({
                ...Object.fromEntries(searchParams),
                sortDirection: isAscending ? 'DESC' : 'ASC',
              });
            }}
          >
            {isAscending ? (
              <SortAscendingOutlined />
            ) : (
              <SortDescendingOutlined />
            )}
          </Button>
        </Flex>

        <ResponsiveGridWrapper minSize="18rem">
          {paginatedData ? (
            paginatedData.map((item: any, index: number) => (
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  }
                  title={'Card No.' + item}
                  description="This is the description"
                />
              </Card>
            ))
          ) : (
            <Empty />
          )}
        </ResponsiveGridWrapper>
        <Flex justify="center" align="center" gap={10}>
          <Button
            onClick={() =>
              setSearchParams({
                ...Object.fromEntries(searchParams),
                page: (
                  Number(searchParams.get('page') as string) - 1
                ).toString(),
              })
            }
            disabled={Number(searchParams.get('page') as string) === 1}
          >
            <LeftOutlined />
          </Button>

          <Text>
            Page {searchParams.get('page')} out of{' '}
            {Math.ceil(assets.length / 20)}
          </Text>
          <Button
            onClick={() =>
              setSearchParams({
                ...Object.fromEntries(searchParams),
                page: (
                  Number(searchParams.get('page') as string) + 1
                ).toString(),
              })
            }
            disabled={
              Number(searchParams.get('page') as string) ===
              Math.ceil(assets.length / 20)
            }
          >
            <RightOutlined />
          </Button>
        </Flex>
      </ContentWrapper>
    </div>
  );
}
