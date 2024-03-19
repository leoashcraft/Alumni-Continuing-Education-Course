import { mock, instance, when, verify } from 'ts-mockito'
import FizzBuzzController from '../src/FizzBuzzController'
import DivisibleByThree from '../src/DivisibleByThree';
import DivisibleByFive from '../src/DivisibleByFive';

test('given isDivisibleByThree returns true, return Fizz', () => {
    const mockDivisibleByThree:DivisibleByThree = mock(DivisibleByThree);
    const instanceDivisibleByThree:DivisibleByThree = instance(mockDivisibleByThree);
    const mockDivisibleByFive:DivisibleByFive = mock(DivisibleByFive);
    const instanceDivisibleByFive:DivisibleByFive = instance(mockDivisibleByFive);
    const fizzBuzzController = new FizzBuzzController(instanceDivisibleByThree, instanceDivisibleByFive);

    // Given I am a user
    // When I input 3
    let testValue: number = 3;
    // and isDivisibleByThree returns true,
    when(mockDivisibleByThree.isDivisibleByThree(testValue)).thenReturn(true);
    // Then I get back 'Fizz'
    expect(fizzBuzzController.CalculateFizzBuzz(testValue)).toBe('Fizz')
});

test('given isDivisibleByThree and isDivisibleByThree return false, return Buzz', () => {
    const mockDivisibleByThree:DivisibleByThree = mock(DivisibleByThree);
    const instanceDivisibleByThree:DivisibleByThree = instance(mockDivisibleByThree);
    const mockDivisibleByFive:DivisibleByFive = mock(DivisibleByFive);
    const instanceDivisibleByFive:DivisibleByFive = instance(mockDivisibleByFive);
    const fizzBuzzController = new FizzBuzzController(instanceDivisibleByThree, instanceDivisibleByFive);
    
    // Given I am a user
    // When I input 7
    let testValue: number = 7;
    // and isDivisibleByThree returns False
    when(mockDivisibleByThree.isDivisibleByThree(testValue)).thenReturn(false);
    // and isDivisibleByFive returns true,
    when(mockDivisibleByFive.isDivisibleByFive(testValue)).thenReturn(false);
    // Then I get back number 7
    expect(fizzBuzzController.CalculateFizzBuzz(testValue)).toBe(7)
});

test('given isDivisibleByFive returns true, return Buzz', () => {
    const mockDivisibleByThree:DivisibleByThree = mock(DivisibleByThree);
    const instanceDivisibleByThree:DivisibleByThree = instance(mockDivisibleByThree);
    const mockDivisibleByFive:DivisibleByFive = mock(DivisibleByFive);
    const instanceDivisibleByFive:DivisibleByFive = instance(mockDivisibleByFive);
    const fizzBuzzController = new FizzBuzzController(instanceDivisibleByThree, instanceDivisibleByFive);
    
    // Given I am a user
    // When I input 5
    let testValue: number = 5;
    // and isDivisibleByThree returns False
    when(mockDivisibleByThree.isDivisibleByThree(testValue)).thenReturn(false);
    // and isDivisibleByFive returns true,
    when(mockDivisibleByFive.isDivisibleByFive(testValue)).thenReturn(true);
    // Then I get back 'Buzz'

    expect(fizzBuzzController.CalculateFizzBuzz(testValue)).toBe('Buzz')
});

test('given isDivisibleByThree returns true, isDivisbleByFive is not called. ', () => {
    const mockDivisibleByThree:DivisibleByThree = mock(DivisibleByThree);
    const instanceDivisibleByThree:DivisibleByThree = instance(mockDivisibleByThree);
    const mockDivisibleByFive:DivisibleByFive = mock(DivisibleByFive);
    const instanceDivisibleByFive:DivisibleByFive = instance(mockDivisibleByFive);
    const fizzBuzzController = new FizzBuzzController(instanceDivisibleByThree, instanceDivisibleByFive);

    // Given I am a user
    // When I input 3
    let testValue: number = 3;
    // and isDivisibleByThree returns true,
    when(mockDivisibleByThree.isDivisibleByThree(testValue)).thenReturn(true);
    // Then isDivisibleByThree is not called.
    fizzBuzzController.CalculateFizzBuzz(testValue)
    verify(mockDivisibleByFive.isDivisibleByFive(testValue)).never();
});



