import { UserI } from '../models/users';
import { RepositoryUsers } from './repository';

export class UserRepository implements RepositoryUsers {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:7700/users';
    }
    getAllUsers(): Promise<{ users: UserI[] }> {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    getOneUser(id: string): Promise<UserI> {
        return fetch(`${this.url}/${id}`)
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    register(user: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    login(user: Partial<UserI>): Promise<{ token: string; user: UserI }> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    updateUserAppointment(
        treatmentId: string,
        userId: string,
        discount: string
    ): Promise<UserI> {
        return fetch(`${this.url}/${treatmentId}/${userId}/${discount}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    addUserAppointment(treatmentId: string): Promise<UserI> {
        return fetch(`${this.url}/appointments/add/${treatmentId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    deleteUserAppointment(treatmentId: string, userId: string): Promise<UserI> {
        return fetch(`${this.url}/${treatmentId}/${userId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
}
