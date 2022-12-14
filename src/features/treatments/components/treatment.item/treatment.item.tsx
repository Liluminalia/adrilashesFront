import { Link } from 'react-router-dom';
import { TreatmentI } from '../../models/treatments';
import styles from './treatment.item.module.css';

export function TreatmentItem({ item }: { item: TreatmentI }) {
    return (
        <>
            <li className={styles.treatmentlist__item}>
                <div>
                    <Link
                        to={'/treatments/' + item.id}
                        key={Math.random() * 10 + item.id}
                    >
                        <img
                            className={styles.treatmentlist__item__img}
                            src={item.img}
                            alt={item.title}
                            width="300"
                        />
                    </Link>
                </div>
                <div className={styles.treatmentlist__item__listInfo}>
                    <ul className={styles.item__list}>
                        <li className={styles.item__info}>
                            <h3> {item.title}</h3>
                            <p className={styles.info__description}>
                                {item.description}
                            </p>
                            <p className={styles.info__price}>
                                Precio: {item.price} Duración:{item.time}min.
                            </p>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}
