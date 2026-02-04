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
console.log(result2);
