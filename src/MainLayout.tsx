import React from 'react';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';

export default function MainLayout(
  props: React.ComponentPropsWithoutRef<'div'>,
) {
  return (
    <>
      <NavigationBar />
      {props.children}
      <Footer />
    </>
  );
}
