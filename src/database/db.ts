import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export type PostType = {
  id: number;
  slug: string;
  category: string;
  dt_created: string;
  title: string;
  excerpt: string;
  tags: string;
};

async function connect() {
  return open({
    filename: './blog.db',
    driver: sqlite3.Database,
  });
}

export async function getPosts(pg: number, rc: number): Promise<PostType[]> {
  const posts: PostType[] = [];
  return new Promise((resolve, reject) => {
    connect().then(db => {
      db.each(`SELECT * FROM posts ORDER BY dt_created DESC LIMIT ${rc} OFFSET ${pg} `, [], (err, row) => {
        if (err) {
          console.log('🚀 ~ db.each ~ err:', err);
          reject(err);
        }
        posts.push(row);
        resolve(posts);
      });
    });
  });
}

export async function getPaginationData() {
  const postPerPage = Number(process.env.POST_PER_PAGE);
  const totalPosts = (await new Promise((resolve, reject) => {
    connect().then(db => {
      db.each('SELECT COUNT(*) as total FROM posts', (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  })) as { total: number };

  const numPages = Math.ceil(totalPosts.total / postPerPage);

  return {
    postPerPage: postPerPage,
    totalPosts: totalPosts.total,
    numPages,
  };
}
