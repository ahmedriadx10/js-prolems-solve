
//Problem solve-2 

/**
 * ১৬. Find the Longest Word (সবচেয়ে বড় শব্দ)Task: একটি ফাংশন লিখো যা একটি বাক্য (Sentence) নেবে এবং ওই বাক্যের মধ্যে থাকা সবচেয়ে বড় শব্দটি খুঁজে বের করবে।Data: "I love programming more than anything"
 */

const data = "I love programming more than anything";

function largeWord(usrData) {
  const splitUsrData = usrData.split(" ");

  let largeWord = splitUsrData[0];

  for (const l of splitUsrData) {
    if (l.length > largeWord.length) {
      largeWord = l;
    }
  }

  

  return largeWord;
}

const result=largeWord(data)
// console.log(result)


/*
 * ১৭. Average Calculation (গড় নির্ণয়)Task: একটি ফাংশন লিখো যা একটি সংখ্যার অ্যারে নেবে এবং ওই সংখ্যাগুলোর গড় (Average) বের করবে।Data: const marks = [85, 92, 78, 95, 88]; 
 */

 const marks = [85, 92, 78, 95, 88]; 

function avgCalc(usrData){

let totalDataSum=0

for(const s of usrData){

  totalDataSum+=s

}

const avg=totalDataSum/usrData.length

return avg

}


const avgResult=avgCalc(marks)

// console.log(avgResult)



/**
 * ১৮. Find the Second Largest (দ্বিতীয় সর্বোচ্চ সংখ্যা)Task: একটি অ্যারে থেকে সবচেয়ে বড় সংখ্যা নয়, বরং দ্বিতীয় সর্বোচ্চ (Second Largest) সংখ্যাটি খুঁজে বের করো।Data: const scores = [10, 50, 20, 45, 60, 35];
 */


const scores = [10, 50, 20, 45, 60, 35];


function secLargeNum(inpData){

  let largNum=0
let secLargeNum=0
  for(const l of inpData){

    if(l>largNum){
      largNum=l
    }

  }


for(const secLar of inpData ){

if(secLar>secLargeNum && secLar<largNum){

  secLargeNum=secLar

}

}



   return secLargeNum



}

const secLargeNumber=secLargeNum(scores)
// console.log(secLargeNumber)

/**
 * ১৯. Grade Calculator (গ্রেড পয়েন্ট)Task: একটি ফাংশন লিখো যা নম্বর (Number) ইনপুট নেবে এবং গ্রেড রিটার্ন করবে।৮০-১০০: A+৭০-৭৯: A৬০-৬৯: A-৫০-৫৯: B৩৩-৪৯: C০-৩২: FData: ৮২, ৫৪ এবং ২৮ এর জন্য চেক করো।
 */


function gradeChecker(usrMark){

  if(usrMark>100){

    return 'Grade system allow only 0-100 Marks'
  }

if(usrMark>=80){

  return 'Your grade A+'

}

else if(usrMark<=79 && usrMark>=70){
  return 'Your grade A'
}

else if (usrMark<=69 && usrMark>=60){
  return 'Your grade A-'
}
else if(usrMark<=59 && usrMark>=50){
  return 'Your grade B'
}
else if(usrMark<=49 && usrMark>=40){
  return 'Your grade C'
}

else if(usrMark<=39 && usrMark>=33){
  return 'Your grade D'
}

else{
  return 'Your grade F'
}

//the logic can be reverse system like usrMark>=70 && usrMakr<=79 return A


}


const checkResult=gradeChecker(81)
// console.log(checkResult)
// console.log(gradeChecker(32))
// console.log(gradeChecker(58))
// console.log(gradeChecker(15))


/**
 * ২০. Simple Interest (সরল মুনাফা)Task: একটি ফাংশন লিখো যা আসল টাকা (Principal), সময় (Time in years) এবং বার্ষিক মুনাফার হার (Rate) নেবে এবং মোট মুনাফা (Interest) ক্যালকুলেট করে দেবে।Formula: $I = P \times r \times t$Data: আসল ৫০০০ টাকা, সময় ৩ বছর, হার ১০%। 
 */


function interestCalculator(mainMoney,time,intRate){

//we counting time in years

//Formula P=main Money * rate * time

const rateConvPercent=intRate/100

const intCalc=(mainMoney*rateConvPercent)*time


return intCalc


}



// const tester=interestCalculator(1000,1,10)
// console.log(tester)


// console.log(interestCalculator(100000,1,3))

// console.log(interestCalculator(5000,5,5))

