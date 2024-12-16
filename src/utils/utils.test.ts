import {describe, expect, it} from "@jest/globals";
import {clearStringFromSpaces} from "./utils";

describe('clearStringFromSpaces util', () => {
    it('empty string', () => {
        expect(clearStringFromSpaces('')).toBe('');
    })

    it('no spaces string', () => {
        expect(clearStringFromSpaces('abc')).toBe('abc');
    })

    it('space with empty string', () => {
        expect(clearStringFromSpaces(' ')).toBe('');
    })

    it('start space with string', () => {
        expect(clearStringFromSpaces(' abc')).toBe('abc');
    })

    it('end space with string', () => {
        expect(clearStringFromSpaces('abc ')).toBe('abc ');
    })

    it('double end space with string', () => {
        expect(clearStringFromSpaces('abc  ')).toBe('abc ');
    })

    it('start space and double end space with string', () => {
        expect(clearStringFromSpaces(' abc  ')).toBe('abc ');
    })
})