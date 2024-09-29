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
import ContentWrapper from '../../component/ContentWrapper';
import ResponsiveGridWrapper from '../../component/ResponsiveGridWrapper';
import Meta from 'antd/es/card/Meta';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { DataUtil, SortDirectionType } from '../../utils/DataUtil';
import { ASSETS_DATA, databaseURL, searchOptions } from '../../app.constants';
import { callAPI } from '../../config/api';

const { Title, Text } = Typography;

export default function AssetsSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAscending, setIsAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [assets, setAssets] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);

  async function fetchAssets() {
    const data = await callAPI<any[]>({
      url: databaseURL('database', 'creation/blender/asset/data.json'),
      method: 'GET',
    });
    setAssets(data);
  }

  useEffect(() => {
    fetchAssets();
  }, []);

  useEffect(() => {
    const searchedData = DataUtil.searchData(
      assets,
      searchParams.get('search') ? (searchParams.get('search') as string) : '',
    );

    const queryCurrentPage = searchParams.get('page') as string;
    const querySortDirection = searchParams.get('sortDirection');

    if (queryCurrentPage) setCurrentPage(Number(searchParams.get('page')));

    if (querySortDirection) setIsAscending(querySortDirection === 'ASC');

    const currentAssets = DataUtil.sortData(
      searchedData,
      querySortDirection ? (querySortDirection as SortDirectionType) : 'ASC',
    );

    setPageCount(Math.ceil(currentAssets.length / 20));

    setPaginatedData(
      DataUtil.paginate(
        currentAssets,
        20,
        queryCurrentPage ? Number(queryCurrentPage) : currentPage,
      ),
    );
  }, [assets, searchParams]);

  return (
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
          defaultValue={searchParams.get('search') as string}
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
          defaultValue="Name"
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
            { value: 'Name', label: 'Name' },
            { value: 'Date', label: 'Date' },
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
          {isAscending ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
        </Button>
      </Flex>
      {paginatedData ? (
        <ResponsiveGridWrapper minSize="18rem">
          {paginatedData.map((item: any, index: number) => (
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined
                  key="setting"
                  onClick={() => navigate(item.index.toString())}
                />,
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
          ))}
        </ResponsiveGridWrapper>
      ) : (
        <Empty />
      )}
      <Flex justify="center" align="center" gap={10}>
        <Button
          onClick={() =>
            setSearchParams({
              ...Object.fromEntries(searchParams),
              page: (currentPage - 1).toString(),
            })
          }
          disabled={currentPage === 1}
        >
          <LeftOutlined />
        </Button>

        <Text>
          Page {currentPage} out of {pageCount}
        </Text>
        <Button
          onClick={() =>
            setSearchParams({
              ...Object.fromEntries(searchParams),
              page: (currentPage + 1).toString(),
            })
          }
          disabled={currentPage === pageCount}
        >
          <RightOutlined />
        </Button>
      </Flex>
    </ContentWrapper>
  );
}
