import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PictureOutlined, DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export const AppSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="dark" width={220}>
      <div style={{
        height: 32, margin: 16,
        background: 'rgba(255,255,255,0.15)',
        borderRadius: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 600, fontSize: collapsed ? 12 : 14,
        transition: 'all 0.3s',
      }}>
        {collapsed ? 'ADM' : 'Admin Panel'}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['banners']}
        mode="inline"
        items={[
          { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
          { key: 'banners', icon: <PictureOutlined />, label: 'Баннеры' },
          { key: 'users', icon: <UserOutlined />, label: 'Пользователи' },
          { key: 'settings', icon: <SettingOutlined />, label: 'Настройки' },
        ]}
      />
    </Sider>
  );
};
