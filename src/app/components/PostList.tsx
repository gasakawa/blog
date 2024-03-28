import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { PostType } from '@/types/post.type';

export default function PostList({ posts }: { posts: PostType[] }): React.JSX.Element {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[3.755rem] mr-[10px] mb-0 ml-[10px] gap-5">
        {posts !== undefined &&
          posts.map(post => (
            <div
              key={post.slug}
              className="flex flex-col items-start border-solid border border-[#2f3459] rounded p-[10px] shadow-blue-950 h-[auto]"
            >
              <div className="flex justify-center items-center">
                <time className="text-base">
                  {format(new Date(post.dt_created), "d 'de' MMM 'de' yyyy", { locale: ptBR })}
                </time>
                {post.category.split(',').map(cat => (
                  <span
                    key={cat}
                    className="py-[2px] px-1 border border-[#2f3459] text-[0.7rem] ml-2 rounded font-medium uppercase"
                  >
                    <Link href={`/categories/${cat}`}>{cat}</Link>
                  </span>
                ))}
              </div>
              <Link
                href={`/${post.slug}`}
                passHref
                className="no-underline transition-colors duration-[0.5s] text-[1.6rem] font-bold"
              >
                {post.title}
              </Link>
              <p className="text-base font-extralight mt-1">{post.excerpt}</p>
              <div className="flex">
                {post.tags?.split(',').map(tag => (
                  <span
                    key={tag}
                    className="border-solid border border-[#2f3459] rounded text-[0.6rem] mt-2 mr-2 mb-0 ml-0 py-[2px] px-[4px]"
                  >
                    <Link href={`/tags/${tag}`} className="no-underline uppercase">
                      {tag}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
