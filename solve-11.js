//Problem 1: Word Frequency Counter
// Function name: wordFrequency(sentence)
// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences

// Ignore extra spaces

const data = " I love JS and I love coding and JS is fun";

function wordFrequencyCounter(userData) {
  const returnableData = {};

  const splitedData = userData.split(" ");

  for (const x of splitedData) {
    const newPropLower = x.toLowerCase();

    if (!returnableData.hasOwnProperty(newPropLower)) {
      returnableData[newPropLower] = 0;
    }

    returnableData[newPropLower]++;
  }

  return returnableData;
}

const result = wordFrequencyCounter(data);
// console.log(result);

//Problem 2: Student Marks Analyzer

//Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.

const marks = {
  math: 78,
  english: 65,
  physics: 88,
  bangla: 100,
  chemistry: 99,
};

function analyzeMarks(marksData) {
  //get keys for frequently works
  const objPropNames = Object.keys(marksData);

  const returnableData = {
    total: 0,
    avg: 0,
    highest: objPropNames[0],
    lowest: objPropNames[0],
  };

  for (const name of objPropNames) {
    returnableData.total += marksData[name];

    if (marksData[name] > marksData[returnableData.highest]) {
      returnableData.highest = name;
    }

    if (marksData[name] < marksData[returnableData.lowest]) {
      returnableData.lowest = name;
    }
  }

  const calcAvg = returnableData.total / objPropNames.length;
  const convAvgFloat = parseFloat(calcAvg.toFixed(2));

  returnableData.avg = convAvgFloat;

  return returnableData;
}

const result2 = analyzeMarks(marks);
// console.log(result2);

//Problem 3: Password Strength Checker

//Function name: checkPassword(password)
// Rules:
// Length must be at least 8

// Must contain at least 1 number

// Must contain at least 1 uppercase letter

// Must not contain spaces

const testData = "hel ";
const testData2 = "idKhullam3";

function passwordStrenchChecker(getPassword) {
  let hasNumber = 0;
  let hasUpper = 0;
  const reasons = [];

  const splitString = getPassword.split("");

  if (getPassword.length < 8) {
    reasons.push("password char less than 8");
  }

  for (const x of splitString) {
    if (Number(x) >= 0 && Number(x) <= 9) {
      hasNumber++;
    }

    if (x >= "A" && x <= "Z") {
      hasUpper++;
    }
  }

  if (getPassword.includes(" ")) {
    reasons.push("blank space found");
  }

  if (hasNumber === 0) {
    reasons.push("No Number Found");
  } else if (hasUpper === 0) {
    reasons.push("No Upper Case Found");
  }

  return {
    valid: reasons.length === 0,
    reasons,
  };
}

const reuslt3 = passwordStrenchChecker(testData2);

// console.log(reuslt3);

// Problem 4: Shopping Bill Calculator

//Statement:  Calculate total bill amount and count how many times each item appears.

//Input:

// Output:
// {
//   total: 376,
//   itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
// }

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "Egg", "rice", "oil", "eGg", "sugar", "sugar"];

function calcBill(priceData, itemsData) {
  const returnData = {
    total: 0,
    itemCount: {},
  };

  for (const p in priceData) {
    returnData.total += priceData[p];
  }

  for (const i of itemsData) {
    const lowCaseData = i.toLowerCase();

    if (returnData["itemCount"].hasOwnProperty(lowCaseData)) {
      returnData.itemCount[lowCaseData]++;
    } else {
      returnData.itemCount[lowCaseData] = 1;
    }
  }

  // console.log(returnData);
}

const result4 = calcBill(prices, items);
// console.log(result4);

const prices2 = { pen: 10, book: 50 };
const items2 = ["pen", "pen", "book", "pen"];

const result5 = calcBill(prices2, items2);
// console.log(result5)

// A developer take problems and breakdown then write code

//Problem 5: Remove Duplicates From Array

// Return a new array where duplicate values are removed, keeping the original order.

function removeDuplicates(data) {
  const unicData = [];

  for (const u of data) {
    if (!unicData.includes(u)) {
      unicData.push(u);
    }
  }

  return unicData;
}

const numbers = [5, 3, 5, 2, 3, 9, 2, 7];

const result6 = removeDuplicates(numbers);
// console.log(result6)

//Problem 6: Phonebook Prefix Search

//  Return an array of names that start with the given prefix.

function searchByPrefix(phooneBook, prefix) {
  const returnData = [];

  for (const x in phooneBook) {
    if (x.startsWith(prefix)) {
      returnData.push(x);
    }
  }

  return returnData;
}

const phonebook = {
  rahim: "0181",
  karim: "0172",
  rafi: "0193",
  raju: "017",
  riad: "018",
};
const prefix = "ra";

const result7 = searchByPrefix(phonebook, prefix);
// console.log(result7)

const phonebook3 = { mina: "013", mim: "014", rina: "015" };
const prefix3 = "mi";

const result8 = searchByPrefix(phonebook3, prefix3);
// console.log(result8)

//  Problem 7: Text Stats Generator

//Statement:
//  Return an object containing:
// Characters count excluding spaces

// Words count

// Vowels count

// Consonants count

function textStats(txt) {
  const vowels = "aeiou";
  let countVowel = 0;
  let spaceCount = 0;

  const cutSideSpace = txt.trim();

  const splitText = cutSideSpace.split("");

  for (const t of splitText) {
    const lowerTcase = t.toLowerCase();

    if (vowels.includes(lowerTcase)) {
      countVowel++;
    }

    if (t === " ") {
      spaceCount++;
    }
  }

  const textWords = cutSideSpace.split(" ");

  const consonantsData = splitText.length - spaceCount - countVowel;

  const returnData = {
    characters: splitText.length - spaceCount,
    words: textWords.length,
    vowels: countVowel,
    consonants: consonantsData,
  };

  return returnData;
}

const txtData = " JavaScript is fun to learn ";
const txtData2 = " I am OK";

const result9 = textStats(txtData);
// console.log(result9);




