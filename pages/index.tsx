import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter()
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <>
      <Head>
        <title>Thanachot</title>
        <meta name="firstpage" content="introduce myself by thanachot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thanachot.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
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
          <p className={styles.introduce}>
            contact me Thanachot.won@gmail.com </p>
          <a href="https://github.com/ThanachotD" className="bi bi-github"></a>
          <a href="https://www.linkedin.com/in/thanachot-wongmetin-94bb49210/" className="bi bi-linkedin"></a>
          <a href="https://www.facebook.com/profile.php?id=100005890065983" className="bi bi-facebook"></a>
          <a onClick={() => router.push('mailto:Thanachot.won@gmail.com')} className="bi bi-envelope-fill"></a>
          {/*<a href='resume.pdf'>resume</a> */}
    
        </div>
        <Link href="/projects" className={styles.btn}>Skills & Experience &rarr; </Link>

      </main>
    </>
  )
}
