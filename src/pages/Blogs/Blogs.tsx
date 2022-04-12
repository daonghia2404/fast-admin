import React from 'react';

import Tabs from '@/components/Tabs';
import BlogsPost from '@/pages/Blogs/BlogsPost';

import './Blogs.scss';

const Blogs: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Quản lý bài viết',
      content: <BlogsPost />,
    },
    {
      key: '2',
      title: 'Chuyên mục',
      content: <></>,
    },
  ];

  return (
    <div className="Blogs">
      <div className="Blogs-tab">
        <Tabs dataTabs={dataTabs} />
      </div>
    </div>
  );
};

export default Blogs;
