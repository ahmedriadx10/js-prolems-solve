//simple js practice problem solve

// pb-6
const data = [10, 20, 30, 40, 50, 60];
const reverseData = [];
for (const x of data) {
    reverseData.unshift(x);
}
console.log(reverseData);

// pb-7
const text = "I am a proud student of Programming Hero";
function vowelCounter(usrData) {
    let count = 0;
let vowelLetters='aeiou'

for(const x of usrData){

  if(vowelLetters.includes(x.toLowerCase())){
    count++
  }

}

return count

}
console.log(vowelCounter(text));

// pb-8
function discountCalc(usrPrice) {
    if (usrPrice >= 1000) {
        const discount = (10 / 100) * usrPrice;
        const total = usrPrice - discount;
        return total;
    } else {
        return usrPrice;
    }
}
console.log(discountCalc(1500));

// pb-9
const friends = ["Riad", "Ahmed", "Ali", "Sajid", "Muna"];
let smallName = friends[0];
for (const f of friends) {
    if (f.length < smallName.length) {
        smallName = f;
    }
}
console.log(smallName);

// pb-10
const person = { name: "Riad Ahmed", age: 23, profession: "Learner", city: "Rajshahi" };
for (const p in person) {
    console.log('key:', p, 'value:', person[p]);
}

// pb-11
const temCelsius = 371.5;
function fahrenheitConv(usrCelTem) {
    const calcFahrenheit = (9 / 5 * usrCelTem) + 32;
    return calcFahrenheit;
}
const result11 = fahrenheitConv(temCelsius);
console.log(result11);

// pb-12
const shoppingCart = [
    { product: "Shirt", price: 1200, quantity: 2 },
    { product: "Pant", price: 1500, quantity: 1 },
    { product: "Shoe", price: 3000, quantity: 1 },
];
function totalCost(usrInp) {
    let totalCost = 0;
    for (const t of usrInp) {
        totalCost += t.price * t.quantity;
    }
    return totalCost;
}
const result12 = totalCost(shoppingCart);
console.log(result12);

// pb-13
const numbers = [12, 45, 78, 32, 9, 100, 57];
function evenNums(usrData) {
    const evenNumbers = [];
    for (const e of usrData) {
        if (e % 2 === 0) {
            evenNumbers.push(e);
        }
    }
    return evenNumbers;
}
const result13 = evenNums(numbers);
console.log(result13);

// pb-14
const dataStr = 'Hello Riad';
function repeater(usrStr, rep) {
    const repeatedStr = [];
    for (let i = 1; i <= rep; i++) {
        repeatedStr.push(usrStr);
    }
    const repeatedJoin = repeatedStr.join(' ');
    console.log(repeatedJoin);
}
repeater(dataStr, 10);

// pb-15
let year = 2100;
function checkLearYear(getYear) {
    if (getYear % 400 === 0) {
        return 'yes leap year';
    } else if (getYear % 4 === 0 && getYear % 100 !== 0) {
        return ' yes leap year';
    } else {
        return 'not leap year';
    }
}
const result15 = checkLearYear(year);
console.log(result15);