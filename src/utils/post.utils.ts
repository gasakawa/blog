import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPosts = () => {
  const fileNames = readdirSync(postsDirectory);
  return fileNames.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = readFileSync(fullPath, 'utf8');

    const result = matter(fileContents);

    return {
      slug,
      metadata: result.data,
    };
  });
};

export const getPostData = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
};
