// Problem 57: The Weather Station (Unit Conversion)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই অ্যারেটি ইনপুট হিসেবে নিবে।
 *
 * ২. প্রতিটি শহরের জন্য তাপমাত্রা Fahrenheit-এ রূপান্তর করো।
 *
 * ৩. নতুন একটি প্রপার্টি status যোগ করো: - যদি tempC ৩৫ বা তার বেশি হয়, তবে status হবে 'Hot'. - না হলে status হবে 'Comfortable'.
 *
 *  ৪. অরিজিনাল ডাটা পরিবর্তন না করে একটি নতুন অ্যারে রিটার্ন করো।
 */

const cityTemps = [
  { city: "Dhaka", tempC: 30 },
  { city: "Rajshahi", tempC: 38 },
  { city: "Sylhet", tempC: 25 },
  { city: "Chittagong", tempC: 32 },
];

function weatherStation(getTempInput) {
  const localData = structuredClone(getTempInput);

  const compare_temp = 35;

  for (const individual of localData) {
    const convFahrenheit = (9 / 5) * individual.tempC + 32;
    const convFixedFload = parseFloat(convFahrenheit.toFixed(2));

    //safe version
    individual.tempF = convFixedFload;

    if (individual.tempC >= compare_temp) {
      individual.status = "Hot";
    } else {
      individual.status = "Comfortable";
    }
  }

  return localData;
}

const result = weatherStation(cityTemps);

// console.log(result);

// Problem 58: Height Converter (Feet to Inch & Validation)

/**
 *
 * ১. একটি ফাংশন তৈরি করো যা উচ্চতাকে ইঞ্চিতে (Inches) রূপান্তর করবে। (সূত্র: $1 \text{ foot} = 12 \text{ inches}$)
 *
 * ২. নতুন একটি প্রপার্টি totalInches যোগ করো।
 *
 * ৩. যদি কারো উচ্চতা ৬০ ইঞ্চির কম হয়, তাকে একটি আলাদা অ্যারে shortList-এ পুশ করো।
 * ৪. ফাংশনটি শেষে একটি অবজেক্ট রিটার্ন করবে যা দেখতে এমন হবে:{ allData: [...], shortList: [...] }রিয়াদ, এখানে ট্রিকটা হলো লুপের ভেতরেই তোমাকে totalInches বের করতে হবে এবং একই সাথে কন্ডিশন চেক করে শর্ট মানুষদের নাম বা অবজেক্টটি shortList-এ পুশ করতে হবে।
 */

// developer don't think how much problem concept they just think step by step

const peopleHeight = [
  { name: "Riad", heightFt: 5.7 },
  { name: "Siam", heightFt: 5.2 },
  { name: "Arafat", heightFt: 6.0 },
  { name: "Nabil", heightFt: 4.8 },
];

function heightConverter(getPeopleData) {
  //created a copy

  const localData = structuredClone(getPeopleData);

  const allData = [];
  const shortList = [];
  const compare_inch = 60;

  for (const x of localData) {
    //height given ft

    //we know 1F =12 ince
    const convHeightInch = x.heightFt * 12;
    const convHeightInchFixedFloat = parseFloat(convHeightInch.toFixed(2));

    x.heightInch = convHeightInchFixedFloat;

    if (x.heightInch < compare_inch) {
      shortList.push(x);
    }

    allData.push(x);
  }

  //I wrote these like because if i previously declare obje and prop I have to access allData and shortList using obj data access so I didn't declared return obj prviously i just declard two array and after working with data I just add these array as a provalue

  return {
    //used here shortcut propset because we kno if the propname and value are same variable name and value we can write just variable name
    allData,
    shortList,
  };
}

const result2 = heightConverter(peopleHeight);
// console.log(result2);

// Problem 59: The Student Search Engine (Mathematical Logic & Search)

/**
 * ১. একটি ফাংশন তৈরি করো যা students অ্যারে এবং একটি searchID ইনপুট হিসেবে নিবে।
 *
 *  ২. প্রথমে ওই id অনুযায়ী স্টুডেন্টকে খুঁজে বের করো।
 *
 * ৩. যদি স্টুডেন্টকে পাওয়া যায়: - তার মার্কসগুলোর গড় (Average) বের করো। - তার রেজাল্ট অবজেক্টে averageMark এবং grade যোগ করো। (গড় ৮০+ হলে 'A', না হলে 'B')। - শুধু ওই নির্দিষ্ট স্টুডেন্টের আপডেট হওয়া অবজেক্টটি রিটার্ন করো।
 *
 * ৪. যদি ওই id এর কোনো স্টুডেন্ট না থাকে, তবে একটি মেসেজ রিটার্ন করো: "Student not found!"
 */

const students = [
  { name: "Riad", marks: [80, 85, 90], id: 101 },
  { name: "Siam", marks: [40, 50, 45], id: 102 },
  { name: "Arafat", marks: [70, 75, 80], id: 103 },
  { name: "Nabil", marks: [95, 90, 100], id: 104 },
];

function studentSearchEngine(studentsData, studentId) {
  const localData = structuredClone(studentsData);
  const compare_avg = 80;
  //we cay do it easily using .find() method

  for (const x of localData) {
    if (x.id === studentId) {
      let totalMarks = 0;

      for (const m of x.marks) {
        totalMarks += m;
      }

      const avgCalc = totalMarks / x.marks.length;

      const avgCalcFloat = parseFloat(avgCalc.toFixed(2));

      x.avgMarks = avgCalcFloat;

      if (x.avgMarks >= compare_avg) {
        x.grade = "A";
      } else {
        x.grade = "B";
      }

      return localData;
    }
  }

  return "No student found";
}

//if i use .find() method it will very easy to control return issue and find data
//aslo .reduce method is most use for these types of total value calc

const result3 = studentSearchEngine(students, 103);
// console.log(result3);

// Problem 60: The Grand Finale (Searching & Filtering combined)

/**
 * ১. একটি ফাংশন তৈরি করো যা transactions এবং একটি নির্দিষ্ট type ('income' বা 'expense') ইনপুট নিবে।
 *
 * ২. ঐ টাইপের সব ট্রানজেকশন ফিল্টার করে বের করো।
 *
 * ৩. ফিল্টার করা ট্রানজেকশনগুলোর মোট অ্যামাউন্ট বের করো।
 *
 * ৪. শেষে একটি অবজেক্ট রিটার্ন করো: { filteredItems: [...], totalAmount: 0 }।
 */

const transactions = [
  { id: 1, amount: 500, type: "income", category: "Freelancing" },
  { id: 2, amount: 200, type: "expense", category: "Food" },
  { id: 3, amount: 1000, type: "income", category: "Salary" },
  { id: 4, amount: 300, type: "expense", category: "Rent" },
];

//thought this code will be more clean and professional if i use .filter() method and .reduce() method

function transactionFilter(getData, getType) {
  const returnData = {
    filteredItems: [],
    totalAmount: 0,
  };

  for (const single of getData) {
    if (single.type.toLowerCase() === getType.toLowerCase()) {
      returnData.totalAmount += single.amount;

      returnData.filteredItems.push(single);
    }
  }

  if (!returnData.filteredItems.length) {
    return "No transaction found";
  }

  return returnData;
}

const result4 = transactionFilter(transactions, "income");
console.log(result4);
