import styles from '../styles/modal.module.css'
import { SyntheticEvent, useState } from 'react';

interface ModalProps {
    showModal: boolean;
    closeModal: () => void;
}

export default function Modal ({showModal, closeModal } : ModalProps){
    const [name, setName] = useState("");
    const [breads, setBreads] = useState("")

    async function handleSubmit (e: SyntheticEvent){
        console.log("testeteste")
        e.preventDefault();
    
        await fetch('../api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                name: name,
                breads: parseInt(breads),
                bill: parseFloat(breads),
            })
        });
        setName("");
        setBreads("");
        closeModal();
    }

    if (showModal) {
        return (
            <section className={styles.window__modal}>
                <div className={styles.modal}>
                    <h1 className={styles.modal__title}>Adicionar pessoa a fila</h1>
                    <form onSubmit={handleSubmit} className={styles.modal__inputs}>
                        <input className='input__name' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome completo do cliente'/>
                        <input className='input__breads' value={breads} onChange={(e) => setBreads(e.target.value)} type='number' placeholder='Total de pães:'/>
                        <div className={styles.modal__buttons}>
                            <button type='submit' className={styles.button__send}>Enviar</button>
                            <button type='button' onClick={closeModal} className={styles.button__cancel}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </section>
            
        )
    }
}


