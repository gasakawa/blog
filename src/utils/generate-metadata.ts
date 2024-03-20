import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export type MetadataType = {
  title: string;
  description: string;
  type?: string;
  keywords?: Array<string>;
  authors?: Array<string>;
};

export const generateMetadata = (metadata: MetadataType): Metadata => {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords ?? '',
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      authors: metadata.authors,
    },
  };
};
