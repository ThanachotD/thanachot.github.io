import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thanachot</title>
        <meta name="firstpage" content="introduce myself by thanachot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thanachot.ico" />
      </Head>
      <main className={styles.main}>
        <img src="profile.jpg"
          alt="..." className={styles.profile} />
        <h1 className={styles.title}>
          Thanachot Wongmetin
        </h1>
        <div className={styles.description}>
          <code className={styles.code}>Software Engineer · UX/UI Design · Photographer </code>
          <p className={styles.introduce}>
            I am passionate about designing user interfaces and user experiences, 
            and I also have a strong background in software engineering.I am always looking for new challenges 
            and opportunities to make innovation. </p>
        </div>
        <Link href="/projects" className={styles.btn}> About Me &rarr; </Link>
      </main>
    </>
  )
}
