//FUNCTION PARAMETER ANNOTATION


function square(num) {
    return num * num;
}

square(2); //no poppup or error
square("hello") ////no poppup or error


/* this will just define the type as any */
/* have to avoid ANY type */

/* how to handle this? */
/*  */


//                      '  THIS added 
function square2(num: number) {
    num * num;
};

square2("test"); //Argument of type 'string' is not assignable to parameter of type 'number'
square2(false); //Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)

/* hover to the function parameter, the e */

function greet(person: string) {
    return `Hi ${person}`;
};

greet('Aizad'); //OK
greet(90) //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// We can have many parameter as we want
//we can set each parameter with specific data type.

const doSomething = (person:string, age: number, isFunny:boolean) => {};
doSomething('aizad', 34, false);
doSomething(23, "haha", "test"); //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
doSomething("Ejad") //Expected 3 arguments, but got 1.ts(2554)
doSomething("ejad", 43, 33, true) //Expected 3 arguments, but got 4.ts(2554)

/* -------------------------------------------------------------- */
//19. WORKING WITH DEFAULT PARAMETERS
function asd(num=10); //when the function was called without giving value to the parameters. the default value will be used


function greet(person: string = "stranger") {        //
    return `Hi ${person}!`;
};
greet() // "Hi stranger!"
/* -------------------------------------------------------------- */
//20. RETURN TYPE ANNOTATION
/* specify the type returned by a function. eventhough TypeScript can often infer this.
Explicit annotations is usually preferred
Annotation type are added after the function parameter list.
 */

const addNums = (x:number, y:number): number => {
    return x + y;
}
addNums(5,5); //const addNums: (x: number, y: number) => number ------- TS will know this function call will return number type

function randomly(num: number) { //function randomly(num: number): string | number -------will return number or string
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
};


const addNumber = (x: number, y:number): number => { //will return a number
    return x + y;
};


/* -------------------------------------------------------------- */
//21. ANONYMOUS FUNCTION CONTEXTUAL TYPING
// ANONYMOUS FUNCTION
// When Typescript can infer how an unnamed function is going to be called, 
// it can automatically infer its parameters' types
// Example:
const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
    return color.toFixed(); //Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?ts(2551)
                            //TS know how to map the array and determine what data type in the array.
});

/* -------------------------------------------------------------- */
//22. THE VOID TYPE
// A return type for functions that don't return anything - means this function is void of any data.
// TS can infer this very well but we can annotate the function with a void return explicitly
const annoyUser => (num: number): void => {     //explicitly annotated 
    for(let i=0; i<num; i++){
        alert('Hiiii')              //function alert(message?: any): void

    }
};

function printTwice(msg: string) {          //TS can automatically annotate as void
    console.log(msg);                       //function printTwice(msg: string): void

    console.log(msg);
    
}

/* -------------------------------------------------------------- */
//23. NEVER TYPE
// Values that NEVER occur.
//might use it  to annotate a function that always throws an exception, or a function that never finishes executing.
// WHAT DIFFERS NEVER WITH VOID?
// VOID returns null or undefined - still a value
// NEVER - a function doesn't even finish executing

//function that doesn't finish executing
const neverStop = () => {                           //const neverStop: () => never
    while(true) {
        console.log("I'm still going!");
    }
};

//function that throws an exception
const giveError = (msg: string): never => {         //const giveError: (msg: string) => never
    return undefined;
    throw new Error(msg);
}

const giveError2 = (msg: string) => {
    return undefined;
    throw new Error(msg);
}

