import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

export const getPostData = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const result = matter(fileContents);
  return {
    content: result.content,
    metadata: result.data,
  };
};
