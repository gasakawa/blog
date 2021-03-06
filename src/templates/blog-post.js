/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import RecommendedPost from '../components/RecommededPost';
import Comments from '../components/Comments';
import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  const keywords =
    post.frontmatter.keywords.length > 0
      ? post.frontmatter.keywords.split(';')
      : [];

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        {keywords.length > 0 && (
          <S.PostKeyword>
            {keywords.map((kw, idx) => (
              <div className="kw-item" key={idx}>
                {kw}
              </div>
            ))}
          </S.PostKeyword>
        )}
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPost next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
        image
        keywords
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
