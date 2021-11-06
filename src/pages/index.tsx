import { GetStaticProps } from 'next'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
    Ok
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 60 * 24 // 24 hrs
  }
}
