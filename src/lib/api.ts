import { readFileSync, readdirSync } from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Post, PostType } from '@/types/post.type';

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

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return { ...data, slug: realSlug } as unknown as PostType;
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export const getPostSlugs = () => {
  return readdirSync(postsDirectory);
};
