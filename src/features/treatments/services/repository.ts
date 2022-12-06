export interface RepositoryTreatments<T> {
    getAllTreatments: () => Promise<Array<T>>;
    getOneTreatment?: (treatmentId: string) => Promise<T>;
    post: (item: Partial<T>) => Promise<T>;
    patch: (item: Partial<T>, treatmentId: string) => Promise<T>;
    delete: (treatmentId: string) => string;
}
