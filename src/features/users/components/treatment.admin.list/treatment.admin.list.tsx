/* eslint-disable jsx-a11y/anchor-is-valid */

import { CreateTreatmentPage } from '../../../../infrastructure/components/pages/user.admin/treatments/create.treatment/create.treatment.page';
import { TreatmentI } from '../../../treatments/models/treatments';
import { TreatmentAdminItem } from '../treatment.admin.item/treatment.admin.item';
import styles from './treatment.admin.list.module.css';
export function TreatmentAdminList({ item }: { item: Array<TreatmentI> }) {
    const title = 'Tratamientos';

    return (
        <section className={styles.treatmentlist}>
            <div className={styles.treatmentlist__title}>
                <h2 className={styles.treatmentlist__titulo}>{title}</h2>
            </div>
            <div className={styles.treatmentlist__container}>
                <ul className={styles.treatmentlist__list}>
                    {item.map((item: TreatmentI) => (
                        <>
                            <TreatmentAdminItem
                                key={Math.random() * 10 + item.id}
                                item={item}
                            ></TreatmentAdminItem>
                        </>
                    ))}
                </ul>
            </div>
            <div>
                <CreateTreatmentPage />
            </div>
        </section>
    );
}
