import { UserI } from '../models/users';

export interface RepositoryUsers {
    getAllUsers: () => Promise<Array<UserI>>;
    getOneUser?: (id: string) => Promise<UserI>;
    register: (item: Partial<UserI>) => Promise<UserI>;
    login: (item: Partial<UserI>) => Promise<{ user: UserI; token: string }>;
    updateUserAppointment: (
        treatmentId: string,
        userId: string,
        discount: string
    ) => Promise<UserI>;
    addUserAppointment: (treatmentId: string) => Promise<UserI>;
    deleteUserAppointment: (
        treatmentId: string,
        userId: string
    ) => Promise<UserI>;
}
