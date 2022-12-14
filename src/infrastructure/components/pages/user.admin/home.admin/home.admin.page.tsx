import { Link } from 'react-router-dom';
import styles from './home.admin.module.css';
function HomeAdminPage() {
    return (
        <div className={styles.homeAdmin__container}>
            <h2 className={styles.homeAdmin__title}>
                Buenos dias Adriana, ¿que deseas hacer?
            </h2>
            <div className={styles.homeAdmin__todo}>
                <div>
                    <Link
                        className={styles.homeAdmin__options}
                        to={'/Appointments'}
                    >
                        gestionar citas
                    </Link>
                </div>
                <div>
                    <Link
                        className={styles.homeAdmin__options}
                        to={'/Treatments'}
                    >
                        gestionar tratamientos
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeAdminPage;
