import PostList from '@/app/components/PostList';
import { getPostsByCategory } from '@/database/db';
import { ParamsType } from '@/types/param.type';

export default function Tags({ params }: ParamsType) {
  const posts = getPostsByCategory(params.slug);

  return (
    <>
      <h1 className="text-[3rem] font-bold">Posts de {params.slug} </h1>
      <PostList posts={posts} />
    </>
  );
}
