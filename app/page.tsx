import { ProgressBar } from './components/ProgressBar/ProgressBar';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
  let data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Fetch error!!!!');
      }
      return res.json();
    })
    .then((data) => data);

  return data;
}

export default async function Home() {
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
}
