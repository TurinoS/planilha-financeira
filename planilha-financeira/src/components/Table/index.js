import styles from './Table.module.css';

export default function Table({ funcaoDaTabela }) {
    return(
        <table className={styles.table}>

            <thead className={styles.table_header}>
                <tr>
                    <td>{funcaoDaTabela}</td>
                    <td>Valor</td>
                </tr>
            </thead>

            <tbody>
                <tr className={styles.table_row}>
                    <td>Escola</td>
                    <td>950,00</td>
                </tr>
                <tr className={styles.table_row}>
                    <td>Escola</td>
                    <td>950,00</td>
                </tr>
                <tr className={styles.table_row}>
                    <td>Escola</td>
                    <td>950,00</td>
                </tr>
                <tr className={styles.table_row}>
                    <td>Escola</td>
                    <td>950,00</td>
                </tr>
            </tbody>
        </table>
    )
}