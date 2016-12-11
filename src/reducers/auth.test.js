import auth from './auth'
import deepFreeze from 'deep-freeze';

describe('authentication reducer', () => {
    it('should handle initial state', () => {
        const after = {
            authenticated: false,
            user: null
        };
        expect(
            auth(undefined, {})
        ).toEqual(after)
    })

    it('should handle SIGNED_IN', () => {

        const before = {};
        const after = {
            authenticated: true,
            user: { email: 'test@test.com' }
        };
        deepFreeze(before);
        expect (
            auth(before, {
                type: 'SIGNED_IN',
                user: { email: 'test@test.com' }
            })
        ).toEqual(after)
    })

    it('should handle SIGNED_OUT', () => {

        const before = {
            authenticated: true,
            user: { email: 'test@test.com' }
        };
        const after = {
            authenticated: false,
            user: null
        };
        deepFreeze(before);
        expect (
            auth(before, {
                type: 'SIGNED_OUT',
                user: { email: 'test@test.com' }
            })
        ).toEqual(after)
    })

});