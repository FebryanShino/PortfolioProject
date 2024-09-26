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
import { ASSETS_DATA, searchOptions } from '../app.constants';

const { Title, Text } = Typography;

export default function AssetsSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAscending, setIsAscending] = useState(true);
  const [currentAssetsPage, setCurrentAssetsPage] = useState<number>(1);
  const [assets, setAssets] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const searchParamsId = searchParams.get('id');

  useEffect(() => {
    setAssets(ASSETS_DATA);
  }, []);

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: '1',
        sortDirection: 'ASC',
      });
    }
    const searchedData = DataUtil.searchData(
      assets,
      searchParams.get('search') ? (searchParams.get('search') as string) : '',
    );

    const queryIsAscending = searchParams.get('sortDirection') == 'ASC';
    setIsAscending(queryIsAscending);
    const currentAssets = DataUtil.sortData(
      searchedData,
      queryIsAscending ? 'ASC' : 'DESC',
    );

    setPageCount(Math.ceil(currentAssets.length / 20));

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
              href: '/',
              title: <HomeOutlined />,
            },
            {
              title: (
                <>
                  <UserOutlined />
                  <span>Assets List</span>
                </>
              ),
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
            options={searchOptions}
            size="large"
          >
            <Input.Search
              onSearch={(value: string) =>
                setSearchParams({
                  ...Object.fromEntries(searchParams),
                  search: value,
                  page: '1',
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
                  title={item.name}
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
            Page {searchParams.get('page')} out of {pageCount}
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
            disabled={Number(searchParams.get('page') as string) === pageCount}
          >
            <RightOutlined />
          </Button>
        </Flex>
      </ContentWrapper>
    </div>
  );
}
