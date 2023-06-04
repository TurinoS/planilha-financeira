import { useEffect } from 'react';
import styles from './Table.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Table({ funcaoDaTabela, data, removeRow, submited }) {

    useEffect(() => {}, [submited])

    return(
        <table className={styles.table}>

            <thead className={styles.table_header}>
                <tr>
                    <td>{funcaoDaTabela}</td>
                    <td>Valor</td>
                    <td>Excluir</td>
                </tr>
            </thead>

            <tbody>
                {data.map((dados) => (
                    <tr key={dados.id} className={styles.table_row}>
                        <td>{dados.nome}</td>
                        <td>{dados.valor}</td>
                        <td>
                            <button onClick={() => removeRow(funcaoDaTabela, dados.id)} className={styles.icon}>
                                    <FaTrashAlt />
                            </button>
                        </td>
                    </tr>
                ))}                               
            </tbody>
        </table>
    )
}