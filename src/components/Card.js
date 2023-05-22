import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/assets/scss/card.module.scss';

export default function Card(props) {
    return(
        <div className={styles.card}>
            <Image src={props.img} alt={props.title} width="320" height="240" loading="lazy" />
            <h3>{props.title}</h3>
            <time>{props.date}</time>
            <p>{props.description}</p>
            <p><Link href={props.slug}>Read more</Link></p>
        </div>
    )
}