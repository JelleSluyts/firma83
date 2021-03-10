import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FIRMA 83</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FIRMA 83
        </h1>
        <p>coming soon!</p>
        <a href="mailto:info@jellesluyts.be"><FiMail /></a>
      </main>
    </div>
  )
}
