import { Link } from 'react-router-dom';
import { useUsers } from '../../../features/users/hooks/users/useUsers';
import { LoginButton } from '../login/login';
import { LogoutButton } from '../logout/logout';
import styles from './header.module.css';
export function Header() {
    const { user } = useUsers();
    const menu = [
        { id: '1', path: 'HomeAdmin', label: 'Home' },
        { id: '2', path: 'Appointments', label: 'Citas' },
        { id: '3', path: 'Treatments', label: 'Tratamientos' },
    ];

    return (
        <>
            <header className={styles.header}>
                <h1>
                    <Link to="/HomePage" className={styles.header__title}>
                        adri lashes
                    </Link>
                </h1>
                <div className={styles.header__user}>
                    {user.role === 'admin' ? (
                        <>
                            <nav>
                                <ul>
                                    {menu.map((item) => (
                                        <li key={item.id}>
                                            <Link to={item.path}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </>
                    ) : (
                        <></>
                    )}
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
