import { useUsers } from '../../../features/users/hooks/users/useUsers';
import styles from './logout.module.css';
export function LogoutButton() {
    const { handleLogout } = useUsers();
    return (
        <>
            <section className={styles.logout}>
                <a
                    href="https://sarafloresfrontfinalproject202210.netlify.app"
                    onClick={handleLogout}
                >
                    <img
                        src="./assets/favicon3.png"
                        alt="logout adri lashes"
                        width={200}
                        height={150}
                    />
                </a>
            </section>
        </>
    );
}
