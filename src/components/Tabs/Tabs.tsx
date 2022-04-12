import React from 'react';
import { Tabs as AntdTabs } from 'antd';

import { TTabsProps } from '@/components/Tabs/Tabs.types';

import './Tabs.scss';

const { TabPane } = AntdTabs;

const Tabs: React.FC<TTabsProps> = ({ defaultActiveKey, dataTabs = [], onChange }) => {
  return (
    <div className="Tabs">
      <AntdTabs defaultActiveKey={defaultActiveKey} onChange={onChange}>
        {dataTabs.map((tab) => (
          <TabPane tab={tab.title} key={tab.key}>
            {tab.content}
          </TabPane>
        ))}
      </AntdTabs>
    </div>
  );
};

export default Tabs;
