import Image from 'next/image'

import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </nav>

        <div>
          <Image 
            src="https://github.com/Tharlys10.png"
            alt="Avatar" 
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}

export { Header }