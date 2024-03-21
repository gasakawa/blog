import { getPaginationData, getPosts } from '@/database/db';
import PostList from './components/PostList';

export default async function Home() {
  const pagination = await getPaginationData();

  const posts = await getPosts(0, pagination.postPerPage);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}
