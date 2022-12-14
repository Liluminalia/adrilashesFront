import { Link } from 'react-router-dom';
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { TreatmentI } from '../../../treatments/models/treatments';
import styles from './treatment.admin.item.module.css';
export function TreatmentAdminItem({ item }: { item: TreatmentI }) {
    const { handleDeleteTreatment } = useTreatments();
    return (
        <>
            <li className={styles.treatmentAdminlist__item}>
                <div className={styles.item__info}>
                    <ul className={styles.item__infoList}>
                        <li className={styles.infoList__title}>{item.title}</li>
                    </ul>
                </div>
                <div>
                    <Link
                        className={styles.infoList__edit}
                        to={'/EditTreatment/' + item.id}
                    >
                        {' '}
                        Editar
                    </Link>
                </div>
                <button
                    className={styles.infoList__delete}
                    onClick={() => {
                        handleDeleteTreatment(item);
                    }}
                >
                    Eliminar
                </button>
            </li>
        </>
    );
}
