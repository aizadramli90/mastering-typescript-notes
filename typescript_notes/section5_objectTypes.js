// 25. OBJECT IN TYPESCRIPT
//Object type in TS can be typed by declaring what the object should look like in the annotation.
// Accessing property that isn't defined or performing operations without keeping types in mind will throw errors!
var dog = {
    name: "Elton", //object with varieties of data type
    breed: "German Shepherd",
    age: "4",
};
function printName(person) { }
;
printName({ first: 2 }); //Type 'number' is not assignable to type 'string'.ts(2322)
printName({ first: "Diego" });
// TYPE
function printName2(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
;
printName2({ first: "Abe Jad" }); //  Property 'last' is missing in type '{ first: string; }' but required in type '{ first: string; last: string; }'.ts(2345)
printName2({ first: "Abe Jad", last: "Ramli" });
/* -------------------------------------------------------------- */
// 26. MORE OBJECT TYPES
var coordinate = { x: 34, y: 2 }; // 2. Variable type object
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
/* -------------------------------------------------------------- */
// 27. Excess Properties                                                Boleh tambah properties baru yang tak defined dalam function?
printName2({ first: "Mick", last: "Jagger", age: 567 }); //Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; ADA ERROR!!
var singer = { first: "Mick", last: "Jagger", age: 567 }; //BUT WHEN DECLARED NEW VARIABLE TO THE OBJECT,
printName2(singer); //CALL THE FUNCTION WITH THE DECLARED VARIABLE AS THE PARAMETER, THERE IS NO ERROR
//Use the type alias in the annotation
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", happy ").concat(age, "'s birthday!");
};
sayHappyBirthday({ name: 'Mus', age: 34 });
// From #26
//FROM THIS METHOD
/* let coordinate: {x: number, y: number} = {x:34, y:2};                                                    // 2. Variable type object

function randomCoordinate(): {x: number; y: number} {                                                    // 3. Return Type Annotation
    return {x:Math.random(), y:Math.random()};
} */
/*
TO THIS
*/
var coordinate2 = { x: 34, y: 2 }; // 2. Variable type object
function randomCoordinate2() {
    return { x: Math.random(), y: Math.random() };
}
var mySong = {
    title: "Angin Kencang",
    artist: "Noh Salleh",
    numStreams: 78341124,
    credits: {
        producer: "Noh Salleh",
        writer: "Noh Salleh"
    }
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
;
var payment = calculatePayout(mySong);
console.log(payment);
