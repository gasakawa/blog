'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const PostPage = () => {
  const router = usePathname();
  console.log('🚀 ~ PostPage ~ router:', router);
  return <div>Im a slug</div>;
};

export default PostPage;
