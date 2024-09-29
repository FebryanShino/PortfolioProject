import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Homepage from './pages/Homepage';
import Footer from './component/Footer';
import CreationPage from './pages/CreationPage';
import BlenderCreationPage from './pages/BlenderCreationPage';
import AboutMePage from './pages/AboutMePage';
import AssetsSearch from './pages/blender-asset/AssetsSearch';
import AssetDetail from './pages/blender-asset/AssetDetail';
import RenderList from './pages/blender-render/RenderList';
import MainLayout from './MainLayout';
import NotFound from './pages/NotFound';
import ProgrammingLandingPage from './pages/programming/ProgrammingLandingPage';
import { ConfigProvider } from 'antd';
import GameCreationPage from './pages/GameCreationPage';

function App() {
  return (
    <div className="App bg-[hsl(0,0%,95%)]">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#f2f2f2',
            fontSize: 16,
            colorTextSecondary: 'black',
            colorFillTertiary: '#453f3c',
            // colorFillSecondary: 'black',
            // colorTextSecondary: 'black',
            // colorBgContainer: '#f2f2f2',
          },
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Homepage />
              </MainLayout>
            }
          />
          <Route
            path="/creation"
            element={
              <MainLayout>
                <CreationPage />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutMePage />
              </MainLayout>
            }
          />
          <Route
            path="/creation/blender"
            element={
              <MainLayout>
                <BlenderCreationPage />
              </MainLayout>
            }
          />
          <Route
            path="/creation/blender/assets"
            element={
              <MainLayout>
                <AssetsSearch />
              </MainLayout>
            }
          />
          <Route
            path="/creation/blender/assets/:id"
            element={
              <MainLayout>
                <AssetDetail />
              </MainLayout>
            }
          />

          <Route
            path="/creation/blender/render"
            element={
              <MainLayout theme="DARK">
                <RenderList />
              </MainLayout>
            }
          />

          <Route
            path="/creation/programming"
            element={
              <MainLayout>
                <ProgrammingLandingPage />
              </MainLayout>
            }
          />
          <Route
            path="/creation/game"
            element={
              <MainLayout>
                <GameCreationPage />
              </MainLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
