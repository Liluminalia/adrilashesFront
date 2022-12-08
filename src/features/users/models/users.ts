import { TreatmentI } from '../../treatments/models/treatments';

export type ProtoUserI = {
    name?: string;
    email?: string;

    phone?: string;
    role?: 'admin' | 'user';
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
    role: 'admin' | 'user';
    isVip: boolean;
    appointments: Array<Appointment>;
};
