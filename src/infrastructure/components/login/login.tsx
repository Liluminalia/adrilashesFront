import { Link } from 'react-router-dom';
import styles from './login.module.css';
export function LoginButton() {
    return (
        <>
            <section className={styles.logo}>
                <Link to={'/Login'}>
                    <img
                        src="./assets/logo2.png"
                        alt="logo adri lashes"
                        width={200}
                        height={200}
                    />
                </Link>
            </section>
        </>
    );
}
