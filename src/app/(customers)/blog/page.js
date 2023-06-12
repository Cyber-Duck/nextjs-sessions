import styles from '@/app/page.module.css';
import Card from '@/app/components/Card';

export const metadata = {
    title: 'Blog',
    description: 'Lorem ipsum dolor',
}

async function getPosts() {
    const res = await fetch(`http://localhost:3000/api/posts/`, { next: { revalidate: 3600 } });
    return res.json();
}

export default async function Blog() {

    const posts = await getPosts();

    return (
        <main className="main-about">
            <div className={styles.full}>
                <h1>This is the Blog page</h1>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum dolor sit amet</p>
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
        </main>
    )
}
