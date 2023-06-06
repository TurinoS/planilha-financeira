import styles from './Form.module.css';
import React, { useState } from 'react';

export default function Form({ setSubmited }) {

    const [showFormReceita, setShowFormReceita] = useState(true)
    const [showFormDespesa, setShowFormDespesa] = useState(false)

    const [nomeReceita, setNomeReceita] = useState()
    const [nomeDespesa, setNomeDespesa] = useState()
    const [valorReceita, setValorReceita] = useState()
    const [valorDespesa, setValorDespesa] = useState()
    
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

    function submitDespesa(e) {
        e.preventDefault()
        let novaDespesa = {
            nome: nomeDespesa,
            valor: valorDespesa
        }
        fetch('https://my-json-server.typicode.com/TurinoS/planilha-financeira-api/despesas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(novaDespesa),
        })
        .then(setSubmited(true))
        .catch(err => console.log(err))
    }

    function submitReceita(e) {
        e.preventDefault()
        let novaReceita = {
            nome: nomeReceita,
            valor: valorReceita
        }
        fetch('http://localhost:5000/receitashttps://my-json-server.typicode.com/TurinoS/planilha-financeira-api/receitas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(novaReceita),
        })
        .then(setSubmited(true))
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.form}>
            <div className={styles.botoes}>
                <button onClick={mostrarFormReceita}>Adicionar receita</button>
                <button onClick={mostrarFormDespesa}>Adicionar despesa</button>
            </div>

            {
                showFormDespesa && !showFormReceita ? 
                    <form onSubmit={submitDespesa} className={styles.insideForm}>
                        
                        <div className={styles.campo}>
                            <label htmlFor='despesa'>Despesa:</label>
                            <input 
                                required
                                type='text' 
                                name='despesa' 
                                id='despesa' 
                                placeholder='Nome da despesa...'
                                onChange={(e) => {
                                    setNomeDespesa(e.target.value)
                                    setSubmited(false)
                                }} 
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor='valor'>Valor:</label>
                            <input
                                required 
                                type='number' 
                                name='valor' 
                                id='valor' 
                                placeholder='Valor da despesa...'
                                onChange={(e) => {
                                    setValorDespesa(e.target.value)
                                    setSubmited(false)
                                }}  
                            />
                        </div>

                        <input className={styles.btnr} type='submit' value='Adicionar despesa' />
                    </form> 
                : null
            }
                        
            {
                showFormReceita && !showFormDespesa ? 
                    <form onSubmit={submitReceita} className={styles.insideForm}>
                        
                        <div className={styles.campo}>
                            <label htmlFor='receita'>Receita:</label>
                            <input 
                                required
                                type='text' 
                                name='receita' 
                                id='receita' 
                                placeholder='Nome da receita...'
                                onChange={(e) => setNomeReceita(e.target.value)}  
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor='valor'>Valor:</label>
                            <input 
                                required
                                type='number' 
                                name='valor' 
                                id='valor' 
                                placeholder='Valor da receita...' 
                                onChange={(e) => setValorReceita(e.target.value)}
                            />
                        </div>

                        <input className={styles.btng} type='submit' value='Adicionar receita' />
                    </form>
                : null
            }
        </div>
    )
}