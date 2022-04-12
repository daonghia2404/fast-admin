import React from 'react';
import { Form } from 'antd';

import { TSystemSettingProps } from './SystemSetting.types';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';

import './SystemSetting.scss';
import Button from '@/components/Button';

const SystemSetting: React.FC<TSystemSettingProps> = () => {
  const [form] = Form.useForm();

  return (
    <div className="SystemSetting">
      <Form form={form}>
        <div className="SystemSetting-form style-table-form shadow">
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Content</td>
                <td>Api</td>
              </tr>
            </thead>
            <tr>
              <td className="text">Tiêu đề web</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập tiêu đề web" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">Copyright</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập copyright" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">Múi giờ</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn múi giờ" options={[]} />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">Chặn IP</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <TextArea adminStyle placeholder="Nhập tên" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td>
                <div className="Modal-submit flex">
                  <Button title="Thêm mới" type="primary" adminStyle htmlType="submit" />
                  <Button title="Làm lại" adminStyle htmlType="reset" />
                </div>
              </td>
              <td />
              <td />
            </tr>
          </table>
        </div>
      </Form>
    </div>
  );
};

export default SystemSetting;
