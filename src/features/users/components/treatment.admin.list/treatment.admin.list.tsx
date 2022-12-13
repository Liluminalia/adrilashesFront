/* eslint-disable jsx-a11y/anchor-is-valid */

import { TreatmentI } from '../../../treatments/models/treatments';
import { TreatmentAdminItem } from '../treatment.admin.item/treatment.admin.item';

export function TreatmentAdminList({ item }: { item: Array<TreatmentI> }) {
    const title = 'Tratamientos';

    return (
        <section className="treatmentlist">
            <div className="treatmentlist__title">
                <h2 className="treatmentlist__titulo">{title}</h2>
            </div>
            <div className="treatmentlist__container">
                <ul className="treatmentlist__list">
                    {item.map((item: TreatmentI) => (
                        <>
                            <TreatmentAdminItem
                                key={item.id + 2}
                                item={item}
                            ></TreatmentAdminItem>
                        </>
                    ))}
                </ul>
            </div>
        </section>
    );
}
