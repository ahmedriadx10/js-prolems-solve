// Problem 61: The Smart Shopping Cart (Mini Project)

/**
 * ১. একটি ফাংশন লিখবে যা এই cartItems অ্যারেটি ইনপুট নিবে।
২. প্রতিটি আইটেমের জন্য itemTotal (দাম $\times$ পরিমাণ) বের করে ওই অবজেক্টে যোগ করবে।
৩. ডিসকাউন্ট লজিক: যদি কোনো আইটেমের মোট দাম (itemTotal) ২০০০ টাকার বেশি হয়, তবে তাকে ১০% ডিসকাউন্ট দাও। ডিসকাউন্ট দেওয়ার পর নতুন দামটি discountedPrice নামে প্রপার্টিতে রাখো। (যদি ২০০০ এর নিচে হয়, তবে ডিসকাউন্ট ০)।
৪. ট্যাক্স ক্যালকুলেশন: ডিসকাউন্ট দেওয়ার পর যে দাম আসবে, তার সাথে ৫% ভ্যাট (Tax) যোগ করো।
৫. সবশেষে ফাংশনটি একটি Invoice Summary অবজেক্ট রিটার্ন করবে যা দেখতে এমন হবে:
 */

/**
 * {
  allProducts: [...], // আপডেট হওয়া সব ডাটা
  finalBill: 0,       // ট্যাক্সসহ সবার মোট দামের যোগফল
  totalSaved: 0       // মোট কত টাকা ডিসকাউন্ট পেল (সব আইটেম মিলিয়ে)
}
 */

const cartItems = [
  { name: "Mouse", price: 1200, quantity: 2, category: "Electronics" },
  { name: "Keyboard", price: 2500, quantity: 1, category: "Electronics" },
  { name: "T-Shirt", price: 800, quantity: 3, category: "Clothing" },
  { name: "Water Bottle", price: 500, quantity: 2, category: "LifeStyle" },
];

function smartShopingCart(getShopingData) {
  const localData = structuredClone(getShopingData);
  const condion_price = 2000;
  //discount on percentage

  const discount_one = 10 / 100;

  //tax percentage

  const tax_percent = 5 / 100;

  let totalPriceWithoutDiscount = 0;

  let discountPriceWithoutTax = 0;
  const returnObj = {
    allProdcuts: localData,
    finallBill: 0,
    totalSaved: 0,
  };

  for (const x of localData) {
    x.itemsTotal = x.price * x.quantity;

    totalPriceWithoutDiscount += x.itemsTotal;

    //creating discount for every single item
    if (x.itemsTotal > condion_price) {
      const calcDiscount = x.itemsTotal * discount_one;
      x.discountPrice = x.itemsTotal - calcDiscount;
    } else {
      x.discountPrice = x.price * x.quantity;
    }

    discountPriceWithoutTax += x.discountPrice;

    x.taxAmount = x.discountPrice * tax_percent;

    //this property will help full for calculating total save or something
    x.finalItemPrice = x.discountPrice + x.taxAmount;

    //calculating finaBill

    returnObj.finallBill += x.finalItemPrice;
  }
  returnObj.totalSaved = totalPriceWithoutDiscount - discountPriceWithoutTax;

  return returnObj;
}

const result = smartShopingCart(cartItems);
// console.log(result);

// Problem 62: The Library Manager (Array Manipulation)

/**
 * ১. একটি ফাংশন লিখবে যা books অ্যারে ইনপুট নিবে।
 *  ২. যে বইগুলোর copies সংখ্যা ০, সেগুলোকে লিস্ট থেকে বাদ দিতে হবে (Remove/Filter)। 
 * ৩. বাকি বইগুলোর নামের শেষে " (In Stock)" লেখাটি যোগ করতে হবে।
 *  ৪. রিটার্ন করবে শুধু সেই বইগুলোর নামের একটি অ্যারে (অবজেক্ট নয়, শুধু নাম)।

উদাহরণ আউটপুট: ['JS Basics (In Stock)', 'HTML Pro (In Stock)', ...]
 */

const books = [
  { title: "JS Basics", author: "Riad", copies: 2 },
  { title: "HTML Pro", author: "Siam", copies: 5 },
  { title: "CSS Magic", author: "Arafat", copies: 0 },
  { title: "React Hero", author: "Nabil", copies: 3 },
];

function libraryManager(booksData) {
  const returnStockBooksName = [];

  for (const x of booksData) {
    if (x.copies > 0) {
      const concatinateStatus = x.title.concat(" ", "(In stock)");
      returnStockBooksName.push(concatinateStatus);
    }
  }

  return returnStockBooksName;
}

const result2 = libraryManager(books);
// console.log(result2)

// Problem 63: The Employee Bonus System (Mini Project 2)

/**
 * ১. বর্তমান বছর ২০২৬ ধরে ক্যালকুলেট করতে হবে।
 * 
 * ২. বোনাস লজিক: - যদি performance 'Excellent' হয়, তবে বোনাস পাবে স্যালারির ১০%।- যদি 'Good' হয়, তবে বোনাস পাবে স্যালারির ৫%।- অন্যদের কোনো বোনাস নেই।
 * 
 * ৩. অভিজ্ঞতা বোনাস (Experience Bonus): স্যালারি এবং পারফরম্যান্স বোনাস হিসেব করার পর, যারা কোম্পানিতে ৩ বছর বা তার বেশি সময় ধরে আছে (২০২৬ - joinYear $\ge$ ৩), তারা বাড়তি ২০০০ টাকা "Loyalty Bonus" পাবে।
 * 
 * ৪. প্রত্যেক এমপ্লয়ি অবজেক্টে totalPayout (Salary + Performance Bonus + Loyalty Bonus) নামে একটি নতুন প্রপার্টি যোগ করো।
 * 
 * ৫. সবশেষে একটি অবজেক্ট রিটার্ন করো:
 * 
 * JavaScript{
  employeeDetails: [...], // আপডেট হওয়া সবার ডাটা
  totalCompanyExpense: 0, // সবার totalPayout এর যোগফল
  totalBonusGiven: 0      // শুধু বোনাসগুলোর (Performance + Loyalty) মোট যোগফল
}
 */

const employees = [
  { name: "Riad", salary: 45000, performance: "Excellent", joinYear: 2022 },
  { name: "Siam", salary: 30000, performance: "Good", joinYear: 2024 },
  { name: "Arafat", salary: 55000, performance: "Excellent", joinYear: 2021 },
  { name: "Nabil", salary: 25000, performance: "Average", joinYear: 2023 },
];

function bounsSystemForEmployee(getData) {
  const localData = structuredClone(getData);
  //bonus percentage
  const excellent_bonus = 10 / 100;
  const good_bonus = 5 / 100;
  const compareYear = 2026;
  const best_perfomance = "excellent";
  const medium_perfomance = "good";

  const workingData = {
    employeesDetails: localData,
    totalCompanyExpense: 0,
    totalBonusGiven: 0,
  };

  for (const single of localData) {
    if (single.performance.toLowerCase() === best_perfomance) {
      single.perfomanceBonus = single.salary * excellent_bonus;
    } else if (single.performance.toLowerCase() === medium_perfomance) {
      single.perfomanceBonus = single.salary * good_bonus;
    } else {
      single.perfomanceBonus = 0;
    }

    if (single.joinYear + 3 <= compareYear) {
      single.loyalityBonus = 2000;
    } else {
      single.loyalityBonus = 0;
    }

    //calculate every single employees total salary after getting bonus

    const givenBonusCalc = single.perfomanceBonus + single.loyalityBonus;

    single.totalPayOut = single.salary + givenBonusCalc;

    workingData.totalCompanyExpense += single.totalPayOut;

    workingData.totalBonusGiven += givenBonusCalc;
  }

  return workingData;
}

const result3 = bounsSystemForEmployee(employees);
// console.log(result3);

// Problem 64: The Inventory Cleaner (Modified)

/**
 * ১. একটি ফাংশন লিখবে যা inventory অ্যারে এবং একটি targetKey (যেমন: 'brand') ইনপুট হিসেবে নিবে।\
 *
 *  ২. Property Deletion: লুপ চালিয়ে প্রতিটি অবজেক্ট থেকে ওই নির্দিষ্ট targetKey টি একদম ডিলিট করে দিতে হবে। (টিপস: delete কিওয়ার্ড ব্যবহার করবে)।
 *  ৩. Dynamic Summary: ডিলিট করার পর, প্রতিটি আইটেমের জন্য নিচের ফরম্যাটে একটি স্ট্রিং তৈরি করবে: "Item: [Name], Stock: [Stock], Price: [Price]"
 * ৪. সবশেষে একটি নতুন অ্যারে রিটার্ন করবে যেখানে শুধু এই স্ট্রিংগুলো থাকবে।
 */

const inventory = [
  { id: 1, name: "Laptop", stock: 5, price: 80000, brand: "Dell" },
  { id: 2, name: "Mouse", stock: 50, price: 1200, brand: "Logitech" },
  { id: 3, name: "Monitor", stock: 12, price: 15000, brand: "Samsung" },
  { id: 4, name: "Keyboard", stock: 25, price: 2500, brand: "HP" },
];

function inventoryCleaner(getData, getKey) {
  const localData = structuredClone(getData);

  const deletedMessages = [];

  
  //converted keyName lower case because we set key names in lowerCase

  const convKeyLower = getKey.toLowerCase();
  for (const x of localData) {
    if (x.hasOwnProperty(convKeyLower)) {
      delete x[convKeyLower];

      const getAvailableKeys = Object.entries(x);

      const joinData = [];

      for (const g of getAvailableKeys) {
        joinData.push(g.join(": "));
      }

      const createAMessage = joinData.join(" ");
      const finalMessage = "Avilable Data".concat(" ", createAMessage);

      deletedMessages.push(finalMessage);
    }
  }

return deletedMessages
}

const result4 = inventoryCleaner(inventory, "brand");
console.log(result4);
