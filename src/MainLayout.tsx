import React from 'react';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';

interface MainLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  theme?: 'DARK' | 'LIGHT';
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <NavigationBar theme={props.theme} />
      {props.children}
      <Footer />
    </>
  );
}
