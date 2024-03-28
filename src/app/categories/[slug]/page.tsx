import PostList from '@/app/components/PostList';
import { getPostsByCategory } from '@/lib/api';
import { ParamsType } from '@/types/param.type';

export default function Tags({ params }: ParamsType) {
  const posts = getPostsByCategory(params.slug);

  return (
    <div className="mt-10 sm:mt-0">
      <h1 className="text-[2rem] font-bold sm:text-[3rem]">Posts de {params.slug.toUpperCase()} </h1>
      <PostList posts={posts} />
    </div>
  );
}
