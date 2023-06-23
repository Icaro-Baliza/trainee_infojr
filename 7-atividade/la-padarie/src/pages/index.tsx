import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import QueueTotal from '@/components/queueTotal'
import BreadTotal from '@/components/breadTotal'
import Modal from '@/components/modal'
import Entry from '@/components/entry'
import Costumer from '@/components/costumer'
import { GetServerSideProps, GetStaticProps } from 'next'
import {getAllOrders, Order} from "../lib/db"
import {useEffect } from "react";

export default function Home() {
  const[showModal,  setShowModal] = useState(false)
  const[breadAmount, setBreadAmount] = useState(0);
  const[billAmount, setBillAmount] = useState(0);
  const [orders, setOrders] = useState<Order[]>([]);

  function openModal() {
    setShowModal(true);
  }
  useEffect(() => {
    async function getOrders() {
      const req = await fetch('../api/orders', {
        method: "GET",
      })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)
      })
    }
    getOrders();
  })

  useEffect(() => {
    let amount = 0;
    for (let i of orders){
      amount = (amount + i.breads);
    }
    setBillAmount(amount*0.5);
    
  }, [orders]);
  
  useEffect(() => {

    let amount = 0;
    for (let i of orders){
      amount = amount + i.breads;
    }
    setBreadAmount(amount);
  }, [orders])

 

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Com (coração) Info Jr UFBA 2022" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.body__container}>
        <header className={styles.header}>
          <Image 
            src="/images/logo.svg"
            alt="Logo la padarie"
            width={155}
            height={115}
          />
        </header>
        <main>
          <section className={styles.top}>
            <QueueTotal total={orders.length} />
            <BreadTotal total={breadAmount} />
            <Entry total={billAmount} />
          </section>
          <section className={styles.queue}>
            <button onClick={() => setShowModal(true)} className={styles.button__show__modal}>+ Adicionar pessoa a fila</button>
            
            {
              orders.map((item) => (
                <div key={item.id} className='queue__client'>
                  <Costumer name={item.name} breads={item.breads} price={item.breads * 0.5} id={item.id}/>
                </div>
              ))
            }
            
          </section>
        </main>
        <footer className={styles.footer}>
          <p className={styles.footer__text}>Com 💛 Info Jr UFBA 2022</p>
        </footer>
      </div>
      <div className={styles.form}>
        <Modal showModal={showModal} closeModal={() => setShowModal(false)}/>
      </div>
    </>
  )
}