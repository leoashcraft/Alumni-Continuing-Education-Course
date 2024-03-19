import DivisibleByThree from '../src/DivisibleByThree'

const divisibleByThree = new DivisibleByThree();

test('given 3, return true', () => {
    // Given I am a user
    // When I input 3
    let testValue: number = 3;
    // Then I get back true
    expect(divisibleByThree.isDivisibleByThree(testValue)).toBe(true);
});

test('given 2, return false', () => {
    // Given I am a user
    // When I input 2
    let testValue: number = 2;
    // Then I get back false
    expect(divisibleByThree.isDivisibleByThree(testValue)).toBe(false);
});

test('given 5, return false', () => {
    // Given I am a user
    // When I input 5
    let testValue: number = 5;
    // Then I get back false
    expect(divisibleByThree.isDivisibleByThree(testValue)).toBe(false);
});

test('given 6, return true', () => {
    // Given I am a user
    // When I input 6
    let testValue: number = 6;
    // Then I get back true
    expect(divisibleByThree.isDivisibleByThree(testValue)).toBe(true);    
});
