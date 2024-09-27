import React from 'react';

interface ContentWrapperProps extends React.ComponentPropsWithRef<'div'> {}

export default function ContentWrapper({
  children,
  ...props
}: ContentWrapperProps) {
  return (
    <div className="mx-20 my-32" {...props}>
      {children}
    </div>
  );
}
