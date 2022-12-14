import React from 'react';
import { useTreatments } from '../../../../../features/treatments/hooks/useTreatments';
import { TreatmentLoggedList } from '../../../../../features/users/components/treatment.logged.list/treatment.logged.list';
import styles from './make.appointment.module.css';
function MakeAppointmentPage() {
    const { treatments } = useTreatments();
    return (
        <div className={styles.appointments__container}>
            <h1 className={styles.appointments__title}>pida cita</h1>
            <TreatmentLoggedList item={treatments} />
        </div>
    );
}

export default MakeAppointmentPage;
