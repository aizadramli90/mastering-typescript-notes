// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean = 23;
highScore = false;
//highScore = "error" //Type '"error"' is not assignable to type 'number | boolean'.ts(2322)


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff : number[] | string[] = [];
stuff = [23, 34, 7, 89];
stuff = ["hello", "world"];
//stuff = ["hello", 23]; //error

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

let skillLevel: SkillLevel = "Beginner";
skillLevel = "Expert";
//skillLevel = "Newbies"          //Type '"Newbies"' is not assignable to type 'Skill'.ts(2322)


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
}

const student1 : SkiSchoolStudent = {
    name: "Aizad",
    age: 34,
    sport: "ski",
    level: "Beginner"
}
// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

type RgbColor = {
    r: number;
    g: number;
    b: number;
}

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HslColor = {
    h: number;
    s: number;
    l: number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors : (RgbColor | HslColor)[] = [];
//colors.push([23,545,223]);


// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (names: string | string[]) => {
    if(typeof names === "string") {
        console.log(`Hello ${names}`);
    } else {
        names.forEach(name => console.log(`Hello ${name}`))
    };
}

greet("aizad");
greet(["Aizad", "Hani", "Fana"]);