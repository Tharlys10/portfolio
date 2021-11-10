import { GetStaticProps } from "next"
import Image from 'next/image'
import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiExpress, SiGoland, SiJavascript, SiNestjs, SiNextdotjs, SiNuxtdotjs, SiPostgresql, SiRedis, SiSqlite, SiTypescript } from 'react-icons/si'
import { GrDocker, GrGraphQl } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
import ReactTooltip from 'react-tooltip'


import styles from '../styles/about.module.scss'

export default function About(){
  const my_age = Number(new Date().getFullYear()) - 2001;

  return (
    <div className={styles.container}>
      <div className={styles.contentInformation}>
        <Image src="/images/about.png" alt="About" width={750} height={500}/>

        <div className={styles.information}>
          <h1><span>&lt;</span>Tharlys Alves de Almeida<span>/&gt;</span></h1>
        
          <p>
            Tenho {my_age} anos, sou de São Miguel, interior do estado do 
            Rio Grande do Norte. Comecei a programar em 2017, no curso técnico 
            em informatica na E.E.E.P Professora Maria Celia Pinheiro Falcão, 
            que conclui em dezembro de 2019. Atualmente acadêmico em Análise e 
            Desenvolvimento de Sistema na Estácio e um alumni da Rocketseat 
            e atuando como desenvolvedor full stack na Brisanet Telecomunicações S.A.
          </p>

          <p>
            Sou apaixonado por desenvolvimento web, pricipalmente em 
            tecnologias que utilizam javascript, como ReactJS (NextJS), VueJS, 
            NodeJS e NestJS. Sempre estou em busca de novos desafios e 
            conhecimentos, seja em cursos ou em treinamentos.
          </p>
        </div>
      </div>
      
      <div className={styles.card}>
      <div className={styles.cardInformation}>
          <h2>Habilidades</h2>
          <span>
            Tecnologias que mais utilizo no
            meu ambiente profissional e nos
            meus estudos.
          </span>
        </div>

        <div className={styles.cardIcons}>
          <div className={styles.cardMin} data-tip="JavaScript">
            <SiJavascript size={30} />
          </div>
          <div className={styles.cardMin} data-tip="TypeScript">
            <SiTypescript size={30} />
          </div>
          <div className={styles.cardMin} data-tip="NodeJS">
            <FaNodeJs size={30} />
          </div>
          <div className={styles.cardMin} data-tip="ReactJS">
            <FaReact size={30} />
          </div>
          <div className={styles.cardMin} data-tip="NestJS">
            <SiNestjs size={30} />
          </div>
          <div className={styles.cardMin} data-tip="NextJS">
            <SiNextdotjs size={30} />
          </div>
          <div className={styles.cardMin} data-tip="Golang">
            <SiGoland size={30} />
          </div>
          <div className={styles.cardMin} data-tip="VueJS">
            <FaVuejs size={30} />
          </div>
          <div className={styles.cardMin} data-tip="NuxtJS">
            <SiNuxtdotjs size={30} />
          </div>
          <div className={styles.cardMin} data-tip="React Native">
            <FaReact size={30} />
          </div>
          <div className={styles.cardMin} data-tip="Postgres">
            <SiPostgresql size={30} />
          </div>
          <div className={styles.cardMin} data-tip="Docker">
            <GrDocker size={30} />
          </div>
          <div className={styles.cardMin} data-tip="Express">
            <SiExpress size={30} />
          </div>
          <div className={styles.cardMin} data-tip="GraphQL">
            <GrGraphQl size={30} />
          </div>
          <div className={styles.cardMin} data-tip="MongoDB">
            <DiMongodb size={30} />
          </div>
          <div className={styles.cardMin} data-tip="SQLite">
            <SiSqlite size={30} />
          </div>
          <div className={styles.cardMin} data-tip="Redis">
            <SiRedis size={30} />
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardIcons}>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
          <div className={styles.cardMin}></div>
        </div>

        <div className={styles.cardInformation}>
          <h2>Ferramentas</h2>
          <span>
            Principais ferramentas que utilizo
            no desenvolvimento de novos 
            projetos.
          </span>
        </div>
      </div>

      <ReactTooltip textColor="var(--white)" backgroundColor="var(--purple)"/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 60 * 24 // 24 hrs
  }
}
