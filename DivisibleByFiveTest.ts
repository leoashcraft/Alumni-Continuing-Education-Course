import DivisibleByFive from '../src/DivisibleByFive';

const divisibleByFive = new DivisibleByFive();

test('given 5, return true', () => {
    // Given I am a user
    // When I input 5
    let testValue: number = 5;
    // Then I get back true
    expect(divisibleByFive.isDivisibleByFive(testValue)).toBe(true);
});

test('given 4, return false', () => {
    // Given I am a user
    // When I input 4
    let testValue: number = 4;
    // Then I get back true
    expect(divisibleByFive.isDivisibleByFive(testValue)).toBe(false);
});

test('given 10, return false', () => {
    // Given I am a user
    // When I input 10
    let testValue: number = 10;
    // Then I get back true
    expect(divisibleByFive.isDivisibleByFive(testValue)).toBe(true);
});



