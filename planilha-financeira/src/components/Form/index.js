import styles from './Form.module.css';
import React, { useState } from 'react';

export default function Form() {

    const [showFormDespesa, setShowFormDespesa] = useState(false)
    const [showFormReceita, setShowFormReceita] = useState(true)
    

    function mostrarFormDespesa(e) {
        e.preventDefault();
        setShowFormDespesa(true);
        setShowFormReceita(false);
    }

    function mostrarFormReceita(e) {
        e.preventDefault();
        setShowFormReceita(true);
        setShowFormDespesa(false);
    }

    function adicionaNaPlanilha(e) {
        e.preventDefault();
        console.log(nomeReceita)
        console.log(nomeDespesa);
        console.log(valor)
    }

    const [nomeReceita, setNomeReceita] = useState()
    const [nomeDespesa, setNomeDespesa] = useState()
    const [valor, setValor] = useState()

    return(
        <form onSubmit={adicionaNaPlanilha} className={styles.form}>
            <div className={styles.botoes}>
                <button onClick={mostrarFormReceita}>Adicionar receita</button>
                <button onClick={mostrarFormDespesa}>Adicionar despesa</button>
            </div>

            {
                showFormDespesa && !showFormReceita ? 
                    <div className={styles.insideForm}>
                        
                        <div className={styles.campo}>
                            <label htmlFor='despesa'>Despesa:</label>
                            <input onChange={(e) => setNomeDespesa(e.target.value)} type='text' name='despesa' id='despesa' placeholder='Nome da despesa...' />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor='valor'>Valor:</label>
                            <input onChange={(e) => setValor(e.target.value)} type='number' name='valor' id='valor' placeholder='Valor da despesa...' />
                        </div>

                        <input className={styles.btnr} type='submit' value='Adicionar despesa' />
                    </div> 
                : null
            }
                        
            {
                showFormReceita && !showFormDespesa ? 
                    <div className={styles.insideForm}>
                        
                        <div className={styles.campo}>
                            <label htmlFor='receita'>Receita:</label>
                            <input  onChange={(e) => setNomeReceita(e.target.value)} type='text' name='receita' id='receita' placeholder='Nome da receita...' />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor='valor'>Valor:</label>
                            <input onChange={(e) => setValor(e.target.value)} type='number' name='valor' id='valor' placeholder='Valor da receita...' />
                        </div>

                        <input className={styles.btng} type='submit' value='Adicionar receita' />
                    </div>
                : null
            }
        </form>
    )
}