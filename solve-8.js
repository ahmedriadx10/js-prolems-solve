// Problem 43: The Smart Grocery Budgeter (Mixed Challenge)

//সিনারিও: তুমি একটি গ্রোসারি শপের জন্য একটি ফাংশন লিখছ। কাস্টমার কিছু পণ্য কিনছে যার লিস্ট একটি অ্যারে আকারে দেওয়া আছে। তোমাকে হিসাব করতে হবে কাস্টমারের মোট কত টাকা খরচ হলো এবং তার কাছে থাকা বাজেটে তা কুলাবে কিনা।

/**
 * ১. একটি ফাংশন তৈরি করো যা shoppingCart (অ্যারে) এবং myBudget (নাম্বার) ইনপুট হিসেবে নিবে।
 *
 *  ২. লুপ ব্যবহার করে বের করো মোট খরচ কত (Total Cost = price * quantity)।
 *
 * ৩. যদি মোট খরচ বাজেটের চেয়ে বেশি হয়, তবে রিটার্ন করবে: "Low Budget! You need [extra_money] more."
 *
 * ৪. যদি বাজেটের ভেতরে হয়, তবে রিটার্ন করবে: "Order Successful! Remaining balance: [balance_money]"
 */

const shoppingCart = [
  { name: "Rice", price: 65, quantity: 5 },
  { name: "Oil", price: 180, quantity: 2 },
  { name: "Sugar", price: 120, quantity: 1 },
  { name: "Dal", price: 140, quantity: 3 },
];

const myBudget = 1000;

function groceryBudgeter(userBought, userBudget) {
  let totalCost = 0;

  for (const cost of userBought) {
    totalCost += cost.price * cost.quantity;
  }

  //condition indicates if total cost gater than budget then if block code will run

  //though i wrote conditon reverse type i can write userBuget<totalCost

  if (totalCost > userBudget) {
    const extraNeed = totalCost - userBudget;

    return "Low Budget!".concat(" ", "You need", " ", extraNeed, " ", "more");
  } else {
    const remainingBalance = userBudget - totalCost;

    return "Order Sucessfull".concat(
      " ",
      "Remaining Balance:",
      remainingBalance,
    );
  }
}

const result = groceryBudgeter(shoppingCart, myBudget);
// console.log(result)

//Problem 44: The Performance Grader (Array & Object Mix)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই students অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 * ২. লুপের ভেতরে আরেকটি লুপ (Nested Loop) অথবা অ্যারের কোনো মেথড ব্যবহার করে প্রতিটি স্টুডেন্টের গড় মার্কস (Average Marks) বের করো। (গড় = মোট মার্কস / সাবজেক্ট সংখ্যা)।
 *
 *
 * ৩. যদি কোনো স্টুডেন্টের গড় মার্কস ৫০-এর নিচে হয়, তবে তাকে একটি নতুন প্রপার্টি দাও status: 'Needs Improvement'।
 *
 * ৪. যদি গড় মার্কস ৫০ বা তার বেশি হয়, তবে তাকে প্রপার্টি দাও status: 'Good Performance'। ৫. সবশেষে আপডেট করা পুরো অ্যারেটি রিটার্ন করো।
 */

const students = [
  { name: "Riad", marks: [85, 90, 78] },
  { name: "Siam", marks: [40, 45, 38] },
  { name: "Arafat", marks: [70, 75, 80] },
  { name: "Nabil", marks: [30, 25, 35] },
];

function perfomanceGrader(getStudentData) {
  const localData = structuredClone(getStudentData);

  const greatAvg = 50;

  for (const individual of localData) {
    //its calculating for every single student
    let totalMarks = 0;

    //loop running on everysingle objects marks array
    for (const x of individual.marks) {
      totalMarks += x;
    }

    //calculating avg for every single students above total marks avg

    const marksAvg = totalMarks / individual.marks.length;

    //conditon for every single student above the avg marks

    if (marksAvg >= greatAvg) {
      individual.status = "Good Perfomance";
    } else {
      individual.status = "Needs improvement";
    }
  }

  return localData;
}

const result2 = perfomanceGrader(students);
// console.log(result2);

// Problem 45: The Advanced Inventory Search (Mixed Challenge)

/**
 * ১. একটি ফাংশন তৈরি করো যা দুটি ইনপুট নিবে: inventory (অ্যারে) এবং একটি categoryName (স্ট্রিং)।
 *
 *
 * ২. ফাংশনটিকে এমন একটি নতুন অ্যারে রিটার্ন করতে হবে যেখানে শুধুমাত্র সেই ক্যাটাগরির পণ্যগুলো থাকবে যেগুলোর স্টক ০-এর বেশি।
 *
 *
 * ৩. যদি কোনো পণ্য খুঁজে না পাওয়া যায়, তবে ফাংশনটি একটি স্ট্রিং রিটার্ন করবে: "No products available in this category!"।
 */

const inventory = [
  { name: "Laptop", category: "Electronics", price: 80000, stock: 10 },
  { name: "Smartphone", category: "Electronics", price: 25000, stock: 0 },
  { name: "Headphone", category: "Accessories", price: 3000, stock: 15 },
  { name: "Mouse", category: "Accessories", price: 1500, stock: 5 },
  { name: "Monitor", category: "Electronics", price: 12000, stock: 3 },
];

//first of all I know its sovle possible easily using .filter() method and conditon such as if filtered array lenght 0 return the given string

//but as e junior have to understand internal mechanism

function inventorySearchProducts(getProductsList, usrCategory) {
  const filterdProducts = [];

  for (const individual of getProductsList) {
    // i used .toLowerCase() because i don't know what will be user input case or as if it don't check wrong condition
    if (
      individual.category.toLowerCase() === usrCategory.toLowerCase() &&
      individual.stock > 0
    ) {
      filterdProducts.push(individual);
    }
  }

  //I know i can use here advance shortcut using truthy falsy like !filteredProducts.length
  if (filterdProducts.length === 0) {
    return "No products available".concat(
      " ",
      usrCategory,
      " ",
      "in this category!",
    );
  }

  return filterdProducts;
}

const result3 = inventorySearchProducts(inventory, "Accessories");

// console.log(result3)

//Problem 46: The Smart Discount Calculator (Mixed Challenge)

/**
 * ১. একটি ফাংশন তৈরি করো যা orders অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 *
 * ২. প্রতিটি অর্ডারের ওপর ভিত্তি করে নতুন একটি প্রপার্টি finalPrice যোগ করতে হবে।
 *
 * ৩. ডিসকাউন্টের নিয়মগুলো হলো: - যদি অর্ডারের amount ২০০০ টাকার বেশি হয়, তবে ১৫% ডিসকাউন্ট পাবে। - যদি ১০০০ থেকে ২০০০ টাকার মধ্যে হয়, তবে ১০% ডিসকাউন্ট পাবে। - ১০০০ টাকার কম হলে কোনো ডিসকাউন্ট নেই (অর্থাৎ finalPrice হবে অরিজিনাল amount)।
 *
 * ৪. ফাংশনটি শেষে সব অর্ডারের finalPrice সহ পুরো অ্যারেটি রিটার্ন করবে।
 */

const orders = [
  { orderID: 101, customer: "Riad", amount: 1200 },
  { orderID: 102, customer: "Siam", amount: 450 },
  { orderID: 103, customer: "Arafat", amount: 3000 },
  { orderID: 104, customer: "Nabil", amount: 800 },
];

function discountCalculator(ordersList) {
  const localData = structuredClone(ordersList);
  //amount
  const highAmount = 2000;
  const lowAmout = 1000;
  //discount percentage
  const high_discount = 15 / 100;
  const low_discount = 10 / 100;
  for (const x of localData) {
    if (x.amount > highAmount) {
      const discountCalc = x.amount * high_discount;
      x.finalPrice = x.amount - discountCalc;
    } else if (x.amount >= lowAmout) {
      const discountCalc = x.amount * low_discount;
      x.finalPrice = x.amount - discountCalc;
    } else {
      //I just added a string inside new finalPrice property its like professional
      x.finalPrice = x.amount;
    }
  }

  return localData;
}

const result4 = discountCalculator(orders);
// console.log(result4)

//Problem 47: The Data Formatter (Mixed Challenge)

/**
 * ১. একটি ফাংশন তৈরি করো যা rawUsers অ্যারেকে ইনপুট হিসেবে নিবে। 
 * ২. তোমাকে এমন একটি নতুন অ্যারে রিটার্ন করতে হবে যেখানে প্রতিটা অবজেক্টে নিচের পরিবর্তনগুলো থাকবে: * fullName: first এবং last নাম দুটি জোড়া দিয়ে প্রথম অক্ষর বড় হাতের (Capitalized) করে একটি স্ট্রিং বানাবে। (যেমন: Riad Ahmed) * isAdmin: যদি role এর মান 'admin' হয় তবে এটি হবে true, অন্যথায় false। 
 * ৩. আউটপুট অবজেক্টে অরিজিনাল প্রপার্টিগুলো (first, last, role) থাকবে না, শুধু fullName এবং isAdmin থাকবে।

আউটপুট দেখতে এমন হবে: [{ fullName: 'Riad Ahmed', isAdmin: true }, ...]
 */

const rawUsers = [
  { first: "riad", last: "ahmed", role: "admin" },
  { first: "siam", last: "chowdhury", role: "user" },
  { first: "arafat", last: "hossain", role: "user" },
  { first: "nabil", last: "rahman", role: "admin" },
];

//Inspiration for me

//sometime problems looks like very critical but as a junior have to think
//code can write anyone but as a developer we have to build logic solve problems

function dataFormer(userData) {
  const returnableData = [];
  const compare_role = "admin";

  for (const data of userData) {
    //here we using .replace() method

    const firstUpperCase = data.first[0].toUpperCase();

    const replaceFirstName = data.first.replace(data.first[0], firstUpperCase);

    // we can use for assign these value shortcully but as a junior have to write maintain with readability

    const concatFullName = replaceFirstName.concat(" ", data.last);

    //we converted compareable role admin above  inside this function
    //used a trick ternary operator


    
    const updatedData = {
      fullName: concatFullName,
      isAdmin: data.role.toLowerCase() === compare_role ? true : false,
    };

    returnableData.push(updatedData);
  }


  return returnableData
}

const result5 = dataFormer(rawUsers);
console.log(result5);
