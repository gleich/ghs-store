import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GHS School Store</title>
        <meta
          name="description"
          content="School store for Goffstown High School"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GHS School Store</h1>

        <p className={styles.description}>
          This site is a W.I.P (work in progress)
        </p>
      </main>
    </div>
  );
};

export default Home;
