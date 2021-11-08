import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {FaGithub, FaLinkedin, FaInstagram, FaRocket} from 'react-icons/fa'

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.information}>
          <span>👋 Olá,</span><br/>
          <h1>Eu sou <span className={styles.name}>&lt;Tharlys Alves /&gt;</span></h1>
          <span>Desenvolvedor full stack.</span><br/><br/>

          <div className={styles.socialNetwork}>
            <FaGithub size={25}/>
            <FaLinkedin size={25}/>
            <FaInstagram size={25}/>
            <FaRocket size={25}/>
          </div>
        </div>
        
        <Image src="/images/web-dev-home.png" alt="Computer" width={500} height={500}/>
       
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 60 * 24 // 24 hrs
  }
}
