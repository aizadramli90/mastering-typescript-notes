// 25. OBJECT IN TYPESCRIPT
//Object type in TS can be typed by declaring what the object should look like in the annotation.
// Accessing property that isn't defined or performing operations without keeping types in mind will throw errors!

const dog = {
    name: "Elton",                  //object with varieties of data type
    breed: "German Shepherd",
    age: "4",
}

function printName(person: {first: string}) {};
printName({first: 2});              //Type 'number' is not assignable to type 'string'.ts(2322)
printName({first: "Diego"});        
                                                                                                         // TYPE
function printName2(person: {first: string, last: string}) {                                             //1. Parameter Type
    console.log(`${person.first} ${person.last}`);
    
};
printName2({first: "Abe Jad"})     //  Property 'last' is missing in type '{ first: string; }' but required in type '{ first: string; last: string; }'.ts(2345)
printName2({first: "Abe Jad", last: "Ramli"})

/* -------------------------------------------------------------- */
// 26. MORE OBJECT TYPES
let coordinate: {x: number, y: number} = {x:34, y:2};                                                    // 2. Variable type object

function randomCoordinate(): {x: number; y: number} {                                                    // 3. Return Type Annotation
    return {x:Math.random(), y:Math.random()};
}


/* -------------------------------------------------------------- */
// 27. Excess Properties                                                Boleh tambah properties baru yang tak defined dalam function?
printName2({first: "Mick", last: "Jagger", age: 567}) //Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; ADA ERROR!!
const singer = {first: "Mick", last: "Jagger", age: 567}    //BUT WHEN DECLARED NEW VARIABLE TO THE OBJECT,
printName2(singer);             //CALL THE FUNCTION WITH THE DECLARED VARIABLE AS THE PARAMETER, THERE IS NO ERROR
//HOVER OVER THE parameter
/* const singer: {
    first: string;
    last: string;
    age: number;
} */


/* -------------------------------------------------------------- */
// 28. Type Alias
// Object types are declared seperately
// The desired shape of object are can be declared as this
// Make the code more readable & the types can be reused elsewhere in our code.


//EXAMPLE 1
// A type alias
type Person = {
    name: string;
    age: number;
};

//Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, happy ${age}'s birthday!`;
};

sayHappyBirthday({name: 'Mus', age:34});

//EXAMPLE 2
type Point = {
    x: number;
    y: number;
}

// From #26
//FROM THIS METHOD
/* let coordinate: {x: number, y: number} = {x:34, y:2};                                                    // 2. Variable type object

function randomCoordinate(): {x: number; y: number} {                                                    // 3. Return Type Annotation
    return {x:Math.random(), y:Math.random()};
} */

/* 
TO THIS
*/
let coordinate2: Point = {x:34, y:2};                                                    // 2. Variable type object

function randomCoordinate2(): Point {                                                    // 3. Return Type Annotation
    return {x:Math.random(), y:Math.random()};
}



/* -------------------------------------------------------------- */
// 29. NESTED OBJECT

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string
    }
};

const mySong: Song =
{
    title: "Angin Kencang",
    artist: "Noh Salleh",
    numStreams: 78341124,
    credits: {
        producer: "Noh Salleh",
        writer: "Noh Salleh"
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
};

const payment = calculatePayout(mySong);
console.log(payment);

/* -------------------------------------------------------------- */
// 30. OPTIONAL PROPERTIES
// making optional properties
// won't be an error when we missed any of the properties

type Point2 = {
    x: number;
    y:number;
    z?: number;                 //z will be optional with the question mark
};

const myPoint2: Point2 = {x:1, y:3};
//hover
/* type Point2 = {
    x: number;
    y: number;
    z?: number | undefined;
} */


/* -------------------------------------------------------------- */
// 31. READONLY MODIFIER
// 'readonly' keyword
// Mark certain properties in an object or once we get to arrays, classes.
// we can mark properties in an object as read only.
// TS will warn us if we try to change the properties
//

//Example
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 1234,
    username: "batman"
}

console.log(user.id);
user.id = 444222;                   //Cannot assign to 'id' because it is a read-only property.ts(2540)

/* -------------------------------------------------------------- */
// 32. INTERSECTION TYPES
// We can have multiple types and combine the using and AMPERSAND.
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

cosnt happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
};
type Dog = {
    breed: string;
}

type CatDog = Cat & Dog & {                 //add new tyep of both combination
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}