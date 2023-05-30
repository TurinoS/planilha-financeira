import CampoInput from '../CampoInput';
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
        console.log(receita)
    }

    const [receita, setReceita] = useState()
    const [valor, setValor] = useState("")

    function changeReceita(event) {
        setReceita(event.target.value)
    }

    return(
        <form onSubmit={adicionaNaPlanilha} className={styles.form}>
            <div className={styles.botoes}>
                <button onClick={mostrarFormReceita}>Adicionar receita</button>
                <button onClick={mostrarFormDespesa}>Adicionar despesa</button>
            </div>

            {
                showFormDespesa && !showFormReceita ? 
                <div className={styles.insideForm}>
                    <CampoInput  type='text' label='Despesa' placeholder="Nome da despesa" />
                    <CampoInput type='number' label='Valor' />
                    <input className={styles.btnr} type='submit' value='Adicionar despesa' />
                </div> 
                : null
            }
                        
            {
                showFormReceita && !showFormDespesa ? 
                <div className={styles.insideForm}>
                    <CampoInput onChange={changeReceita} type='text' label='Receita' placeholder="Nome da receita" />
                    <CampoInput type='number' label='Valor' />
                    <input className={styles.btng} type='submit' value='Adicionar receita' />
                </div> 
                : null
            }
        </form>
    )
}