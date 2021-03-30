import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// automatically create route : "/" & can access it

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          exercitationem saepe dolor, vitae praesentium, molestias soluta optio,
          facilis corrupti minus ex labore quisquam. Exercitationem
          reprehenderit ipsum doloribus molestias fugit! Similique?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          exercitationem saepe dolor, vitae praesentium, molestias soluta optio,
          facilis corrupti minus ex labore quisquam. Exercitationem
          reprehenderit ipsum doloribus molestias fugit! Similique?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
