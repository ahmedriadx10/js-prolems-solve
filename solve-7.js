//Problem 40: The Library Inventory Summary

/**
 * ১. একটি ফাংশন তৈরি করো যা books অ্যারেকে ইনপুট হিসেবে নিবে। 
 * 
 * ২. তোমাকে এমন একটি অবজেক্ট রিটার্ন করতে হবে যেটিতে তিনটি তথ্য থাকবে: * totalBooks: লাইব্রেরিতে মোট কতটি বইয়ের এন্ট্রি আছে (অ্যারের দৈর্ঘ্য)। * availableBooks: যে বইগুলোর স্টক ০-এর বেশি আছে, তাদের মোট সংখ্যা। * totalStockValue: স্টক থাকা প্রতিটি বইয়ের (price * stock) যোগফল। 
 * 
 * ৩. আউটপুট অবজেক্টের ফরম্যাট হবে এরকম: { totalBooks: 5, availableBooks: 4, totalStockValue: 12300 } (সংখ্যাগুলো উদাহরণ মাত্র)।
 */



const books = [
    { title: 'JavaScript Hero', author: 'Riad', price: 500, stock: 12 },
    { title: 'Python Pro', author: 'Siam', price: 450, stock: 5 },
    { title: 'React Master', author: 'Arafat', price: 600, stock: 0 },
    { title: 'Node Ninja', author: 'Nabil', price: 550, stock: 8 },
    { title: 'CSS King', author: 'Tanvir', price: 300, stock: 15 }
];



 function InventorySummery(libararyData){


const returnData={

    totalBooks:libararyData.length,
    availableBooks:0,
    totalStockValue:0
}


for(const book of libararyData){

    //availableBooks will increase 1 when the if conditon will true such as stock grater than 0

if(book.stock>0){

   returnData.availableBooks++

   //increasing for every book 
   returnData.totalStockValue+=(book.price*book.stock)
}


}


return returnData





}

const result=InventorySummery(books)
// console.log(result)




// Problem 41: The Random Lucky Winner


// The Scenario: একটি শপিং মলে লটারি হচ্ছে। তোমার কাছে কাস্টমারদের নামের একটি অ্যারে আছে। তোমাকে এমন একটি ফাংশন লিখতে হবে যা প্রতিবার রান করলে র‍্যান্ডমলি (Randomly) একজন বিজয়ীর নাম রিটার্ন করবে।


/*
 * ১. একটি ফাংশন তৈরি করো যা customers অ্যারেকে ইনপুট হিসেবে নিবে। 


২. Math.random() এবং Math.floor() ব্যবহার করে অ্যারের ইনডেক্স অনুযায়ী একজন বিজয়ীকে খুঁজে বের করো। 

৩. আউটপুট হিসেবে একটি স্ট্রিং রিটার্ন করো: "Congratulations [Name], you won the lottery!"।
 */



const customers = ['Riad', 'Siam', 'Arafat', 'Nabil', 'Tanvir', 'Rony', 'Hasan'];


//inspire for me

//A true developer try fail learn again try 

// A best developer break down problem because every problem has more solution



function randomLuckySelector(customersData){

    // researched how to use Math.random() with range
const getLuckyWinner=Math.floor(Math.random()*customersData.length)

const luckyWinnerMessage='Congratutaion'.concat(' ',customersData[getLuckyWinner],' ','you won the lottery!!')

return luckyWinnerMessage
}


const result2=randomLuckySelector(customers)
// console.log(result2)



// 42 (Recap Challenge): The Date & Age Checker


/**
 * ১. একটি ফাংশন তৈরি করো যা এই user অবজেক্টকে ইনপুট হিসেবে নিবে।  
 * 
 * ২. জাভাস্ক্রিপ্টের Date Object ব্যবহার করে বর্তমান বছর (Current Year) বের করো। 
 * 
 * ৩. বর্তমান বছর থেকে birthYear বিয়োগ করে ইউজারের বয়স (Age) বের করো। 
 * 
 * ৪. আউটপুট হিসেবে একটি স্ট্রিং রিটার্ন করো: "Hello Riad, you are [age] years old."
 */


const user = {
    name: 'Riad',
    birthYear: 2002
};


function ageChecker(getUserData){

const presentDate=new Date()
const remainingYear=presentDate.getFullYear()

const userAge=remainingYear-getUserData.birthYear

const returnMessage='Hello'.concat(' ',getUserData.name,' ','you are',' ',userAge,' ','years old')

//I know that a sample but if i want to provide acurate result have to learn more about js date in sha allah when course flow will learn ourself

return returnMessage

}


const result3=ageChecker(user)
console.log(result3)



