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

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/creation" element={<CreationPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/creation/blender" element={<BlenderCreationPage />} />
        <Route path="/creation/blender/assets" element={<AssetsSearch />} />
        <Route path="/creation/blender/assets/:id" element={<AssetDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
