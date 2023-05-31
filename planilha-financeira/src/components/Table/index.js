import styles from './Table.module.css';

export default function Table({ funcaoDaTabela, data }) {
    return(
        <table className={styles.table}>

            <thead className={styles.table_header}>
                <tr>
                    <td>{funcaoDaTabela}</td>
                    <td>Valor</td>
                </tr>
            </thead>

            <tbody>
                {data.map((d) => (
                    <tr key={data.id} className={styles.table_row}>
                        <td>{d.nome}</td>
                        <td>{d.valor}</td>
                    </tr>
                ))}                               
            </tbody>
        </table>
    )
}