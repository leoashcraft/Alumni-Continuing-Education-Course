import CustomList from '../src/CustomList';


// Push method
test('Given 1 element is pushed, the list size is one', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 1 element to the list
    customList.Push(5);
    // Then list size is one; 
    expect(customList.Size()).toBe(1);
})

// Push method
test('Given 2 elements are pushed, getLast() returns the second element', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 2 elements to the list
    customList.Push(5);
    customList.Push(6);
    // Then GetLast() returns 6; 
    expect(customList.GetLast()).toBe(6);
})

// Push method
test('Given 3 elements are added, size returns 3', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 3 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    // Then size method returns 3; 
    expect(customList.Size()).toBe(3);
})

// Size method
test('Given an list of 0 elements, size returns 0', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 0 elements to the list
    // Then size method returns 0; 
    expect(customList.Size()).toBe(0);
})

// Size method
test('Given an list of 4 elements, size returns 4', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // Then size method returns 4; 
    expect(customList.Size()).toBe(4);
})

// GetLast method
test('Given aa list of 0 elements, getLast returns -1', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 0 elements to the list
    // Then the GetLast() method returns -1
    expect(customList.GetLast()).toBe(-1);
})

// GetLast method
test('Given a list of 4 elements, getLast returns the last element', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // Then the GetLast() method returns 8
    expect(customList.GetLast()).toBe(8);
})

// GetElementAt method
test('Given a list of 3 elements, getElementAt(2) Last returns the last element', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 3 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    // Then the GetElementAt(3) method returns 7
    expect(customList.GetElementAt(2)).toBe(7);
})

// GetElementAt method
test('Given a list of 3 elements, getElementAt(-1) Last returns -1', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 3 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    // Then the GetElementAt(-1) method returns -1
    expect(customList.GetElementAt(-1)).toBe(-1);
})

// GetElementAt method
test('Given a list of 3 elements, getElementAt(5) Last returns -1', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 3 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    // Then the GetElementAt(5) method returns -1
    expect(customList.GetElementAt(5)).toBe(-1);
})

// GetElementAt method
test('Given a list of 0 elements, getElementAt(0) Last returns -1', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 0 elements to the list
    // Then the GetElementAt(0) method returns -1
    expect(customList.GetElementAt(0)).toBe(-1);
})

//Pop Method
test('Given a list of 0 elements, pop() returns -1', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 0 elements to the list
    // Then the Pop() method returns -1
    expect(customList.Pop()).toBe(-1);
})


//Pop Method
test('Given a list of 3 elements, pop() returns the third element', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 3 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    // Then the Pop() method returns 7
    expect(customList.Pop()).toBe(7);
})

//Pop Method
test('Given a list of 3 elements and I execute pop(), size() returns 2', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 3 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    // And I have called Pop()
    customList.Pop();
    // Then the Size() method returns 2
    expect(customList.Size()).toBe(2);
})

//Pop Method
test('Given a list of 0 elements, when I call pop(), then size() returns 0', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 0 elements to the list
    // And I call Pop() one time
    customList.Pop();
    // Then the Size() method returns 0
    expect(customList.Size()).toBe(0);
})

//InsertAt Method
test('Given a list of 4 elements and I InsertAt(2), GetELmenetAt(2) returns the inserted element', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I have inserted an element 3 at index 2
    customList.InsertAt(2,3);
    // Then the GetElementAt(2) method returns 3
    expect(customList.GetElementAt(2)).toBe(3);
})

//InsertAt Method
test('Given a list of 4 elements, InsertAt(2,3) returns true, ', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // Then the InsertAt(2,3) method returns true
    expect(customList.InsertAt(2,3)).toBe(true);
})

//InsertAt Method
test('Given a list of 1 elements, InsertAt(2,3) returns false, ', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 1 elements to the list
    customList.Push(5);
    // Then the InsertAt(2,3) method returns false
    expect(customList.InsertAt(2,3)).toBe(false);
})

//InsertAt Method
test('Given a list of 0 elements, InsertAt(-4,3) returns false, ', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 0 elements to the list
    // Then the InsertAt(-4,3) method returns true
    expect(customList.InsertAt(-4,3)).toBe(false);
})

//InsertAt Method
test('Given a list of 4 elements and I InsertAt(2,3), Size() returns 5', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I have inserted an element 3 at index 2
    customList.InsertAt(2,3);
    // Then the Size() method returns 5
    expect(customList.Size()).toBe(5);
})

//InsertAt Method
test('Given a list of 4 elements and I InsertAt(0.3), The first 4 elements are shifted backwards', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I have inserted an element 3 at index 0
    customList.InsertAt(0,3);
    // Then the GetElementAt(0) method returns 3
    expect(customList.GetElementAt(0)).toBe(3);
    // And the original 4 elements are shifted right one index
    expect(customList.GetElementAt(1)).toBe(5);
    expect(customList.GetElementAt(2)).toBe(6);
    expect(customList.GetElementAt(3)).toBe(7);
    expect(customList.GetElementAt(4)).toBe(8);
})

//RemoveAt Method
test('Given a list of 4 elements and I RemoveAt(0), GetElementAt(0) returns the 2nd inserted element', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I remove an element at index 0
    customList.RemoveAt(0);
    // Then the GetElementAt(0) method returns 6
    expect(customList.GetElementAt(0)).toBe(6);
})

//RemoveAt Method
test('Given a list of 4 elements RemoveAt(0), returns true', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // Then the RemoveAt(0) method returns true
    expect(customList.RemoveAt(0)).toBe(true);
})

//RemoveAt Method
test('Given a list of 4 elements RemoveAt(5), returns false', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // Then the RemoveAt(5) method returns false
    expect(customList.RemoveAt(5)).toBe(false);
})

//RemoveAt Method
test('Given a list of 4 elements, when I RemoveAt(0), size() returns 3', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I Remove the first element
    customList.RemoveAt(0);
    // Then the Size() method returns 3
    expect(customList.Size()).toBe(3);
})

//InsertAt Method
test('Given a list of 4 elements and I RemoveAt(0), The remaining 3 elements are shifted forward', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I have removed the first element
    customList.RemoveAt(0);
    // The remaining 3 elements are shifted left one index
    expect(customList.GetElementAt(0)).toBe(6);
    expect(customList.GetElementAt(1)).toBe(7);
    expect(customList.GetElementAt(2)).toBe(8);
})

//InsertAt Method
test('Given a list of 4 elements and I Remove the first index, index 3 is unoccupied', () => {
    // Given I am a user
    // And I have created a custom List
    const customList = new CustomList();
    // When I have added the following 4 elements to the list
    customList.Push(5);
    customList.Push(6);
    customList.Push(7);
    customList.Push(8);
    // And I have removed the first element
    customList.RemoveAt(0);
    // The the last index is unoccupied
    expect(customList.GetElementAt(3)).toBe(-1)

})

















