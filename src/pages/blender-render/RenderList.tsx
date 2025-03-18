import { AutoComplete, Button, Empty, Flex, Input, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import RenderCard from '../../component/RenderCard';
import Hero from '../../component/Hero';
import { BlenderRenderResponseType } from '../../config/api/responseTypes';
import { callAPI } from '../../config/api';
import { databaseURL } from '../../app.constants';
import ContentWrapper from '../../component/ContentWrapper';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { DataUtil } from '../../utils/DataUtil';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
} from '@ant-design/icons';
import { useQuery } from 'react-query';

export default function RenderList() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [paginatedData, setPaginatedData] = useState<
    BlenderRenderResponseType[]
  >([]);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });
  const queryCurrentPage = !isNaN(parseInt(searchParams.get('page') as string))
    ? parseInt(searchParams.get('page') as string)
    : 1;
  const querySearch = (searchParams.get('search') as string) ?? '';

  const { data: renders, status, isFetched } = useQuery('render', fetchRenders);

  async function fetchRenders() {
    const data = await callAPI<BlenderRenderResponseType[]>({
      url: databaseURL('database', 'creation/blender/render/data.json'),
      method: 'GET',
    });
    return data.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  function searchAndPaginateData() {
    // if (queryCurrentPage) setCurrentPage(Number(searchParams.get('page')));

    if (renders) {
      const searchedData = DataUtil.searchData<BlenderRenderResponseType>(
        renders,
        querySearch,
        'name',
      );
      setPageCount(Math.ceil(searchedData.length / 10));

      setPaginatedData(DataUtil.paginate(searchedData, 10, queryCurrentPage));
    }
  }

  useEffect(searchAndPaginateData, [renders, searchParams]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  useEffect(scrollToTop, []);

  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          width: '100%',
          height: '100svh',
          backgroundImage: `url(${databaseURL('website', 'images/hero.png')})`,
          backgroundSize: 'cover',
        }}
      >
        <Flex
          className="h-full text-left"
          style={{
            background:
              'linear-gradient(180deg, hsla(0,0%,0%, .5), hsla(0,0%,0%, 1))',
            backdropFilter: 'blur(10px)',
          }}
          vertical
          justify="flex-end"
          gap={0}
        >
          <ContentWrapper>
            <Typography.Title style={{ color: 'white' }}>
              FebryanShino's
              <br />
              Blender Journey
            </Typography.Title>
            <AutoComplete
              popupClassName="certain-category-search-dropdown"
              popupMatchSelectWidth={500}
              style={{ width: isDesktopOrLaptop ? 500 : '100%' }}
              className="self-start"
              size="large"
            >
              <Input.Search
                size="large"
                placeholder={
                  querySearch != '' ? querySearch : 'Search for images'
                }
                className="bg-none"
                style={{ background: 'transparent' }}
                variant="filled"
                onSearch={(value: string) =>
                  setSearchParams({
                    ...Object.fromEntries(searchParams),
                    search: value,
                    page: '1',
                  })
                }
              />
            </AutoComplete>
          </ContentWrapper>
        </Flex>
      </div>
      {isFetched &&
        paginatedData &&
        paginatedData.map((item) => (
          <RenderCard
            title={item.name}
            date={new Date(item.createdAt)}
            description={item.renderEngine}
            backgroundUrl={item.compressedImageUrl}
            href={item.uniqueId}
            key={item.uniqueId}
          />
        ))}
      {queryCurrentPage < pageCount + 1 && pageCount > 1 && (
        <ContentWrapper>
          <Flex
            className="text-left"
            justify={
              queryCurrentPage > 1 && queryCurrentPage < pageCount
                ? 'space-between'
                : queryCurrentPage === 1
                ? 'flex-start'
                : 'flex-end'
            }
          >
            {queryCurrentPage < pageCount && (
              <Button
                size="large"
                type="link"
                className="rounded-none text-black"
                style={{ fontSize: isDesktopOrLaptop ? '3rem' : '1rem' }}
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                onClick={() => {
                  setSearchParams({
                    ...Object.fromEntries(searchParams),
                    page: (queryCurrentPage + 1).toString(),
                  });
                  scrollToTop();
                }}
              >
                Next Page
              </Button>
            )}
            {queryCurrentPage > 1 && (
              <Button
                size="large"
                type="link"
                className="rounded-none text-black"
                style={{ fontSize: isDesktopOrLaptop ? '3rem' : '1rem' }}
                icon={<ArrowLeftOutlined />}
                onClick={() => {
                  setSearchParams({
                    ...Object.fromEntries(searchParams),
                    page: (queryCurrentPage - 1).toString(),
                  });
                  scrollToTop();
                }}
              >
                Previous Page
              </Button>
            )}
          </Flex>
        </ContentWrapper>
      )}
    </div>
  );
}
