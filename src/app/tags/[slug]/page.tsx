import PostList from '@/app/components/PostList';
import { getPostsByTag } from '@/lib/api';
import { ParamsType } from '@/types/param.type';

export default function Tags({ params }: ParamsType) {
  const posts = getPostsByTag(params.slug);

  return (
    <>
      <h1 className="text-[3rem] font-bold">Posts de {params.slug.toUpperCase()} </h1>
      <PostList posts={posts} />
    </>
  );
}
