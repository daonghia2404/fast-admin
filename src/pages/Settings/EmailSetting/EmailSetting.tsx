import React from 'react';
import { Form } from 'antd';

import { TEmailSettingProps } from './EmailSetting.types';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';

import './EmailSetting.scss';

const EmailSetting: React.FC<TEmailSettingProps> = () => {
  const [form] = Form.useForm();

  return (
    <div className="EmailSetting">
      <Form form={form}>
        <div className="EmailSetting-form style-table-form shadow">
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Content</td>
                <td>Api</td>
              </tr>
            </thead>
            <tr>
              <td className="text">SMTP</td>
              <td>
                <Form.Item name="SMTP" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn SMTP" options={[]} />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">SMTP Form</td>
              <td>
                <Form.Item name="SMTPForm" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập SMTP Form" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">SMTP Port</td>
              <td>
                <Form.Item name="SMTPPort" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập SMTP Port" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">SMTP Number</td>
              <td>
                <Form.Item name="SMTPNumber" rules={[validationRules.required()]}>
                  <Input adminStyle size="large" placeholder="Nhập SMTP Number" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">SMTP Password</td>
              <td>
                <Form.Item name="SMTPPassword" rules={[validationRules.required()]}>
                  <Input type="password" adminStyle size="large" placeholder="Nhập SMTP Password" />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">SMTP Secure</td>
              <td>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Select adminStyle size="large" placeholder="Chọn SMTP Secure" options={[]} />
                </Form.Item>
              </td>
              <td className="text">{`{$site.name}`}</td>
            </tr>
            <tr>
              <td className="text">SMTP To</td>
              <td>
                <Form.Item name="SMTPTo" rules={[validationRules.required()]}>
                  <div className="flex items-center">
                    <Input
                      adminStyle
                      size="large"
                      placeholder="Nhập SMTP To"
                      style={{ flex: 1, marginRight: '1rem' }}
                    />
                    <Button adminStyle type="primary" title="Kiểm tra" size="large" />
                  </div>
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

export default EmailSetting;
