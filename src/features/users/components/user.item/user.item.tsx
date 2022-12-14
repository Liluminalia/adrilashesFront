import { Appointment, UserI } from '../../models/users';
import styles from './user.item.module.css';

export function UserItem({ item }: { item: UserI }) {
    return (
        <>
            <li className={styles.userlist__item}>
                <div className={styles.userlist__item__listInfo}>
                    <ul className={styles.item__list}>
                        <li className={styles.item__info}>
                            <h3> {item.name}</h3>
                            <p className={styles.info__description}>
                                {item.email} tlf: {item.phone}
                            </p>
                            <ul className={styles.info__appointment}>
                                {item.appointments.map(
                                    (appointment: Appointment) => (
                                        <li
                                            className={
                                                styles.appointment__treatment
                                            }
                                            key={
                                                Math.random() * 10 +
                                                appointment._id.id
                                            }
                                        >
                                            {appointment._id.title} precio:{' '}
                                            {appointment._id.price} duracion:{' '}
                                            {appointment._id.time}
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}
