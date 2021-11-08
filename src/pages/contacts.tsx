import { GetStaticProps } from "next"
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin, FaRocket, FaWhatsapp } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

import styles from '../styles/contacts.module.scss'

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.contactsInformation}>
        <h1><span>&lt;</span>Contato<span>/&gt;</span></h1>

        <p>
          Espero que tenha gostado do meu portfólio.
          Caso queira entrar em contato, esses são os meios
          aonde posso ser encontrado.
        </p>

        <div>
          <span><FiMail size={20}/> E-mail</span><br/>
          tharlys2015c@gmail.com
        </div>

        <div>
          <span><FaWhatsapp size={20}/> WhatsAPP</span><br/>
          +55 (88) 99698-3791
        </div>

        <div>
          <span>Redes sociais</span>

          <div className={styles.socialNetworkIcons}>
            <FaGithub size={25}/>
            <FaLinkedin size={25}/>
            <FaInstagram size={25}/>
            <FaRocket size={25}/>
          </div>
        </div>
      </div>

      <Image src="/images/contact.png" alt="Contact" width={650} height={500}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 60 * 24 // 24 hrs
  }
}