import { PostType } from '@/types/post.type';
import _ from 'lodash';
import { posts } from './posts';

export function getPosts(pg = 0): PostType[] {
  const rc = Number(process.env.POST_PER_PAGE);
  const postList = _.chunk(posts, rc);

  return postList[pg] as PostType[];
}

export function getPostsByTag(tag: string, pg = 0) {
  const rc = Number(process.env.POST_PER_PAGE);
  const postsByTag = posts.filter(post => post.tags?.includes(tag));

  const postList = _.chunk(postsByTag, rc);

  return postList[pg] as PostType[];
}

export function getPostsByCategory(tag: string, pg = 0) {
  const rc = Number(process.env.POST_PER_PAGE);
  const postsByCategory = posts.filter(post => post.category?.includes(tag));

  const postList = _.chunk(postsByCategory, rc);

  return postList[pg] as PostType[];
}
