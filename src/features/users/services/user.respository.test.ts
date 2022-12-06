import { UserRepository } from './user.repository';

describe('Given UserRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: UserRepository;
        const error = new Error('error');
        beforeEach(() => {
            service = new UserRepository();
        });

        test(`Then if I use service.getAllUsers() 
            it should return a Promise of an Array of User`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAllUsers();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then when something is not ok, if I use service.getAllUsers() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.getAllUsers();

            expect(error).toBeInstanceOf(Error);
        });
        test(`Then if I use service.getOneUser() 
            it should return a Promise of an Array of User`, async () => {
            const mockUser = {
                id: '54321',
                name: 'string',
                email: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.getOneUser(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
        test(`Then when something is not ok, if I use service.getOneUser() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.getOneUser('5d5d5');

            expect(error).toBeInstanceOf(Error);
        });
        test('then if i use service.register() it should return a Promise of the registered user', async () => {
            const mockUser = {
                name: 'string',
                password: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
        test('Then when something is not ok, if I use service.register() it should throw an error', async () => {
            const mockUser = {
                name: 'string',
                password: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockRejectedValue(Error),
            });
            await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
        test('then if i use service.login() it should return a token', async () => {
            const mockUser = {
                name: 'string',
                password: 'string',
            };
            const mockToken =
                '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGY2NDgwZjMxMWY5NzIzMTBlMGQwNSIsIm5hbWUiOiJhbmFJc2FiZWwiLCJyb2xlIjoidXNlciIsImlhdCI6MTY3MDM0ODU4MH0.ddXpshwpKA_t-iZDFQMez0VG5DpWLf3M4mD2ivFmys4"';
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockToken),
            });
            const result = await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockToken);
        });
        test('Then when something is not ok, if I use service.login() it should throw an error', async () => {
            const mockUser = {
                name: 'string',
                password: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockRejectedValue(Error),
            });
            await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
        test(`Then if I use service.addUserAppointment() 
            it should return a User`, async () => {
            const mockTreatment = {
                id: '635241',
                title: 'string',
                img: 'string',
                description: 'string',
                price: 15,
                time: 64,
            };
            const mockUser = {
                id: '54321',
                name: 'string',
                email: 'string',
                appointments: [mockTreatment],
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.addUserAppointment(mockTreatment.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
        test(`Then when something is not ok, if I use service.addUserAppointment() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.addUserAppointment('5d5d5');

            expect(error).toBeInstanceOf(Error);
        });
        test(`Then if I use service.updateUserAppointment() 
            it should return a User`, async () => {
            const mockTreatment = {
                id: '635241',
                title: 'string',
                img: 'string',
                description: 'string',
                price: 15,
                time: 64,
            };
            const mockUser = {
                id: '54321',
                name: 'string',
                email: 'string',
                appointments: [mockTreatment],
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.updateUserAppointment(
                mockTreatment.id,
                mockUser.id,
                '50'
            );
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
        test(`Then when something is not ok, if I use service.updateUserAppointment() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.updateUserAppointment(',', '5d5d5', '64');

            expect(error).toBeInstanceOf(Error);
        });
        test(`Then if I use service.deleteUserAppointment() 
            it should return a User`, async () => {
            const mockTreatment = {
                id: '635241',
                title: 'string',
                img: 'string',
                description: 'string',
                price: 15,
                time: 64,
            };
            const mockUser = {
                id: '54321',
                name: 'string',
                email: 'string',
                appointments: [],
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.deleteUserAppointment(
                mockTreatment.id,
                mockUser.id
            );
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
        test(`Then when something is not ok, if I use service.deleteUserAppointment() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            await service.deleteUserAppointment(',', '5d5d5');

            expect(error).toBeInstanceOf(Error);
        });
    });
});
