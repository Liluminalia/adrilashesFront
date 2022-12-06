export interface RepositoryUsers<T> {
    getAllUsers: () => Promise<Array<T>>;
    getOneUser?: (item: Partial<T>) => Promise<T>;
    register: (item: Partial<T>) => Promise<T>;
    login: (item: Partial<T>) => Promise<T>;
    updateUserAppointment: (item: Partial<T>) => Promise<T>;
    addUserAppointment: (item: Partial<T>) => Promise<T>;
    deleteUserAppointment: (item: Partial<T>) => Promise<T>;
}
