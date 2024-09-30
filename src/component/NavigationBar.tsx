import {
  CloseOutlined,
  MenuFoldOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Button, Drawer, Empty, Flex, Space, Typography } from 'antd';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

interface NavigationBarProps extends React.ComponentPropsWithoutRef<'div'> {
  theme?: 'LIGHT' | 'DARK';
}

export default function NavigationBar(props: NavigationBarProps) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 40rem)',
  });

  function showDrawer() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  useGSAP(
    () => {
      gsap.set(container.current, { yPercent: -100 });
      const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY === 0) {
          gsap.to(container.current, { yPercent: -100, duration: 0.5 });
        } else {
          gsap.to(container.current, { yPercent: 0, duration: 0.5 });
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    },
    { scope: container },
  );
  return (
    <Flex
      className="relative"
      align="center"
      justify="space-between"
      style={{
        height: 70,
        width: '100%',
        zIndex: 100,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <div
        ref={container}
        className={
          'absolute w-svw h-full z-[-1] ' +
          (props.theme === 'DARK' ? 'bg-black' : 'bg-white')
        }
      ></div>
      <Flex
        className="relative"
        align="center"
        justify="space-between"
        style={{
          height: '100%',
          width: '100%',
          paddingInline: isDesktopOrLaptop ? 70 : 20,
        }}
      >
        <Flex
          align="flex-end"
          className="cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img
            src="/logo.png"
            style={{
              height: '100px',
              width: 'auto',
              zIndex: 1,
              filter: props.theme === 'DARK' ? '' : 'invert(100%)',
            }}
          />
        </Flex>
        <Space style={{ zIndex: 9999 }}>
          {isDesktopOrLaptop ? (
            <>
              <Button
                type="text"
                ghost
                className={props.theme === 'DARK' ? 'text-white' : ''}
                onClick={() => navigate('/creation')}
              >
                Creation
              </Button>
              <Button
                type="text"
                ghost
                className={props.theme === 'DARK' ? 'text-white' : ''}
                onClick={() => navigate('/blogs')}
              >
                Blogs
              </Button>
              <Button
                type="text"
                ghost
                className={props.theme === 'DARK' ? 'text-white' : ''}
                onClick={() => navigate('/contact')}
              >
                Contact
              </Button>
              <Button
                type="text"
                ghost
                className={props.theme === 'DARK' ? 'text-white' : ''}
                onClick={() => navigate('/about')}
              >
                About
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={showDrawer}
                type="text"
                icon={
                  <MenuFoldOutlined
                    className={props.theme === 'DARK' ? 'text-white' : ''}
                  />
                }
              ></Button>
              <Drawer
                title="Navigation"
                open={open}
                onClose={onClose}
                zIndex={9999}
                style={{
                  backgroundColor: props.theme === 'DARK' ? 'black' : 'white',
                }}
                closeIcon={
                  <CloseOutlined
                    className={props.theme === 'DARK' ? 'text-white' : ''}
                  />
                }
              >
                <Space direction="vertical">
                  <Button
                    type="text"
                    ghost
                    className={props.theme === 'DARK' ? 'text-white' : ''}
                    onClick={() => navigate('/creation')}
                  >
                    Creation
                  </Button>
                  <Button
                    type="text"
                    ghost
                    className={props.theme === 'DARK' ? 'text-white' : ''}
                    onClick={() => navigate('/blogs')}
                  >
                    Blogs
                  </Button>
                  <Button
                    type="text"
                    ghost
                    className={props.theme === 'DARK' ? 'text-white' : ''}
                    onClick={() => navigate('/contact')}
                  >
                    Contact
                  </Button>
                  <Button
                    type="text"
                    ghost
                    className={props.theme === 'DARK' ? 'text-white' : ''}
                    onClick={() => navigate('/about')}
                  >
                    About
                  </Button>
                </Space>
              </Drawer>
            </>
          )}
        </Space>
      </Flex>
    </Flex>
  );
}
