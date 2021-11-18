const { expect } = require('@jest/globals');
const fileExist = require('../fileExist')

describe('fileExist', () => {
    test('should show error input file doesn`t exist', () => {
        expect(() => fileExist('input1.txt', 'Input')).toThrowError(`Input file doesn't exist`)
    })

    test('should show error input file doesn`t exist', () => {
        expect(() => fileExist('output1.txt', 'Output')).toThrowError(`Output file doesn't exist`)
    })

    test('should show error input file doesn`t exist', () => {
        expect(() => fileExist('output.txt', 'Output'))
    })
    
})
