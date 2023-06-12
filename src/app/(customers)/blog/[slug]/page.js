import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    async function getPost() {
        const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`, { next: { revalidate: 30 } });
        return res.json();
    }

    const post = await getPost();

    return {
        title: `${post.title} | Next Sessions`,
        description: post.description,
    }
}

export default async function Post({ params }) {
    async function getPost() {
        const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`, { next: { revalidate: 30 } });
        return res.json();
    }

    const post = await getPost();

    return (
    <main className="main-about">
        <div className={styles.full}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{new Date(post.date).toDateString()}</p>
            <hr className={styles.sep}/>
            <p><Image src={post.img} alt={post.title} width="800" height="600" loading="lazy" /></p>
            <div dangerouslySetInnerHTML={ { __html: post.content } }></div>
            <hr className={styles.sep}/>
            <Link href="/blog/">Back to all posts</Link>
        </div>
    </main>
  )
}
