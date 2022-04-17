import React from 'react';

import BlogDetail from '@/pages/Blogs/BlogDetail';
import { ETypeBlogDetail } from '@/pages/Blogs/BlogDetail/BlogDetail.enums';

import './BlogDetailUpdate.scss';

const BlogDetailUpdate: React.FC = () => {
  return (
    <div className="BlogDetailUpdate">
      <BlogDetail type={ETypeBlogDetail.UPDATE} />
    </div>
  );
};

export default BlogDetailUpdate;
