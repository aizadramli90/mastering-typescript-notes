/* -------------------------------------------------------------- */
// TUPLES AND ENUMS

// TUPLES
// Special type exclusive to TS
// Arrays of fixed lengths and ordered with specific types - super rigid arrays
//Example

let myTuples: [number, string];
myTuples = [10, "Typescript"];
//myTuples = ["Typescript", 10]; //error

const color99: [number, number, number] = [255, 0 , 33];

type HTTPResponse = [number, string];
let goodRes: HTTPResponse = [200, "OK"];
//goodRes: Response = [200, "OK", 23];  //error
goodRes.push(111);      //No error?! that is the limitation in TS

/* -------------------------------------------------------------- */
//46. ENUMS
// ALLOW TO DEFINE A SET OF NAMED CONSTANT.
// We can give these constants numeric or string values.

enum OrderStatus {
    PENDING,            //(enum member) OrderStatus.PENDING = 0
    SHIPPED,            //(enum member) OrderStatus.SHIPPED = 1
    DELIVERED,          //(enum member) OrderStatus.DELIVERED = 2
    RETURNED            //(enum member) OrderStatus.RETURNED = 3
}  

const status2 = OrderStatus.DELIVERED;      //const status2: OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {         //order status can only be those 4 types: PENDING, SHIPPED, DELIVERED, RETURNED
    return status === OrderStatus.DELIVERED
};

isDelivered(OrderStatus.DELIVERED);

// ENUMS ARE DEFAULTLY VALUED STARTING AT 0
// BUT, WE CAN CUSTOMIZED IT.
// EXAMPLE:
enum OrderStatus2 {
    PENDING = 10,       //(enum member) OrderStatus.PENDING = 10
    SHIPPED,            //(enum member) OrderStatus.SHIPPED = 11
    DELIVERED,          //(enum member) OrderStatus.DELIVERED = 12
    RETURNED            //(enum member) OrderStatus.RETURNED = 13
}  
//ABOVE EXAMPLE, WE CUSTOMIZE THE PENDING TO START AT 10, THE FOLLOWING CONSTANT WILL THEN INCREASED THE VALUE BY 1

// ENUM CAN BE SET TO STRING TYPE:
const ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

//the values can be mixed types of data, not only strings

/* -------------------------------------------------------------- */
// 48. ENUMS BTS
//IN JS:
/* 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {})); 
*/

