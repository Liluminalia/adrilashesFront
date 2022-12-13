import { useTreatments } from '../../../../../features/treatments/hooks/useTreatments';
import { TreatmentAdminList } from '../../../../../features/users/components/treatment.admin.list/treatment.admin.list';

export function TreatmentsAdminPage() {
    const { treatments } = useTreatments();

    return (
        <div className="main">
            <TreatmentAdminList item={treatments} />
        </div>
    );
}
