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
    const menu2 = { id: '1', path: 'MakeAppointment', label: 'Citas' };

    return (
        <>
            <header className={styles.header}>
                <h1>
                    <Link to="/HomePage" className={styles.header__title}>
                        adri lashes
                    </Link>
                </h1>
                <div className={styles.header__user}>
                    {user.role === 'admin' && user.isLogged && (
                        <>
                            <nav className={styles.header__nav}>
                                <ul className={styles.header__fullMenu}>
                                    {menu.map((item) => (
                                        <li
                                            className={styles.header__menu}
                                            key={item.id}
                                        >
                                            <Link
                                                className={styles.menu__items}
                                                to={item.path}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className={styles.header__logo}>
                                <LogoutButton />
                                <p className={styles.user__name}>
                                    {user.user?.name}
                                </p>
                            </div>
                        </>
                    )}
                    {user.role === 'user' && user.isLogged && (
                        <>
                            <p className={styles.header__menu2} key={menu2.id}>
                                <Link
                                    className={styles.menu__items}
                                    to={menu2.path}
                                >
                                    {menu2.label}
                                </Link>
                            </p>
                            <div className={styles.header__logo}>
                                <LogoutButton />
                                <p className={styles.user__name}>
                                    {user.user?.name}
                                </p>
                            </div>
                        </>
                    )}
                    {!user.isLogged && (
                        <div className={styles.header__login}>
                            <LoginButton />
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
