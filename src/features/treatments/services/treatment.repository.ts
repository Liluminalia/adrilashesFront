import { TreatmentI } from '../models/treatments';
import { RepositoryTreatments } from './repository';

export class TreatmentRepository implements RepositoryTreatments<TreatmentI> {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:7700/treatments';
    }
    getAllTreatments(): Promise<Array<TreatmentI>> {
        return fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((res) => res.treatments)
            .catch((error) => {
                return error;
            });
    }
    getOneTreatment(treatmentId: string): Promise<TreatmentI> {
        return fetch(`${this.url}/${treatmentId}`)
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
    addTreatment(treatment: Partial<TreatmentI>): Promise<TreatmentI> {
        return fetch(`${this.url}/create`, {
            method: 'POST',
            body: JSON.stringify(treatment),
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

    updateTreatment(
        treatment: Partial<TreatmentI>,
        treatmentId: string
    ): Promise<TreatmentI> {
        return fetch(`${this.url}/update/${treatmentId}`, {
            method: 'PATCH',
            body: JSON.stringify(treatment),
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
    deleteTreatment(treatmentId: string): Promise<void> {
        return fetch(`${this.url}/delete/${treatmentId}`, {
            method: 'DELETE',
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
}
