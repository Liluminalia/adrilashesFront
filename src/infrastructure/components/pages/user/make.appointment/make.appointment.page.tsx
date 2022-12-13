import React from 'react';
import { useTreatments } from '../../../../../features/treatments/hooks/useTreatments';
import { TreatmentLoggedList } from '../../../../../features/users/components/treatment.logged.list/treatment.logged.list';

function MakeAppointmentPage() {
    const { treatments } = useTreatments();
    return (
        <div className="main">
            <TreatmentLoggedList item={treatments} />
        </div>
    );
}

export default MakeAppointmentPage;
