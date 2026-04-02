import React, { useRef } from 'react';
import { Form, Row, Col, Select, DatePicker, Input, Button, Space } from 'antd';
import { SearchOutlined, FilterOutlined, ClearOutlined } from '@ant-design/icons';
import { BannerFilters } from '../types/banner';
import type { Dayjs } from 'dayjs';

interface Props {
  onApply: (filters: BannerFilters) => void;
  onReset: () => void;
}

interface FormValues {
  placeholder?: 'main' | 'shtorka';
  status?: 'Activated' | 'Deactivated';
  priorityLevel?: 'High' | 'Medium' | 'Low';
  audienceType?: 'ALL' | 'WALLET_IDS';
  createdAtRange?: [Dayjs, Dayjs];
  titleKey?: string;
}

export const BannerFiltersPanel: React.FC<Props> = ({ onApply, onReset }) => {
  const [form] = Form.useForm<FormValues>();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getFiltersFromForm = (): BannerFilters => {
    const values = form.getFieldsValue();
    return {
      placeholder: values.placeholder,
      status: values.status,
      priorityLevel: values.priorityLevel,
      audienceType: values.audienceType,
      titleKey: values.titleKey,
      createdAtRange: values.createdAtRange
        ? [values.createdAtRange[0].toISOString(), values.createdAtRange[1].toISOString()]
        : undefined,
    };
  };

  const handleApply = () => onApply(getFiltersFromForm());

  const handleReset = () => {
    form.resetFields();
    onReset();
  };

  const handleTitleKeyChange = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => onApply(getFiltersFromForm()), 500);
  };

  return (
    <Form form={form} layout="vertical">
      <Row gutter={[16, 8]} align="bottom">
        <Col xs={24} sm={12} md={6} lg={4}>
          <Form.Item name="placeholder" label="Placeholder" style={{ marginBottom: 0 }}>
            <Select allowClear placeholder="Все">
              <Select.Option value="main">Main</Select.Option>
              <Select.Option value="shtorka">Shtorka</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Form.Item name="status" label="Статус" style={{ marginBottom: 0 }}>
            <Select allowClear placeholder="Все">
              <Select.Option value="Activated">Activated</Select.Option>
              <Select.Option value="Deactivated">Deactivated</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Form.Item name="priorityLevel" label="Приоритет" style={{ marginBottom: 0 }}>
            <Select allowClear placeholder="Все">
              <Select.Option value="High">High</Select.Option>
              <Select.Option value="Medium">Medium</Select.Option>
              <Select.Option value="Low">Low</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Form.Item name="audienceType" label="Тип аудитории" style={{ marginBottom: 0 }}>
            <Select allowClear placeholder="Все">
              <Select.Option value="ALL">ALL</Select.Option>
              <Select.Option value="WALLET_IDS">WALLET_IDS</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item name="createdAtRange" label="Дата создания" style={{ marginBottom: 0 }}>
            <DatePicker.RangePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item name="titleKey" label="Поиск по titleKey" style={{ marginBottom: 0 }}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="banner.main..."
              onChange={handleTitleKeyChange}
              allowClear
            />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Space style={{ paddingTop: 4 }}>
            <Button icon={<FilterOutlined />} type="primary" onClick={handleApply}>Применить</Button>
            <Button icon={<ClearOutlined />} onClick={handleReset}>Сбросить</Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};
