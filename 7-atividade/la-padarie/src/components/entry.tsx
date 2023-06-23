import Image from 'next/image'
import styles from '../styles/top.module.css'

interface EntryProps {
    total: number;
}

const Entry = ({total}: EntryProps) => {
    return (
        
        <div className={styles.top__card__final}>
            <div className={styles.top__card__informations}>
                <p className={styles.top__card__description__final}>Entrada</p>
                <p className={styles.top__card__variable__final}>R$ {total.toFixed(2)}</p>
            </div>
            <Image 
            src="/icons/money.svg"
            alt="icone de sifrão"
            width={12}
            height={22}
            />
        </div>
    )
}

export default Entry;