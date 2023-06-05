import Image from 'next/image';
import styles from '@/app/page.module.css';
import Card from '@/app/components/Card';

async function getPosts() {
    const res = await fetch(`http://localhost:3000/api/posts/`, { next: { revalidate: 3600 } });
    return res.json();
}

export default async function Home() {

    const posts = await getPosts();

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>This is the home page</h1>
                <p>Lorem  ipsum dolor sit amet</p>
            </div>

            <div className={styles.grid}>
                <h2>Posts</h2>
            </div>

            <div className={styles.cards}>
                {posts.map(post => (
                    <Card
                        key={post.id}
                        title={post.title} 
                        img={post.img} 
                        date={new Date(post.date).toDateString()}
                        description={post.description}
                        slug={`/blog/${post.slug}`}
                    />
                ))}
            </div>

            <div className={styles.grid}>
                <a
                href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2>
                    Docs <span>-&gt;</span>
                </h2>
                <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2>
                    Learn <span>-&gt;</span>
                </h2>
                <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2>
                    Templates <span>-&gt;</span>
                </h2>
                <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2>
                    Deploy <span>-&gt;</span>
                </h2>
                <p>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
                </a>
            </div>
        </main>
    )
}
