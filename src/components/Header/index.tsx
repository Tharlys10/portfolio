import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss';

function Header() {
  const router = useRouter()
  
  const { asPath } = router;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav>
          <Link href="/"><a className={asPath === '/' ? styles.active : ''}> Home</a></Link>
          <Link href="/about"><a className={asPath === '/about' ? styles.active : ''}>Sobre</a></Link>
          <a href="#">Projetos</a>
          <Link href="/contacts"><a className={asPath === '/contacts' ? styles.active : ''}>Contato</a></Link>
        </nav>

        <div>
          <Image 
            src="https://github.com/Tharlys10.png"
            alt="Avatar" 
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  )
}

export { Header }