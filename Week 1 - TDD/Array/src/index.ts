// demo code, you can test your code easily in this space by creating and manipulating your CustomList, 
// then using the provided Enumerate method to log all of the elements and values to the console.  To run
// this file, open the terminal and run tsc  then run npm start

import CustomList from "./CustomList";


const exampleList = new CustomList();

exampleList.Push(1);
exampleList.Push(2);
console.log(exampleList.Size());
exampleList.Enumerate();