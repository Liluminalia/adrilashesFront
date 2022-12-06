import { UserI } from '../models/users';
import { RepositoryUsers } from './repository';

export class UserRepository implements RepositoryUsers<UserI> {
    url: string;
    constructor(url = '') {
        this.url = 'https://adrilashes.onrender.com/users';
    }

    #createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAllUsers(): Promise<Array<UserI>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.#createError(response);
        });
    }
    getOneUser(partialUser: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/${partialUser.id}`).then((response) => {
            if (response.ok) return response.json();
            throw this.#createError(response);
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
                if (response.ok) return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    login(user: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.#createError(response);
            })
            .catch((error) => {
                return error;
            });
    }

    updateUserAppointment(partialUser: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/${partialUser.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialUser),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.#createError(response);
        });
    }
    addUserAppointment(partialUser: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/${partialUser.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialUser),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.#createError(response);
        });
    }
    deleteUserAppointment(partialUser: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/${partialUser.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialUser),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.#createError(response);
        });
    }
}
