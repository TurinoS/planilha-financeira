import styles from './TableRow.module.css';

export default function TableRow() {
    return(
        <tr className={styles.table_row}>
            <td>Escola</td>
            <td>950,00</td>
        </tr>
    )
}