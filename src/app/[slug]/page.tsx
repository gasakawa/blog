import { getPostData } from '@/utils/post.utils';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props, parent: ResolvingMetadata): Metadata {
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

const PostPage = ({ params }: { params: any }) => {
  const post = getPostData(params.slug);

  return <div>Im a slug {JSON.stringify(post)}</div>;
};

export default PostPage;
