import { useUsers } from '../../../users/hooks/users/useUsers';
import { TreatmentI } from '../../../treatments/models/treatments';
import Swal from 'sweetalert2';
import styles from './treatment.logged.item.module.css';
import { SyntheticEvent } from 'react';
export function TreatmentLoggedItem({ item }: { item: TreatmentI }) {
    const { handleAddAppointment } = useUsers();
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAddAppointment(item.id);
        Swal.fire(
            'Cita solicitada!',
            'Le llamare lo antes posible para darle una cita! Muchas gracias!',
            'success'
        );
    };
    return (
        <>
            <li className={styles.treatmentLogged__item}>
                <div>
                    <img
                        className={styles.treatmentLogged__itemImg}
                        src={item.img}
                        alt={item.title}
                        width="200"
                        height="200"
                    />
                </div>
                <div className={styles.treatmentLogged__title}>
                    {item.title}
                </div>
                <div>
                    <ul className={styles.treatmentLogged__itemInfoLogged}>
                        <li className={styles.treatmentLogged__price}>
                            Precio: {item.price}€
                        </li>
                        <li className={styles.treatmentLogged__time}>
                            Duración: {item.time}min.
                        </li>
                    </ul>
                </div>
                <button
                    className={styles.treatmentLogged__button}
                    onClick={handleClick}
                >
                    quiero cita
                </button>
            </li>
        </>
    );
}
