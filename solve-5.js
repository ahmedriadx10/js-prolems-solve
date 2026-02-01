/**
 * ১. একটি ফাংশন লেখো যা এই products অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 * ২. কন্ডিশনগুলো হলো: * যদি discountCode থাকে 'SAVE10', তবে দামের ওপর ১০% ডিসকাউন্ট হবে। * যদি discountCode থাকে 'SAVE5', তবে ৫% ডিসকাউন্ট হবে। * যদি 'NONE' থাকে, তবে কোনো ডিসকাউন্ট হবে না।
 *
 *
 * ৩. আউটপুটে একটি নতুন অ্যারে রিটার্ন করো যেখানে প্রতিটি পণ্যের জন্য finalPrice (ডিসকাউন্ট দেওয়ার পরের দাম) থাকবে।
 */

const products = [
  { name: "Laptop", price: 80000, discountCode: "SAVE10" },
  { name: "Phone", price: 40000, discountCode: "NONE" },
  { name: "Watch", price: 15000, discountCode: "SAVE10" },
  { name: "Headphone", price: 5000, discountCode: "SAVE5" },
  { name: "Monitor", price: 20000, discountCode: "NONE" },
];

function discountCalc(productsData) {
  const newProductsData = structuredClone(productsData);

  //discout with percentage
  const discount_10 = 10 / 100;
  const discount_5 = 5 / 100;
  const code_10 = "SAVE10";
  const code_5 = "SAVE5";

  for (const d of newProductsData) {
    if (d.discountCode === code_10) {
      const calcDiscount = d.price * discount_10;
      d.finalPrice = d.price - calcDiscount;
    } else if (d.discountCode === code_5) {
      const calcDiscount = d.price * discount_5;
      d.finalPrice = d.price - calcDiscount;
    } else {
      // for organize all new object data as if it looks clean
      d.finalPrice = "No discount code yet";
    }
  }

  return newProductsData;
}

const result = discountCalc(products);
// console.log(result)

/**
 * ১. একটি ফাংশন তৈরি করো যা passengers অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 *
 * ২. বয়স অনুযায়ী ভাড়া (fare) আপডেট করতে হবে: * যদি বয়স ১০ বছরের কম ( < 10 ) হয়, তবে ভাড়া ফ্রি (0)। * যদি বয়স ৬০ বছরের বেশি বা সমান ( >= 60 ) হয়, তবে ভাড়ার ওপর ৫০% ডিসকাউন্ট দিতে হবে। * বাকি সবার জন্য মূল ভাড়া (৫০০ টাকা) অপরিবর্তিত থাকবে।
 *
 *
 * ৩. আউটপুট হিসেবে একটি নতুন অ্যারে রিটার্ন করো যেখানে আপডেট করা ভাড়াসহ অবজেক্টগুলো থাকবে।
 *
 */

const passengers = [
  { name: "Rony", age: 10, fare: 500 },
  { name: "Sumi", age: 65, fare: 500 },
  { name: "Arif", age: 25, fare: 500 },
  { name: "Kalam", age: 70, fare: 500 },
  { name: "Nipa", age: 5, fare: 500 },
];

function passengerFareCalc(passengersData) {
  const newPassengers = structuredClone(passengersData);

  for (const p of newPassengers) {
    if (p.age >= 60) {
      p.updateFare = p.fare / 2;
    } else if (p.age > 10) {
      p.updateFare = "You Have to pay full fare amount";
    } else {
      p.updateFare = "Dear Pretty childreen your fare is free";
    }
  }

  return newPassengers;
}

const result2 = passengerFareCalc(passengers);
// console.log(result2)

/**
 * ১. একটি ফাংশন তৈরি করো যা inventory অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 *
 *  ২. প্রতিটি পণ্যের জন্য চেক করো যে তাদের বর্তমান stock তাদের minRequired এর চেয়ে কম কি না।
 *
 * ৩. আউটপুট হিসেবে একটি নতুন অ্যারে রিটার্ন করো যেখানে প্রতিটি অবজেক্টে status নামে একটি নতুন প্রপার্টি থাকবে: * যদি স্টক কম হয়, তবে status হবে: 'Restock Immediately'। * যদি স্টক পর্যাপ্ত হয়, তবে status হবে: 'Stock Sufficient'।
 *
 *
 * ৪. একই সাথে neededAmount নামে আরেকটি প্রপার্টি যোগ করো যা দেখাবে স্টক পূর্ণ করতে আরও কতটুকু পণ্য লাগবে (যদি স্টক কম থাকে)। স্টক বেশি থাকলে এটি ০ দেখাবে।
 */

const inventory = [
  { product: "Rice", stock: 50, minRequired: 100 },
  { product: "Oil", stock: 120, minRequired: 80 },
  { product: "Sugar", stock: 30, minRequired: 50 },
  { product: "Salt", stock: 200, minRequired: 150 },
  { product: "Dal", stock: 10, minRequired: 60 },
];

function stockDetector(productsList) {
  //I wanna return new update array I don't want to change main data

  const newInventroyList = structuredClone(productsList);

  for (const i of newInventroyList) {
    if (i.stock >= i.minRequired) {
      i.status = "Stock Sufficient";

      i.neededAmout = " Enough stock available if need it will update auto";
    } else {
      i.status = "Restock Immediately";
      i.neededAmout = i.minRequired - i.stock;
    }
  }

  return newInventroyList;
}

const result3 = stockDetector(inventory);
console.log(result3);

/**
 * ১. একটি ফাংশন তৈরি করো যা borrowedBooks অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 *
 *  ২. প্রতিটি বইয়ের জন্য জরিমানা (Fine) হিসাব করো: * যদি daysOverdue ০ হয়, তবে কোনো জরিমানা নেই। * প্রথম ৭ দিন পর্যন্ত ( ১ থেকে ৭ দিন ) প্রতিদিনের জন্য জরিমানা ১০ টাকা করে। * যদি ৭ দিনের বেশি হয়, তবে প্রথম ৭ দিনের জন্য ১০ টাকা করে এবং ৭ দিনের পরবর্তী প্রতি দিনের জন্য ২০ টাকা করে জরিমানা দিতে হবে।
 *
 *
 * ৩. আউটপুট হিসেবে একটি নতুন অ্যারে রিটার্ন করো যেখানে প্রতিটি বইয়ের জন্য totalFine এবং একটি message থাকবে। (যেমন: "You have to pay X taka").
 */

const borrowedBooks = [
  { title: "JS Fundamentals", daysOverdue: 0 },
  { title: "Clean Code", daysOverdue: 5 },
  { title: "The Alchemist", daysOverdue: 12 },
  { title: "Atomic Habits", daysOverdue: 2 },
  { title: "Deep Work", daysOverdue: 0 },
];

function fineCalculator(borrowBooksData) {
  const borrowBooks = structuredClone(borrowBooksData);

  const fine_10 = 10;
  const fine_20 = 20;

  for (const b of borrowBooks) {
    if (b.daysOverdue > 7) {
      const weekCalc = 7 * fine_10;
      const weekOverCalc = (b.daysOverdue - 7) * fine_20;

      b.totalFine = weekCalc + weekOverCalc;

      b.message = "You have to pay".concat(" ", b.totalFine, " ", "taka");
    } else if (b.daysOverdue > 0) {
      const weekCalc = b.daysOverdue * fine_10;

      b.totalFine = weekCalc;

      b.message = "You have to pay".concat(" ", b.totalFine, " ", "taka");
    }

    // I added extra things
    else {
      b.message = "Congratulation you doing well !!!";
    }
  }

  return borrowBooks;
}

const result4 = fineCalculator(borrowedBooks);
// console.log(result4)

//Problem 30: The Employee Performance Review

/**
 * ১. একটি ফাংশন তৈরি করো যা employees অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 * ২. পারফরম্যান্স স্কোর হিসাব করো এভাবে: * প্রতিটি tasksCompleted-এর জন্য ১০ পয়েন্ট যোগ হবে। * প্রতিটি deadlineMissed-এর জন্য ৫ পয়েন্ট বিয়োগ হবে।
 *
 * ৩. স্কোরের ওপর ভিত্তি করে একটি rating নির্ধারণ করো: * স্কোর যদি ১৫০ বা তার বেশি হয়, রেটিং হবে: 'Top Performer'। * স্কোর যদি ১০০ থেকে ১৪৯ এর মধ্যে হয়, রেটিং হবে: 'Satisfactory'। * স্কোর যদি ১০০ এর কম হয়, রেটিং হবে: 'Need Improvement'।
 *
 *
 *  ৪. নতুন একটি অ্যারে রিটার্ন করো যেখানে প্রতিটি এমপ্লয়ির জন্য performanceScore এবং rating প্রপার্টি থাকবে।
 */

const employees = [
  { name: "Riad", tasksCompleted: 15, deadlineMissed: 0 },
  { name: "Siam", tasksCompleted: 12, deadlineMissed: 2 },
  { name: "Arafat", tasksCompleted: 18, deadlineMissed: 1 },
  { name: "Nabil", tasksCompleted: 8, deadlineMissed: 5 },
  { name: "Tanvir", tasksCompleted: 20, deadlineMissed: 0 },
];

//as a junior have to breakdown problems and solve step by step don't worry !

function perfomaceReviewer(employeesData) {
  const localData = structuredClone(employeesData);

  const bonusScore = 10;
  const fareScoreReduce = 5;
  const topScoreNeed = 150;
  const midiumScoreNeed = 100;

  for (const x of localData) {
    const completedRewardPoint = x.tasksCompleted * bonusScore;
    const deadlineMissedFarePoint = x.deadlineMissed * fareScoreReduce;

    x.performanceScore = completedRewardPoint - deadlineMissedFarePoint;

    if (x.performanceScore >= topScoreNeed) {
      x.rating = "Top Performer".concat(
        " ",
        "score got:",
        " ",
        x.performanceScore,
      );
    } else if (x.performanceScore >= midiumScoreNeed) {
      x.rating = "Satisfactory".concat(
        " ",
        "score got:",
        " ",
        x.performanceScore,
      );
    } else {
      x.rating = "Need Improvement".concat(
        " ",
        "score got:",
        " ",
        x.performanceScore,
      );
    }
  }

  return localData;
}

const result5 = perfomaceReviewer(employees);
console.log(result5);
