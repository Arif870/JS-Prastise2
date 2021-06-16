// ### Object literal

let obj = {
    c: 20,
};
obj.d = 10;

//  ### Object Constructor

let obj2 = Object({
    c: 20,
});

let obj3 = new Object({
    c: 30,
});
obj3.c = 50;

console.log(obj);
console.log(obj2);
console.log(obj3);

let point = {
    x: 10,
    y: 20,
    z: 30,
};

delete point.x;

// objeect dot notation
console.log(point.z);
console.log(point.x + point.y);

//object array notation
console.log(point["x"]);
console.log(point["y"] + point["z"]);

let obj = {
    x: 10,
    y: 20,
};

console.log("x" in obj);
console.log("z" in obj);

let obj = new Object({
    x: 10,
    y: 20,
    z: 30,
});

let obj2 = Object.assign({}, obj);
obj2.x = 100;

console.log(obj);
console.log(obj2);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let date = new Date();

console.log(date.getFullYear());

function name(name) {
    console.log("My name is " + name);
}
name("Arif uz zaman");

let arr1 = [1, 2, 3];
let arr2 = [5, 10, 15];
let arr3 = [100, 200, 300];

let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
console.log(sum1);

let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}
console.log(sum2);

let sum3 = 0;
for (let i = 0; i < arr3.length; i++) {
    sum3 += arr3[i];
}
console.log(sum3);

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

let myArray = [10, 20, 30];
sumOfArray(myArray);

function person(name, email) {
    return {
        name: name,
        email: email,
    };
}

let p = person("Arif", "arif@gmail.com");
console.log(p);

// annonimoys function

let addition = function(a, b) {
    return a + b;
};
console.log(addition(10, 20));

setTimeout(function() {
    console.log("Arif");
}, 5000);

function greet(greet, name) {
    function say() {
        console.log(greet, name);
    }
    say();
}

greet("Hello", "Arif");

let something = function(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(" ")[0];
        } else {
            return " ";
        }
    }
    let message = greet + " " + getFirstName();
    console.log(message);
};
something("Welcome", "Arif uzzaman");

// pure function

function sqr(n) {
    return n * n;
}

console.log(sqr(2));

let mark = 30;
let exam = new Promise((resolve, reject) => {
    if (mark >= 33) {
        resolve("Passed");
    } else {
        reject("Failed");
    }
});

exam
    .then((res) => {
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej);
    });
