import React, { ReactNode } from 'react';

interface ContentWrapperProps {
  children: ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className="mx-20 my-32">{children}</div>;
}
