import styles from './Table.module.css';
import TableRow from './TableRow'

export default function Table({ funcao }) {
    return(
        <table className={styles.table}>
            
            <tr className={styles.table_header}>
                <th>{funcao}</th>
                <th>Valor</th>
            </tr>

            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
        </table>
    )
}