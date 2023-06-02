import styles from './Table.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Table({ funcaoDaTabela, data }) {
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
                        <td><FaTrashAlt className={styles.icon} /></td>
                    </tr>
                ))}                               
            </tbody>
        </table>
    )
}