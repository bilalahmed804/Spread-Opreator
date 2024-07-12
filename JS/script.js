// 1:Coping in Array 

let arr1 = ["bilal" , "ahmed"];

let arr2 = [...arr1]

console.log(arr2);

// 2:combining Array

let arr11 = [11,22,33,44,55];

let arr22 = [66,77,88,99,100];

let combiningArray = [...arr11,...arr22];

combiningArray[2] = "Hello WOrld";


console.log(arr11);
console.log(combiningArray);

// 3: Spreading in Function Arguments

let number = [1,2,3,4];

let add = (a,b,c,d) => a + b + c + d ;

console.log(add(...number));

//4: Copying an Object
let obj1 = {
    a: "Bilal",
    b: "Ahmed"
}
let obj2 = {...obj1};

obj2.a = "Ahemd";

console.log(obj1);

console.log(obj2);

// 5:Combining Objects

let objOne = {a:22, b:33, c:44}

let objTow = {d:55 , e:66, f:77}

let combiningObj = {...objOne , ...objTow};

console.log(combiningObj);

// 6:Adding Properties to an Object

let obj11 = {a1:"AA" , b2: "BB"};

let newObj = {...obj11,c3:"CC"}

console.log(newObj);

// 7:Converting a String to an Array

let string = "Hello";

let inToAdd = [...string]

console.log(inToAdd);

// 8:do array ko ek array me convert kiya or us ek array me value add ki h

let rr1 = [1,1,1,1]

let rr2 = [2,2,2,2]

let oneArr = [...rr1, ...rr2 , 3,3,3]

console.log(oneArr);

// 9:Using Spread in Array Destructuring

let arrDes = [1,2,3,4,5]

let [first , ...num] = arrDes;

console.log(first);
console.log(num);