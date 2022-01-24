import type { NextPage } from "next";
import Head from "next/head";
import { MailOutline } from "react-ionicons";
import layoutStyles from "../styles/Layout.module.css";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

const isProd = process.env.NODE_ENV === 'production';
const staticURL = (url : String) => `${isProd ? '/portfolio' : ''}${url}`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diogo | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <div className={`${styles.mainContainer} ${layoutStyles.container}`}>
          <div className={styles.bio} id="who">
            <h1 className={styles.name}>Hello there, I&apos;m Diogo</h1>
            <h2 className={styles.role}>
              a frontend developer from{" "}
              <span className={styles.br}>Brazil</span>
            </h2>
            <p className={styles.desc}>
              I can create websites written in modern Javascript frameworks, be
              it in pure React, Next.js, or Gatsby, my goal is to create a great
              user experience no matter the tool being used.
            </p>
            <img
              className={styles.displayIcon}
              src={staticURL("/React-icon.svg")}
              alt="React"
            />
            <img
              className={styles.displayIcon}
              src={staticURL("/Gatsby-Monogram.svg")}
              alt="Gatsby"
            />
            <img
              className={styles.displayIcon}
              src={staticURL("/Nextjs-logo.svg")}
              alt="Next.js"
            />
          </div>
          <div>
            <a className={styles.hire} href="#contact">
              Hire me
            </a>
          </div>
        </div>
        <div className={styles.edu}>
          <div className={layoutStyles.container} id="education">
            <div className={styles.card}>
              Full-time high school with IT technician course
              <p>3 years</p>
            </div>
            <div className={styles.card}>
              Information Systems bachelor
              <p>4 years</p>
            </div>
          </div>
        </div>
        <div className={`${styles.about} ${layoutStyles.container}`} id="about">
          <h2>About</h2>
          <p>
            Since high school I have been interested in website development,
            starting with PHP and then Javascript. I used a wide range of CSS
            frameworks, from Bootstrap to Tailwind, but I don&apos;t mind the
            freedom of CSS using a preprocessor like SASS or LESS.
          </p>
          <p>
            Besides Javascript frontend development, I have experience with
            Node.js backend, designing and consuming Rest APIs.
          </p>
          <p>
            On other general-purpose projects, I have done a C++ application
            with OpenGL calls from scratch, putting into practice the
            fundamentals of OOP while learning the Windows API and modern C++.
          </p>
          <p>
            Within the Javascript ecosystem, I have played around with
            Typescript, Electron, ReactNative, Passport.js, Express.js, the
            basics of Deno, and much more.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={layoutStyles.container} id="contact">
          <h2>Contact</h2>
          <p className={styles.card}>
            <MailOutline title="mail" />
            <a href="mailto:diogo.timote.98@gmail.com">
              diogo.timote.98@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
