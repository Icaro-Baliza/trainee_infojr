import Image from 'next/image'
import styles from '../styles/top.module.css'

interface BreadTotalProps {
    total: number;
}

const BreadTotal = ({total}: BreadTotalProps) => {
    return (
        
        <div className={styles.top__card}>
            <div className={styles.top__card__informations}>
                <p className={styles.top__card__description}>Pães vendidos</p>
                <p className={styles.top__card__variable}>{total}</p>
            </div>
            <Image 
            src="/icons/cart.svg"
            alt="icone de carrinho de compras"
            width={25}
            height={22}
            />
        </div>
    )
}

export default BreadTotal;