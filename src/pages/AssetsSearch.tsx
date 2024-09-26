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
import { paginate } from '../utils/DataUtil';
import Meta from 'antd/es/card/Meta';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

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
  const [isAscending, setIsAscending] = useState(false);
  const [currentAssetsPage, setCurrentAssetsPage] = useState<number>(1);
  const [assets, setAssets] = useState<any[]>([]);
  const searchParamsId = searchParams.get('id');

  useEffect(() => {
    const data: any[] = [];
    Array(65)
      .fill('')
      .forEach((item: string, index: number) => {
        data.push(index + 1);
      });

    const queryIsAscending = searchParams.get('sortDirection') == 'ASC';
    setIsAscending(queryIsAscending);
    const currentAssets = data;
    if (queryIsAscending) {
      currentAssets.sort((a, b) => a - b);
    } else {
      currentAssets.sort((a, b) => b - a);
    }
    setAssets(currentAssets);
  }, [searchParamsId]);

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
                navigate({
                  pathname: '',
                  search: createSearchParams({
                    ...Object.fromEntries(searchParams),
                    search: value,
                  }).toString(),
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
          {assets ? (
            paginate(assets, 20, currentAssetsPage).map(
              (item: any, index: number) => (
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
              ),
            )
          ) : (
            <Empty />
          )}
        </ResponsiveGridWrapper>
        <Flex justify="center" align="center" gap={10}>
          <Button
            onClick={() => setCurrentAssetsPage(currentAssetsPage - 1)}
            disabled={currentAssetsPage === 1}
          >
            <LeftOutlined />
          </Button>

          <Text>
            Page {currentAssetsPage} out of {Math.ceil(assets.length / 20)}
          </Text>
          <Button
            onClick={() => setCurrentAssetsPage(currentAssetsPage + 1)}
            disabled={currentAssetsPage === Math.ceil(assets.length / 20)}
          >
            <RightOutlined />
          </Button>
        </Flex>
      </ContentWrapper>
    </div>
  );
}
