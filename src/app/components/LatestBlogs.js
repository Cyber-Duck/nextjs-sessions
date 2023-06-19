import Card from "@/app/components/Card";
import styles from '@/app/page.module.css';

async function getPosts() {
    const res = await fetch(`https://drupal-showcase.cyber-duck.co.uk/jsonapi/node/article?page[limit]=3&include=field_image&fields[file--file]=uri,url`, {
        headers: {
            "Authorization": `Basic ${process.env.AUTH}`
        },
        next: {
            revalidate: 10
        }
    });
    return res.json();
}

export default async function LatestBlogs() {

    const posts = await getPosts();

    return (
        <div className={styles.cards}>
            {posts.data.map(post => (
                <Card
                    key={post.id}
                    title={post.attributes.title} 
                    img={post.image} 
                    date={new Date(post.attributes.created).toDateString()}
                    description={post.attributes.body.summary}
                    slug={`/blog/${post.id}`}
                />
            ))}
        </div>
    )
}