import { Link } from 'react-router-dom';
import { useUsers } from '../../../features/users/hooks/users/useUsers';
import { LoginButton } from '../login/login';
import { LogoutButton } from '../logout/logout';
import styles from './header.module.css';
export function Header() {
    const { user } = useUsers();

    return (
        <>
            <header className={styles.header}>
                <h1>
                    <Link to="/HomePage" className={styles.header__title}>
                        adri lashes
                    </Link>
                </h1>
                <div className={styles.header__user}>
                    {user.isLogged ? (
                        <div className={styles.header__logo}>
                            <LogoutButton />
                            <p className={styles.user__name}>
                                {user.user?.name}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.header__login}>
                            <LoginButton />
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
