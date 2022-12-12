/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTreatments } from '../../../treatments/hooks/useTreatments';
import { TreatmentI } from '../../../treatments/models/treatments';
import { TreatmentLoggedItem } from '../treatment.logged.item/treatment.logged.item';

export function TreatmentLoggedList() {
    const title =
        'Clica en cualquiera de los tratamientos y nos llegara una notificacion para darle cita!';
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
                            <TreatmentLoggedItem
                                key={item.id + 300}
                                item={item}
                            ></TreatmentLoggedItem>
                        </>
                    ))}
                </ul>
            </div>
        </section>
    );
}
