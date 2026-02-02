/**
 * ১. একটি ফাংশন তৈরি করো যা এই অ্যারেটি ইনপুট হিসেবে নিবে।
 *
 * ২. তোমার বাজেট হলো ২০০০ টাকা।
 *
 * ৩. প্রতিটি আইটেমের মোট খরচ (price * quantity) বের করো এবং দেখো মোট বাজার করতে কত টাকা লাগবে।
 *
 * ৪. ফাংশনটি একটি String রিটার্ন করবে: * যদি মোট খরচ ২০০০ টাকার সমান বা কম হয়, তবে বলবে: "Within budget! Total cost: [Total Amount]"। * যদি ২০০০ টাকার বেশি হয়ে যায়, তবে বলবে: "Budget Exceeded! You need [Extra Amount] more taka"।
 */

const groceryItems = [
  { name: "Apple", price: 250, quantity: 2 },
  { name: "Rice", price: 65, quantity: 10 },
  { name: "Milk", price: 90, quantity: 3 },
  { name: "Oil", price: 180, quantity: 5 },
  { name: "Egg", price: 12, quantity: 12 },
];

function budgetCalculator(itemList) {
  const localData = structuredClone(itemList);

  const conditionalBudget = 2000;

  let totalPriceSum = 0;

  for (const x of localData) {
    totalPriceSum += x.price * x.quantity;
  }

  if (totalPriceSum > conditionalBudget) {
    return "Budget Exceeded !".concat(
      " ",
      "You Need:",
      " ",
      totalPriceSum - conditionalBudget,
      " ",
      "more taka",
    );
  } else {
    return "Within Budget!".concat(" ", "Total Cost:", " ", totalPriceSum);
  }
}

const result = budgetCalculator(groceryItems);
// console.log(result)

//Problem 33: The Password/Username Validator

/**
 * ১. একটি ফাংশন তৈরি করো যা usernames অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 * ২. লুপ চালিয়ে সেই নামগুলো খুঁজে বের করো যেগুলোর দৈর্ঘ্য (length) ৬ ক্যারেক্টারের বেশি।
 *
 * ৩. শুধুমাত্র সেই ভ্যালিড নামগুলো একটি নতুন অ্যারেতে push করে রিটার্ন করো।
 */

const usernames = ["riad_123", "siam", "arafat_dev_2026", "nabil_pro", "ta"];

function validator(userData) {
  const returnData = [];
  const needChar = 6;

  //used for loop just

  for (let i = 0; i < userData.length; i++) {
    if (userData[i].length > needChar) {
      returnData.push(userData[i]);
    }
  }

  return returnData;
}

const result2 = validator(usernames);
// console.log(result2)

//Problem 34: The Even-Odd Sum Challenge

/**
 * ১. একটি ফাংশন তৈরি করো যা এই numbers অ্যারেকে ইনপুট নিবে।
 * 
 *  ২. লুপ চালিয়ে চেক করো কোন সংখ্যাগুলো জোড় (Even) আর কোনগুলো বিজোড় (Odd)। 
 * 
 * ৩. আউটপুট হিসেবে একটি Object রিটার্ন করো যার ফরম্যাট হবে নিচের মতো: { evenSum: 32, oddSum: 30 } (সংখ্যাগুলো উদাহরণ হিসেবে দেওয়া)।

 */

const numbers = [12, 5, 8, 3, 10, 7, 2, 15];

function evenOddMechine(numbers) {
  //the problem we can solve 2 way
  //1. we can calculate even and odd total inside separate variable then return using object
  //2. we can calculate direct by changing object property value

  const returnData = {
    evenSum: 0,
    oddSum: 0,
  };

  //used while loop for practice

  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      returnData.evenSum += numbers[i];
    } else {
      //here used braket notation for practice purpose

      returnData["oddSum"] += numbers[i];
    }

    i++;
  }

  return returnData;
}

//solve 2

function tester(userData) {
  let evenSum = 0;
  let oddSum = 0;

  for (const x of userData) {
    if (x % 2 === 0) {
      evenSum += x;
    } else {
      oddSum += x;
    }
  }

  return {
    evenSum: evenSum,
    oddSum: oddSum,
  };
}

const test1 = evenOddMechine(numbers);
const test2 = tester(numbers);

// console.log(test1)
// console.log(test2)

//Problem 35: The Unique Guest List

/**
 * ১. একটি ফাংশন তৈরি করো যা এই guests অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 * ২. একটি নতুন অ্যারে তৈরি করো যেখানে কোনো নাম ডুপ্লিকেট থাকবে না (প্রতিটি নাম একবারই থাকবে)।
 *
 * ৩. লুপ ব্যবহার করে এটি সমাধান করার চেষ্টা করো (Hint ছাড়া, তাই Set ব্যবহার না করে লজিক দিয়ে করার চেষ্টা করো)।
 *
 *  ৪. ইউনিক নামের সেই নতুন অ্যারেটি রিটার্ন করো।
 */

const guests = [
  "Riad",
  "Siam",
  "Rony",
  "Riad",
  "Arafat",
  "Siam",
  "Nabil",
  "Rony",
];

function unicData(guestData) {
  const localData = structuredClone(guestData);

  const returnUnicData = [];

  for (const x of localData) {
    if (!returnUnicData.includes(x)) {
      returnUnicData.push(x);
    }
  }

  return returnUnicData;
}

const result3 = unicData(guests);
// console.log(result3)

//Problem 36: The Product Discount Applier

/**
 *১. একটি ফাংশন তৈরি করো যা এই products অ্যারেকে ইনপুট হিসেবে নিবে। 
 
 ২. শর্ত হলো: যদি কোনো পণ্যের ক্যাটাগরি 'Electronics' হয়, তবে তাকে ১০% ডিসকাউন্ট দিতে হবে। 
 
 ৩. প্রতিটি পণ্যের জন্য নতুন একটি প্রপার্টি finalPrice যোগ করো। * যদি ইলেকট্রনিক্স হয়, তবে finalPrice হবে ডিসকাউন্ট দেওয়ার পরের দাম। * অন্য ক্যাটাগরি হলে finalPrice অরিজিনাল দামই থাকবে। 
 
 ৪. আপডেট করা নতুন অ্যারেটি রিটার্ন করো। 
 */

const products = [
  { name: "Laptop", price: 80000, category: "Electronics" },
  { name: "Shirt", price: 1500, category: "Clothing" },
  { name: "Mobile", price: 25000, category: "Electronics" },
  { name: "Watch", price: 5000, category: "Accessories" },
  { name: "Headphone", price: 3000, category: "Electronics" },
];

//solving this problem using above instruction

function categoryDiscout(usrProducts) {
  const localData = structuredClone(usrProducts);
  const neededCategory = "electronics";

  //discount on percentage
  const discout = 10 / 100;
  for (const l of localData) {
    //compareing using .toLowerCase() string method because sometimes could be string on lower case
    if (l.category.toLowerCase() === neededCategory) {
      const calcDiscount = l.price * discout;

      l.finalPrice = l.price - calcDiscount;
    } else {
      l.finalPrice = l.price;
    }
  }
  return localData;
}

const result4 = categoryDiscout(products);
// console.log(result4);

//Problem 37: The Temperature Converter (Object Edition)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই অ্যারেটি ইনপুট হিসেবে নিবে।
 *
 *
 * ২. প্রতিটি অবজেক্টের জন্য একটি নতুন প্রপার্টি fahrenheit যোগ করো।
 *
 *
 *  ৩. তোমাকে বের করতে হবে সেলসিয়াস থেকে ফারেনহাইটে কনভার্ট করার সূত্রটি কী এবং সেটি কোডে ইমপ্লিমেন্ট করতে হবে। ৪. আউটপুট হিসেবে সেই নতুন প্রপার্টিসহ আপডেট করা অ্যারেটি রিটার্ন করো।
 */

const cityTemperatures = [
  { city: "Dhaka", celsius: 30 },
  { city: "Chittagong", celsius: 28 },
  { city: "Sylhet", celsius: 25 },
  { city: "Rajshahi", celsius: 32 },
  { city: "Barisal", celsius: 29 },
];

function temperatureMechine(cityTemData) {
  const localTemperatureData = structuredClone(cityTemData);

  for (const t of localTemperatureData) {
    //used formula to convert celsius to fahrenheit
    //  °F = (9/5 × °C) + 32

    const convFahrenheit = (9 / 5) * t.celsius + 32;

    //here just used bracket notation for practice purpose
    t["fahrenheit"] = convFahrenheit;
  }

  return localTemperatureData;
}

const result5 = temperatureMechine(cityTemperatures);
// console.log(result5)

//Problem 38: The Word Counter (Array of Strings)

/**
 *১. একটি ফাংশন তৈরি করো যা এই reviews অ্যারেকে ইনপুট হিসেবে নিবে। 
 
 
 ২. প্রতিটি স্ট্রিংয়ে (Sentence) কয়টি শব্দ (Word) আছে তা গণনা করো।
 
 
 ৩. আউটপুট হিসেবে একটি নতুন অ্যারে রিটার্ন করো যেখানে প্রতিটি এলিমেন্ট হবে একটি অবজেক্ট। অবজেক্টের ফরম্যাট হবে এরকম: { text: "Sentence...", wordCount: 5 }
 */

const reviews = [
  "This product is amazing",
  "I love using it every day",
  "Actually it is not that good",
  "Highly recommended for everyone",
  "Poor quality and very expensive",
];

function wordCounter(userData) {
  //copy data
  const localData = structuredClone(userData);

  const returnData = [];

  for (const w of localData) {
    const splitSentence = w.split(" ");

    returnData.push({
      text: splitSentence.join(" "),
      wordCount: splitSentence.length,
    });
  }

  return returnData;
}

const result6 = wordCounter(reviews);
// console.log(result6)

//Problem 39: The Task Priority Organizer

/**
 * ১. একটি function তৈরি করো যা tasks অ্যারেকে ইনপুট হিসেবে নিবে।
 *
 * ২. সেই সব টাস্ক খুঁজে বের করো যেগুলোর priority হলো 'High' এবং যেগুলো এখনো শেষ হয়নি (completed: false)।
 *
 * ৩. শুধুমাত্র সেই টাস্কগুলোর টাইটেল (Title) একটি নতুন অ্যারেতে স্টোর করো। ৪. সেই টাইটেলের অ্যারেটি রিটার্ন করো।
 */

const tasks = [
  { title: "Fix bug", priority: "High", completed: false },
  { title: "Write docs", priority: "Low", completed: true },
  { title: "Update server", priority: "High", completed: true },
  { title: "Design UI", priority: "Medium", completed: false },
  { title: "Meeting", priority: "High", completed: false },
];

function taskFinder(userTaskData) {
  const returnData = [];
  const needPriority = "high";
  for (const t of userTaskData) {
    if (t.priority.toLowerCase() === needPriority && !t.completed) {
      returnData.push(t.title);
    }
  }

  return returnData;
}

const result7 = taskFinder(tasks);

console.log(result7);
