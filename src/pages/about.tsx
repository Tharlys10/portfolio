import { GetStaticProps } from "next"
import Image from 'next/image'

import styles from '../styles/about.module.scss'

export default function About(){
  const my_age = Number(new Date().getFullYear()) - 2001;

  return (
    <div className={styles.container}>
      <Image src="/images/about.png" alt="About" width={650} height={500}/>

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
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 60 * 24 // 24 hrs
  }
}
