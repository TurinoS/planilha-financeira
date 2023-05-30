import styles from './CampoInput.module.css'

export default function CampoInput({ label, type, id, placeholder }) {
    return(
        <div className={styles.campo}>
            <label>{label}:</label>
            <input type={type} name={label} id={id} placeholder={placeholder} />
        </div>
    )
}