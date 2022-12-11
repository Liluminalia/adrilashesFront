import { TreatmentI } from '../../treatments/models/treatments';
export type RoleI = 'user' | 'admin';
export type ProtoUserI = {
    name?: string;
    email?: string;
    phone?: string;
    role?: RoleI;
    isVip?: boolean;
    appointments?: Array<Appointment>;
};

export type Appointment = {
    _id: TreatmentI;
    // treatmentId: TreatmentI;
    date?: Date;
    discount?: number;
};

export type UserI = {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: RoleI;
    isVip: boolean;
    appointments: Array<Appointment>;
};
