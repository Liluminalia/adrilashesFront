/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTreatments } from '../../hooks/useTreatments';
import { TreatmentI } from '../../models/treatments';
import { TreatmentItem } from '../treatment.item/treatment.item';

export function TreatmentList() {
    const title = 'tratamientos disponibles';
    const { treatments } = useTreatments();

    return (
        <section className="treatmentlist">
            <div className="treatmentlist__title">
                <h2 className="treatmentlist__titulo">{title}</h2>
            </div>
            <div className="treatmentlist__container">
                <ul className="treatmentlist__list">
                    {treatments.map((item: TreatmentI) => (
                        <>
                            <TreatmentItem
                                key={item.id}
                                item={item}
                            ></TreatmentItem>

                            {/* <AddTreatment item={item}></AddTreatment> */}
                        </>
                    ))}
                </ul>
            </div>
        </section>
    );
}
