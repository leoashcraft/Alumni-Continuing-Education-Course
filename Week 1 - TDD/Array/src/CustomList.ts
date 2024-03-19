export default class CustomList {
    private internalArray: number[];
    private lastIndex: number;

    constructor() {
        this.internalArray = new Array();
        this.lastIndex = -1;
    }

    // do not use any array methods from internal array
    // do not use array.splice, array.push, array.pop, etc. Do not use array.length
    // use internal array[] and pointers to manually add and remove elements.

    public Push(numberToAdd: number): void {
        // add a number at the end
        this.internalArray[this.lastIndex + 1] = numberToAdd;
        this.lastIndex++;
    }

    public InsertAt(insertionIndex: number, numberToAdd: number):boolean {
        // Insert an integer at a given index.  Do not overwrite elements
        // shift elements to the right.  If there is a successful insert, return true
        // If the insertion index is invalid, return false. 
        if (insertionIndex < 0 || insertionIndex > this.lastIndex) {
            return false;
        }

        for (let i = this.lastIndex + 1; i > insertionIndex; i--)
        {
            this.internalArray[i] = this.internalArray[i-1];
        }

        this.internalArray[insertionIndex] = numberToAdd;
        this.lastIndex++;
        return true;
    }
    
    public Size(): number {
        // return the size of the array
        return this.lastIndex+1;
    }

    public GetLast(): number {
        // return the last element without removing it
        // if there are no elements in the list, return -1
        if (this.lastIndex === -1) {
            return -1;
        } else {
            return this.internalArray[this.lastIndex];
        }
    }

    public GetElementAt(index: number): number {
        // return the element at a given index without removing it
        // if the index is invalid or if the element is undefined, return -1
        if (index < 0 || index > this.lastIndex) {
            return -1;
        }
        return this.internalArray[index];
    }

    public Pop(): number {
        // remove and return the last element in the list
        // if the list is empty, return negative one
        if (this.lastIndex < 0) {
            return -1;
        }
        return this.internalArray[this.lastIndex--];
    }

    public RemoveAt(removalIndex: number): boolean {
        // Remove an integer at a given index.  Shift elements to the left,
        // do not leave a hole in the list.  If there is a successful removal, return true
        // If the insertion index is invalid, return false. Hint: The last element at the end of
        // a list can be tricky in a removal, because you cannot set it back to undefined, as the 
        // array requires type integer.  It's okay for you to leave the value in the last slot or set to 
        // zero, as long as you don't break any of the other methods. For instance, if you have an array 
        // 1,2,3,4, and you remove element 2 at index one, your internal array might look like 1,2,4,4 or 
        // 1,2,4,0.  This is okay as long as you properly move the last index pointer forward and pass all of the tests.
        if (removalIndex < 0 || removalIndex > this.lastIndex) {
            return false;
        }

        for (let i = removalIndex; i <= this.lastIndex; i++)
        {
            this.internalArray[i] = this.internalArray[i+1];
        }
        this.lastIndex--;
        return true;
    }


    public Enumerate():void {
        for (let i = 0; i <= this.lastIndex; i++)
        {
            console.log(`The element at index ${i} is equal to value ${this.internalArray[i]}`)
        }
    }
}