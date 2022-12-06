export interface RepositoryUsers<T> {
    getAllUsers: () => Promise<Array<T>>;
    getOneUser?: (id: string) => Promise<T>;
    register: (item: Partial<T>) => Promise<T>;
    login: (item: Partial<T>) => Promise<T>;
    updateUserAppointment: (
        treatmentId: string,
        userId: string,
        discount: string
    ) => Promise<T>;
    addUserAppointment: (treatmentId: string) => Promise<T>;
    deleteUserAppointment: (treatmentId: string, userId: string) => Promise<T>;
}
