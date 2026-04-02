import React, { useEffect } from 'react';
import { Layout, Typography, Button, Card, Space, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AppSider } from '../components/AppSider';
import { BannerFiltersPanel } from '../components/BannerFilters';
import { BannerTable } from '../components/BannerTable';
import { useBanners } from '../hooks/useBanners';
import { Banner, BannerFilters } from '../types/banner';

const { Header, Content } = Layout;
const { Title } = Typography;

export const BannersPage: React.FC = () => {
  const { banners, loading, load, applyFilters, resetFilters, toggleStatus } = useBanners();

  useEffect(() => { load({}); }, [load]);

  const handleEdit = (banner: Banner) => {
    console.log('[Edit banner]', banner);
    message.info(`Редактирование: ${banner.titleKey}`);
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await toggleStatus(id);
      message.success('Статус обновлён');
    } catch {
      message.error('Не удалось обновить статус');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout>
        <Header style={{
          background: '#fff', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid #f0f0f0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}>
          <Title level={4} style={{ margin: 0 }}>Баннеры</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => message.info('Создание баннера')}>
            Создать баннер
          </Button>
        </Header>
        <Content style={{ padding: 24, background: '#f5f5f5' }}>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <Card size="small" title="Фильтры">
              <BannerFiltersPanel
                onApply={(f: BannerFilters) => applyFilters(f)}
                onReset={resetFilters}
              />
            </Card>
            <Card
              size="small"
              title={
                <Space>
                  <span>Список баннеров</span>
                  <Typography.Text type="secondary" style={{ fontSize: 13 }}>
                    ({banners.length})
                  </Typography.Text>
                </Space>
              }
            >
              <BannerTable
                banners={banners}
                loading={loading}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
              />
            </Card>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};
