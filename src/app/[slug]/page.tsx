import { Metadata } from 'next';
import markdownToHtml from '@/utils/markdown-to-html';
import Link from 'next/link';
import { readingTime } from 'reading-time-estimator';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import './post.css';
import 'highlight.js/styles/stackoverflow-dark.css';
import Comments from '../components/Comments';
import { ParamsType } from '@/types/param.type';
import { getPostData } from '@/lib/api';

export function generateMetadata({ params }: ParamsType): Metadata {
  const post = getPostData(params.slug);
  const keywords = Array.isArray(post.metadata.tags.split(','))
    ? post.metadata.tags.split(',').join(',')
    : [post.metadata.tags];

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    keywords,
    authors: post.metadata.authors,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      authors: post.metadata.authors,
      type: 'article',
    },
  };
}

const PostPage = async ({ params }: ParamsType) => {
  const post = getPostData(params.slug);

  const tags = post.metadata.tags.length > 0 ? post.metadata.tags.split(',') : undefined;
  const minRead = readingTime(post.content, 150, 'pt-br').minutes;

  const content = await markdownToHtml(post.content);
  const shortName = process.env.DISQUS_SHORT_NAME ?? '';

  return (
    <>
      <article className="flex flex-col pt-20 pb-0 items-start">
        <header>
          <div className="back-listing">
            <Link href={`/`}>&larr; Voltar na listagem</Link>
          </div>
          <p className="post-date">
            {format(new Date(post.metadata.date), "d 'de' MMM 'de' yyyy", { locale: ptBR })}
            &nbsp; - &nbsp;
            {`${minRead > 0 ? minRead : 1} min de leitura`}
          </p>
          <h1 className="post-title">{post.metadata.title}</h1>
          <h2 className="post-description">{post.metadata.excerpt}</h2>
          {tags !== undefined && (
            <div className="flex py-0 px-5">
              {tags.map((tag: string) => (
                <span key={tag} className="post-tags">
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </span>
              ))}
            </div>
          )}
        </header>
        <section className="post-container">
          <div dangerouslySetInnerHTML={{ __html: content }} className="flex flex-col"></div>
        </section>
      </article>
      <Comments slug={params.slug} title={post.metadata.title} shortName={shortName} />
    </>
  );
};

export default PostPage;
