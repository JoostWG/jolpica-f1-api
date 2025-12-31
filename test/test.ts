/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Api, Driver } from '../src';

const api = new Api();

describe('Api', () => {
    test('Driver.ageAt', async () => {
        const driver = new Driver({
            dateOfBirth: '2010-11-25',
            driverId: '',
            familyName: '',
            givenName: '',
            nationality: '',
            url: '',
        }, api);

        expect(driver.ageAt(new Date('2025-12-31'))).toBe(15);
    });
});
