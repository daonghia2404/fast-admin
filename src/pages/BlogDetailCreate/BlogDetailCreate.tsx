import React from 'react';

import BlogDetail from '@/pages/Blogs/BlogDetail';
import { ETypeBlogDetail } from '@/pages/Blogs/BlogDetail/BlogDetail.enums';

import './BlogDetailCreate.scss';

const BlogDetailCreate: React.FC = () => {
  return (
    <div className="BlogDetailCreate">
      <BlogDetail type={ETypeBlogDetail.CREATE} />
    </div>
  );
};

export default BlogDetailCreate;
