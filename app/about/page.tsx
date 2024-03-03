import React from 'react';
import { getPosts } from '../page';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';

const About = async () => {
  let posts = await getPosts();

  return (
    <>
      <ProgressBar />
      <main>
        {posts.map((post) => (
          <div>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
          </div>
        ))}
      </main>
    </>
  );
};

export default About;
