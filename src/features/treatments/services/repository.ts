import { TreatmentI } from '../models/treatments';

export interface RepositoryTreatments {
    getAllTreatments: () => Promise<{ treatments: Array<TreatmentI> }>;
    getOneTreatment?: (treatmentId: string) => Promise<TreatmentI>;
    addTreatment: (item: Partial<TreatmentI>) => Promise<TreatmentI>;
    updateTreatment: (
        item: Partial<TreatmentI>,
        treatmentId: string
    ) => Promise<TreatmentI>;
    deleteTreatment: (treatmentId: string) => Promise<void>;
}
