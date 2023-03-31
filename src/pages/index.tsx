import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MercadoPagoPagamento from '@/components/MercadoPagoPagamento'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>CONVSP - EVENTOS</title>
        <meta name="description" content="Plataforma de eventos Convenção O Brasil Para Cristo São Paulo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Form Pagamento</h1>
        <MercadoPagoPagamento/>
      </main>
    </>
  )
}
