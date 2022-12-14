/* eslint-disable jsx-a11y/anchor-is-valid */
import { TreatmentI } from '../../../treatments/models/treatments';
import { TreatmentLoggedItem } from '../treatment.logged.item/treatment.logged.item';
import styles from './treatment.logged.list.module.css';
export function TreatmentLoggedList({ item }: { item: Array<TreatmentI> }) {
    return (
        <section className={styles.treatmentLogged__container}>
            <div className="treatmentlist__container">
                <ul className={styles.treatmentlist__list}>
                    {item.map((item: TreatmentI) => (
                        <>
                            <TreatmentLoggedItem
                                key={item.price.toString()}
                                item={item}
                            ></TreatmentLoggedItem>
                        </>
                    ))}
                </ul>
            </div>
        </section>
    );
}
