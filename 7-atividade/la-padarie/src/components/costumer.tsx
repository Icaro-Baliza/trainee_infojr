import Image from 'next/image'
import styles from '../styles/costumer.module.css'
import { SyntheticEvent, useState } from 'react';

interface CostumerProps {
    id: number;
    name: string;
    breads: number;
    price: number;
}

const Costumer = ({name, breads, price, id} : CostumerProps) => {
    async function handleClick (){
        console.log("testeteste");
        console.log(id)
    
        await fetch('../api/orders/?id='+ id, {
            method: 'DELETE',
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.client}>
                <h1 className={styles.client__name}>{name}</h1>
                <div className={styles.client__cart}>
                    <div>    
                        <h2>Total de pães:</h2><p>{breads} pães</p>
                    </div> 
                    <div>
                        <h2>Total a pagar:</h2><p>R$ {(price).toFixed(2)}</p>
                    </div>     
                </div>
            </div>
            <Image 
            onClick={() => handleClick()}
            className={styles.trash}
            src="/icons/trash.svg"
            alt="icone de lixeira"
            width={24}
            height={25}
            />
        </div>
    )
}

export default Costumer;
