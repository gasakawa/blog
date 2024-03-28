import { getPosts } from '@/database/db';
import PostList from './components/PostList';

export default function Home() {
  const posts = getPosts();

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}
