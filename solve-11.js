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


const testData="hel "
const testData2='idKhullam3'


function passwordStrenchChecker(getPassword){

let hasNumber=0;
let hasUpper=0;
const reasons=[]


const splitString=getPassword.split('')


if(getPassword.length<8){
  reasons.push('password char less than 8')
}


for(const x of splitString){

  if(Number(x)>=0 && Number(x)<=9){

    hasNumber++
  }

  if(x>='A' && x<='Z'){

    hasUpper++
  }



}


if(getPassword.includes(' ')){
  reasons.push('blank space found')
}


if(hasNumber===0){
  reasons.push('No Number Found')
}

else if (hasUpper===0){
  reasons.push('No Upper Case Found')
}





return {

  valid:reasons.length===0,
reasons

}


}



const reuslt3=passwordStrenchChecker(testData2)

console.log(reuslt3)













