import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { TreatmentI } from '../models/treatments';
import { TreatmentRepository } from '../services/treatment.repository';
import { useTreatments } from './useTreatments';

jest.mock('../services/treatment.repository');

const mock1 = {
    price: 43,
};
const mock2 = {
    id: 'string',
    title: 'string',
    img: 'string',
    description: 'string',
    price: 53,
    time: 55,
};

describe('Given the hook', () => {
    let result: {
        current: {
            treatments: Array<TreatmentI>;
            handleAddTreatment: (newTreatment: Partial<TreatmentI>) => void;
            handleUpdateTreatment: (
                updateTreatment: Partial<TreatmentI>,
                treatmentId: string
            ) => void;
            handleDeleteTreatment: (treatment: TreatmentI) => void;
        };
    };

    beforeEach(() => {
        TreatmentRepository.prototype.getAllTreatments = jest
            .fn()
            .mockResolvedValue([mock2]);
        TreatmentRepository.prototype.addTreatment = jest
            .fn()
            .mockResolvedValue(mock2);
        TreatmentRepository.prototype.deleteTreatment = jest
            .fn()
            .mockResolvedValue(mock2);
        TreatmentRepository.prototype.updateTreatment = jest
            .fn()
            .mockResolvedValue(mock1);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useTreatments(), { wrapper }));
    });

    test('if we use HandleAdd should add a new item to the array of treatments', async () => {
        await waitFor(() => {
            result.current.handleAddTreatment(mock2);
            expect(result.current.treatments.at(-1)).toEqual(mock2);
        });
    });
    test('if we use HandleUpdate should change an item from the array of treatments', async () => {
        await waitFor(() => {
            result.current.handleUpdateTreatment(mock1, mock2.id);
            expect(result.current.treatments).toContain(mock2);
        });
    });
    test('if we use HandleDelete should delete an item from the array of treatments', async () => {
        await waitFor(() => {
            result.current.handleDeleteTreatment(mock2);
            expect(result.current.treatments).toEqual([]);
        });
    });
});
