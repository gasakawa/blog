import { PostType } from '@/types/post.type';
import postData from '../posts.json';
import _ from 'lodash';

export function getPosts(pg = 0): PostType[] {
  const rc = Number(process.env.POST_PER_PAGE);
  const postList = _.chunk(postData, rc);

  return postList[pg] as PostType[];
}
