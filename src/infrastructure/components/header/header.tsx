import { LoginButton } from '../login/login';
import styles from './header.module.css';
export function Header() {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__title}>adri lashes</h1>
                <LoginButton></LoginButton>
            </header>
        </>
    );
}
