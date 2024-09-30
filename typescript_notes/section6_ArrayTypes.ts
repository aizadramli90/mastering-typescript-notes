/* -------------------------------------------------------------- */
// 34. WORKING WITH ARRAY
const activeUsers: [] = []    //okay for now
activeUsers.push("aizad")  //Argument of type 'string' is not assignable to parameter of type 'never'.

const activeUsers2: [] = []    //Type '[number]' is not assignable to type '[]'.
// can't be push element inside it, because it is always an empty array.


/* 
ARRAY TYPES
can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.
this only allow one data type.

*/
const activeUsers2 = [] //ANY array

const activeUsers3: string[] = ["aizad"] //type of array of string
activeUsers3.push(5); //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
activeUsers3.push("aisar");

const ageList: number[] = [56,655,43,45] // array of number


/* -------------------------------------------------------------- */
// 35. MORE ARRAY SYNTAX
/* 
USING BRACKETS
*/

let names: string[] = ["hello", "world"];
let ages: number[] = [32, 18];



// ALTERNATE SYNTAX

//string
let names2: Array<string> = ["hai", "dunia"];
//number
let umur: Array<number> = [44, 63];

//boolean
const bools: Array<boolean> = [];
const bools: boolean[] = [];

//adding alias type in array
type Point = {
    x: number,
    y: number,
};

const coords: Point[] = [];
coords.push({x: 34, y: 23});
coords.push({y: 23});               //Property 'x' is missing in type '{ y: number; }' but required in type 'Point'.ts(2345


/* -------------------------------------------------------------- */
// 36. MULTIDIMENSIONAL ARRAY

// 2 dimensional array nested array inside an array
const board: string[][] = [['x', 'o', 'x'], ['x', 'o', 'x'],['x', 'o', 'x']];

const demo: number[][][] = [[[2]]];

