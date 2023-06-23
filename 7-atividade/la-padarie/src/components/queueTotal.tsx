import Image from 'next/image'
import styles from '../styles/top.module.css'

interface QueueTotalProps {
    total: number;
}

const QueueTotal = ({total}: QueueTotalProps) => {
    return (
        
        <div className={styles.top__card}>
            <div className={styles.top__card__informations}>
                <p className={styles.top__card__description}>Pessoas na fila</p>
                <p className={styles.top__card__variable}>{total}</p>
            </div>
            <Image 
            src="/icons/person.svg"
            alt="icone de pessoas"
            width={25}
            height={22}
            />
        </div>
    )
}

export default QueueTotal;