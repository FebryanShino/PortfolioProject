import { Flex } from 'antd';
import React from 'react';

interface ContentWrapperProps extends React.ComponentPropsWithRef<'div'> {
  maxWidth?: string | number;
  contentGap?: string | number;
}

export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <Flex className="w-[100%] py-32" align="center" vertical {...props}>
      <Flex
        vertical
        gap={props.contentGap ? props.contentGap : 20}
        style={{
          width: props.maxWidth ? props.maxWidth : '1140px',
        }}
      >
        {props.children}
      </Flex>
    </Flex>
  );
}
