'use client';
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

export default function Comments({ slug, title, shortName }: { slug: string; title: string; shortName: string }) {
  const completeUrl = `https://gasakawa.com/${slug}`;
  const config = {
    url: completeUrl,
    identifier: slug,
    title,
  };
  return (
    <div>
      <h2 className="font-semibold text-[2.1rem]">Comentários</h2>
      <DiscussionEmbed shortname={shortName} config={config} />
    </div>
  );
}
