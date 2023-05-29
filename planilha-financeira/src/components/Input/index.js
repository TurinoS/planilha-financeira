import styles from './Input.module.css'

export default function Input({ label, type, id }) {
    return(
        <div className={styles.campo}>
            <label>{label}</label>
            <input type={type} name={label} id={id} />
        </div>
    )
}