import React from 'react';
import { Table, Tag, Button, Switch, Space, Tooltip, Typography, Empty } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined } from '@ant-design/icons';
import { Banner, PriorityLevel } from '../types/banner';

const { Text } = Typography;

const PRIORITY_ORDER: Record<PriorityLevel, number> = { High: 0, Medium: 1, Low: 2 };
const PRIORITY_COLOR: Record<PriorityLevel, string> = { High: 'red', Medium: 'orange', Low: 'blue' };

function calcCtr(impressions: number, clicks: number): number {
  if (!impressions) return 0;
  return (clicks / impressions) * 100;
}

function getCtrColor(ctr: number): string {
  if (ctr > 10) return '#52c41a';
  if (ctr >= 3) return '#fa8c16';
  return '#ff4d4f';
}

function formatDate(d?: string): string {
  if (!d) return '\u2014';
  return new Date(d).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

interface Props {
  banners: Banner[];
  loading: boolean;
  onEdit: (banner: Banner) => void;
  onToggleStatus: (id: string) => void;
}

export const BannerTable: React.FC<Props> = ({ banners, loading, onEdit, onToggleStatus }) => {
  const columns: ColumnsType<Banner> = [
    {
      title: 'Banner ID', dataIndex: 'id', key: 'id', width: 110, fixed: 'left',
      render: (id: string) => <Text code style={{ fontSize: 12 }}>{id}</Text>,
    },
    {
      title: 'Title Key', dataIndex: 'titleKey', key: 'titleKey', width: 230, ellipsis: true,
      render: (key: string) => <Tooltip title={key}><Text style={{ fontSize: 13 }}>{key}</Text></Tooltip>,
    },
    {
      title: 'Placeholder', dataIndex: 'placeholder', key: 'placeholder', width: 110,
      render: (p: string) => <Tag color={p === 'main' ? 'geekblue' : 'purple'}>{p}</Tag>,
    },
    {
      title: 'Статус', dataIndex: 'status', key: 'status', width: 130,
      render: (s: string) => <Tag color={s === 'Activated' ? 'success' : 'error'}>{s}</Tag>,
    },
    {
      title: 'Приоритет', dataIndex: 'priorityLevel', key: 'priorityLevel', width: 110,
      sorter: (a, b) => PRIORITY_ORDER[a.priorityLevel] - PRIORITY_ORDER[b.priorityLevel],
      render: (l: PriorityLevel) => <Tag color={PRIORITY_COLOR[l]}>{l}</Tag>,
    },
    { title: 'Начало', dataIndex: 'startAt', key: 'startAt', width: 110, render: formatDate },
    { title: 'Конец', dataIndex: 'endAt', key: 'endAt', width: 110, render: formatDate },
    {
      title: 'Аудитория', dataIndex: 'audienceType', key: 'audienceType', width: 120,
      render: (t: string) => <Tag color={t === 'ALL' ? 'cyan' : 'gold'}>{t}</Tag>,
    },
    {
      title: 'Размер', dataIndex: 'audienceSize', key: 'audienceSize', width: 90, align: 'right',
      render: (v: number) => v === 0 ? '\u2014' : v.toLocaleString(),
    },
    {
      title: 'Показы', dataIndex: 'impressions', key: 'impressions', width: 110, align: 'right',
      sorter: (a, b) => a.impressions - b.impressions,
      render: (v: number) => v.toLocaleString(),
    },
    {
      title: 'Клики', dataIndex: 'clicks', key: 'clicks', width: 90, align: 'right',
      render: (v: number) => v.toLocaleString(),
    },
    {
      title: 'CTR (%)', key: 'ctr', width: 100, align: 'right',
      sorter: (a, b) => calcCtr(a.impressions, a.clicks) - calcCtr(b.impressions, b.clicks),
      render: (_: unknown, record: Banner) => {
        const ctr = calcCtr(record.impressions, record.clicks);
        return (
          <Tooltip title={`${record.clicks} кликов / ${record.impressions} показов`}>
            <Text strong style={{ color: getCtrColor(ctr) }}>{ctr.toFixed(2)}%</Text>
          </Tooltip>
        );
      },
    },
    {
      title: 'Создан', dataIndex: 'createdAt', key: 'createdAt', width: 120,
      sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      render: formatDate,
    },
    {
      title: 'Действия', key: 'actions', fixed: 'right', width: 160,
      render: (_: unknown, record: Banner) => (
        <Space size="small">
          <Button size="small" icon={<EditOutlined />} onClick={() => onEdit(record)}>Edit</Button>
          <Tooltip title={record.status === 'Activated' ? 'Деактивировать' : 'Активировать'}>
            <Switch
              size="small"
              checked={record.status === 'Activated'}
              onChange={() => onToggleStatus(record.id)}
              checkedChildren="ON"
              unCheckedChildren="OFF"
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table<Banner>
      rowKey="id"
      columns={columns}
      dataSource={banners}
      loading={loading}
      scroll={{ x: 1600, y: 520 }}
      pagination={{ pageSize: 10, showSizeChanger: false, showTotal: (t) => `Всего: ${t} баннеров` }}
      locale={{ emptyText: <Empty description="Баннеры не найдены" /> }}
      size="middle"
      bordered
    />
  );
};
