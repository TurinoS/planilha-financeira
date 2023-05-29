import styles from './Table.module.css';
import TableRow from '../TableRow'

export default function Table() {
    return(
        <table className={styles.table}>
            <tr>
                <th>Despesa</th>
                <th>Valor</th>
            </tr>
            <TableRow />
        </table>
    )
}