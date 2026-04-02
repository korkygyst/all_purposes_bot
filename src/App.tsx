import React from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { BannersPage } from './pages/BannersPage';

const App: React.FC = () => (
  <ConfigProvider locale={ruRU}>
    <BannersPage />
  </ConfigProvider>
);

export default App;
