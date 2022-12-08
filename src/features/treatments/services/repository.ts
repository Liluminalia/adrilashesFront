export interface RepositoryTreatments<T> {
    getAllTreatments: () => Promise<Array<T>>;
    getOneTreatment?: (treatmentId: string) => Promise<T>;
    addTreatment: (item: Partial<T>) => Promise<T>;
    updateTreatment: (item: Partial<T>, treatmentId: string) => Promise<T>;
    deleteTreatment: (treatmentId: string) => Promise<void>;
}
