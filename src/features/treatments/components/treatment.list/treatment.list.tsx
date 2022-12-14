/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTreatments } from '../../hooks/useTreatments';
import { TreatmentI } from '../../models/treatments';
import { TreatmentItem } from '../treatment.item/treatment.item';
import styles from './treatment.list.module.css';
export function TreatmentList() {
    const title =
        'Realizamos tratamientos estetico faciales, inicia sesion para pedir cita!';
    const { treatments } = useTreatments();

    return (
        <section className={styles.treatmentlist}>
            <div className="treatmentlist__title">
                <h2 className={styles.treatmentlist__titulo}>{title}</h2>
            </div>
            <div className={styles.treatmentlist__container}>
                <ul className={styles.treatmentlist__list}>
                    {treatments.map((item: TreatmentI) => (
                        <>
                            <TreatmentItem
                                key={Math.random() * 10 + item.id}
                                item={item}
                            ></TreatmentItem>
                        </>
                    ))}
                </ul>
            </div>
        </section>
    );
}
