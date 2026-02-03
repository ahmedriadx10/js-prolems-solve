//Problem 48: The Nested Explorer (Nested Object Challenge)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই company অবজেক্টকে ইনপুট হিসেবে নিবে। 
 * 
 * ২. ফাংশনটি এমন একটি নতুন অ্যারে রিটার্ন করবে যেখানে প্রতিটি ব্রাঞ্চের জন্য একটি স্ট্রিং থাকবে। 
 * 
 * ৩. স্ট্রিংটির ফরম্যাট হবে এমন: "The [city] branch is managed by [manager] since [established]."

আউটপুট দেখতে হবে এমন: ["The Dhaka branch is managed by Siam since 2010.", ...]
 */

const company = {
  name: "Tech-Hero",
  branches: [
    {
      city: "Dhaka",
      employees: 50,
      info: { established: 2010, manager: "Siam" },
    },
    {
      city: "Chittagong",
      employees: 30,
      info: { established: 2015, manager: "Riad" },
    },
    {
      city: "Sylhet",
      employees: 20,
      info: { established: 2018, manager: "Arafat" },
    },
  ],
};

function nestedDataExplorer(dataList) {
  const returnableData = [];

  for (const data of dataList.branches) {
    const branchesMessage = "The".concat(
      " ",
      data.city,
      " ",
      "brach",
      " ",
      "is managed by",
      " ",
      data.info.manager,
      " ",
      "since",
      " ",
      data.info.established,
    );

    returnableData.push(branchesMessage);
  }

  return returnableData;
}

const result = nestedDataExplorer(company);
// console.log(result)

//Problem 49: The Unique Task Manager (Logic Building)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই অ্যারেটি ইনপুট হিসেবে নিবে।
 *
 * ২. লুপ ব্যবহার করে এমন একটি নতুন অ্যারে তৈরি করো যেখানে কোনো ডুপ্লিকেট আইডি থাকবে না (প্রতিটি আইডি মাত্র একবার থাকবে)। ৩. নতুন অ্যারেটি ছোট থেকে বড় ক্রমে (Ascending Order) সাজিয়ে রিটার্ন করো।
 */

const transactionIDs = [101, 105, 102, 105, 108, 101, 110, 102, 120];

function uniqueManagerTool(getData) {
  const uniqueDataStore = [];

  for (const u of getData) {
    if (!uniqueDataStore.includes(u)) {
      uniqueDataStore.push(u);
    }
  }
  // here i used shortcutly return
  return uniqueDataStore.sort();
}

const result2 = uniqueManagerTool(transactionIDs);
// console.log(result2)

// Problem 50: The VIP Guest Filter (Object & Filter Combo)

/*
*১. একটি ফাংশন তৈরি করো যা guests অ্যারেকে ইনপুট হিসেবে নিবে। 

২. এমন সব গেস্টদের নিয়ে একটি নতুন অ্যারে বানাও যারা নিচের সবগুলো শর্ত পূরণ করে: - যাদের বয়স ১৮ বা তার বেশি। - যাদের কাছে টিকেট (hasTicket: true) আছে। 

৩. যদি কোনো গেস্ট এই শর্ত পূরণ করে এবং তার প্রফেশন 'Admin' হয়, তবে তার অবজেক্টে একটি নতুন প্রপার্টি যোগ করো: access: 'Full Access', আর বাকিদের জন্য access: 'Partial Access'। 

৪. শেষে এই ফিল্টার করা এবং আপডেট করা নতুন অ্যারেটি রিটার্ন করো।
 */

const guests = [
  { name: "Riad", age: 22, hasTicket: true, profession: "Developer" },
  { name: "Siam", age: 17, hasTicket: true, profession: "Student" },
  { name: "Arafat", age: 25, hasTicket: false, profession: "Designer" },
  { name: "Nabil", age: 20, hasTicket: true, profession: "admin" },
  { name: "Zayan", age: 15, hasTicket: true, profession: "Student" },
];

function guestFilter(guestsData) {
  const localData = structuredClone(guestsData);
  const conditon_age = 18;
  const conditon_profession = "admin";
  const returnableData = [];

  //here we can do it by 2 step
  //first we filter out and secnodly we add new property and value but I tried to create a new property and push data inside one loop as if we create a copy data so when we creates new property main data is full safe

  for (const guest of localData) {
    //here used shortcut if the variable  ===true we can write just variable name becuase without true if block will never run
    if (guest.age >= conditon_age && guest.hasTicket) {
      if (guest.profession === conditon_profession) {
        guest.access = "Full Access";

        returnableData.push(guest);
      } else {
        guest.access = "Partial Access";
        returnableData.push(guest);
      }
    }
  }

  return returnableData;
}

const reuslt3 = guestFilter(guests);
// console.log(reuslt3);

// Problem 51: The Object Frequency Counter (Advanced Logic)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই অ্যারেটি ইনপুট হিসেবে নিবে।
 *
 *  ২. তোমাকে একটি অবজেক্ট রিটার্ন করতে হবে যেখানে প্রতিটি আইটেম কতবার আছে তা দেখা যাবে।
 *
 * ৩. আউটপুট দেখতে এমন হবে: { Apple: 3, Orange: 2, Banana: 1 }
 */

const votes = ["Apple", "Orange", "Apple", "Banana", "Orange", "Apple"];

function frequencyCounter(dataList) {
  const fruit_one = "apple";
  const fruit_two = "orange";
  const fruit_three = "banana";
  const returnableData = {
    apple: 0,
    orange: 0,
    banana: 0,
  };

  for (const data of dataList) {
    if (data.toLowerCase() === fruit_one) {
      returnableData.apple++;
    } else if (data.toLowerCase() === fruit_two) {
      returnableData.orange++;
    }

    //here we can use else block but i used else if for make clearity
    else if (data.toLowerCase() === fruit_three) {
      returnableData.banana++;
    }
  }

  return returnableData;
}

const result4 = frequencyCounter(votes);
console.log(result4)

//just thought there is many types of fruits/data list we don't know which is included inside data list and have to count themselves

function fruitsInquiry(userData) {
  const localData = {};

  for (const x of userData) {
    // here i used object property checking techniqe .hasOwnProperty() that will give result using boolean data type

    // i can use if(propName in ObjectName){} condtion but i think which i used thats better

    //I set the condtion using .toLowerCase() because I will set new fruits name property lower case


    //if block will run when the x named property not available on localData object
    if (!localData.hasOwnProperty(x.toLowerCase())) {
      //here we can not dot notation because we know when we use for of loop and for in loop the elements comes using a loop variable

      const convLowerCase = x.toLowerCase();
      localData[convLowerCase] = 0;
    }


    //here the main trick if we see the above code I already created a new property which not included object 
    //after that inside same loop i'm icreasing property count 

    // 

    if(localData.hasOwnProperty(x.toLowerCase())){

         const convLowerCase = x.toLowerCase();
      localData[convLowerCase]++

    }


}

return localData

}



const testingData=['apple','mango','lichi','apple','lichi','orange','banana','mango','orange','mango','Cherry','plum','cherry','Plum','Pear','Watermelon','Strawberry','Pineapple','watermelon','pear','strawberry','pineaple'];

const testingData2=['apple','plum','pear','Papaya','papaya','papaya']

//this function can use any types of data count and return those as a object data


const result5=fruitsInquiry(testingData)
console.log(result5)