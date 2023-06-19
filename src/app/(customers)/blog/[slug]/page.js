import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    async function getPost() {
        const res = await fetch(`https://drupal-showcase.cyber-duck.co.uk/jsonapi/node/article/${params.slug}`, {
            headers: {
                "Authorization": `Basic ${process.env.AUTH}`
            },
            next: {
                revalidate: 10
            }
        });
        return res.json();
    }

    const post = await getPost();

    return {
        title: `${post.data.attributes.title} | Next Sessions`,
        description: post.description,
    }
}

export default async function Post({ params }) {
    async function getPost() {
        const res = await fetch(`https://drupal-showcase.cyber-duck.co.uk/jsonapi/node/article/${params.slug}?include=field_image&fields[file--file]=uri,url`, {
            headers: {
                "Authorization": `Basic ${process.env.AUTH}`
            },
            next: {
                revalidate: 10
            }
        });
        return res.json();
    }

    const post = await getPost();

    return (
    <main className="main-about">
        <div className={styles.full}>
            <h1>{post.data.attributes.title}</h1>
            <p>{post.description}</p>
            <p><time>{new Date(post.data.attributes.created).toDateString()}</time></p>
            <hr className={styles.sep}/>
            <p>{post.included[0].attributes.name}</p>
            <div dangerouslySetInnerHTML={ { __html: post.data.attributes.body.value } }></div>
            <hr className={styles.sep}/>
            <Link href="/blog/">Back to all posts</Link>
        </div>
    </main>
  )
}
