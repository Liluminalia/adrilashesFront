import { TreatmentRepository } from './treatment.repository';

describe('Given TreatmentRepository Service', () => {
    describe('When we instantiate it', () => {
        const mockTreatment = {
            id: 'string',
            title: 'string',
            img: 'string',
            description: 'string',
            price: 555,
            time: 555,
        };
        let service: TreatmentRepository;
        const error = new Error('error');
        beforeEach(() => {
            service = new TreatmentRepository();
        });

        test(`Then if I use service.getAllTreatments() 
            it should return a Promise of an Array of Treatment`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAllTreatments();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then when something is not ok, if I use service.getAllTreatments() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.getAllTreatments();

            expect(error).toBeInstanceOf(Error);
        });
        test(`Then if I use service.getOneTreatment() 
            it should return a Promise of an Array of Treatment`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockTreatment),
            });
            const result = await service.getOneTreatment(mockTreatment.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockTreatment);
        });
        test(`Then when something is not ok, if I use service.getOneTreatment() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.getOneTreatment('5d5d5');

            expect(error).toBeInstanceOf(Error);
        });
        test('then if i use service.post() it should return a Promise of the created treatment', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockTreatment),
            });
            const result = await service.post(mockTreatment);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockTreatment);
        });
        test('Then when something is not ok, if I use service.post() it should throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockRejectedValue(Error),
            });
            await service.post(mockTreatment);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
        test(`Then if I use service.patch() 
            it should return a Treatment`, async () => {
            const updatedMock = {
                price: 123,
            };
            const updatedMockTreatment = {
                id: 'string',
                title: 'string',
                img: 'string',
                description: 'string',
                price: 123,
                time: 555,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(updatedMockTreatment),
            });
            const result = await service.patch(updatedMock, mockTreatment.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(updatedMockTreatment);
        });
        test(`Then when something is not ok, if I use service.patch() it should throw an error`, async () => {
            const updatedMock = {
                price: 123,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.patch(updatedMock, mockTreatment.id);

            expect(error).toBeInstanceOf(Error);
        });

        test(`Then if I use service.delete() 
            it should return a "Tu Tratamiento ha sido eliminado"`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest
                    .fn()
                    .mockResolvedValue('Tu Tratamiento ha sido eliminado'),
            });
            const result = await service.delete(mockTreatment.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual('Tu Tratamiento ha sido eliminado');
        });
        test(`Then when something is not ok, if I use service.delete() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.delete(mockTreatment.id);

            expect(error).toBeInstanceOf(Error);
        });
    });
});
