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

export default function RenderList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [renders, setRenders] = useState<BlenderRenderResponseType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [paginatedData, setPaginatedData] = useState<
    BlenderRenderResponseType[]
  >([]);
  useEffect(() => {}, []);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });

  async function fetchRenders() {
    const data = await callAPI<BlenderRenderResponseType[]>({
      url: databaseURL('database', 'creation/blender/render/data.json'),
      method: 'GET',
    });

    setRenders(
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    );
  }

  useEffect(() => {
    fetchRenders();
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    // const searchedData = DataUtit.searchData(
    //   assets,
    //   searchParams.get('search') ? (searchParams.get('search') as string) : '',
    // );
    const queryCurrentPage = searchParams.get('page') as string;
    if (queryCurrentPage) setCurrentPage(Number(searchParams.get('page')));

    if (renders) {
      setPageCount(Math.ceil(renders.length / 10));

      setPaginatedData(
        DataUtil.paginate(
          renders,
          10,
          queryCurrentPage ? Number(queryCurrentPage) : currentPage,
        ),
      );
    }
  }, [renders, searchParams]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

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
                placeholder="Search for images"
                className="bg-none"
                style={{ background: 'transparent' }}
                variant="filled"
              />
            </AutoComplete>
          </ContentWrapper>
        </Flex>
      </div>
      {renders &&
        paginatedData &&
        paginatedData.map((item) => (
          <RenderCard
            title={item.name}
            date={new Date(item.createdAt)}
            description={item.renderEngine}
            backgroundUrl={item.originalImageUrl}
            href={item.uniqueId}
            key={item.uniqueId}
          />
        ))}
      {currentPage < pageCount + 1 && pageCount > 1 && (
        <ContentWrapper>
          <Flex
            className="text-left"
            justify={
              currentPage > 1 && currentPage < pageCount
                ? 'space-between'
                : currentPage === 1
                ? 'flex-start'
                : 'flex-end'
            }
          >
            {currentPage < pageCount && (
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
                    page: (currentPage + 1).toString(),
                  });
                  scrollToTop();
                }}
              >
                Next Page
              </Button>
            )}
            {currentPage > 1 && (
              <Button
                size="large"
                type="link"
                className="rounded-none text-black"
                style={{ fontSize: isDesktopOrLaptop ? '3rem' : '1rem' }}
                icon={<ArrowLeftOutlined />}
                onClick={() => {
                  setSearchParams({
                    ...Object.fromEntries(searchParams),
                    page: (currentPage - 1).toString(),
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
