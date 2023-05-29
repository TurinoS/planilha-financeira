import styles from './Header.module.css';
import logo from '../../img/logo.png'

export default function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt='Logo da planilha' />
            <h1>Sua Planilha Financeira</h1>
        </header>
    )
}