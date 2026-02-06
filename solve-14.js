//তোমার কাছে একটি ইউজার অবজেক্ট আছে। তোমাকে একটি ফাংশন লিখতে হবে যা চেক করবে ওই ইউজারের address এবং phone নম্বর দেওয়া আছে কি না।

// শর্ত:

// যদি address বা phone এর মধ্যে যেকোনো একটিও না থাকে, তবে রিটার্ন করবে "Information Missing"।

// যদি দুটিই থাকে, তবে রিটার্ন করবে "Profile Complete"।

const user1 = { name: "Riad", age: 22, address: "Rajshahi" }; // phone missing
const user2 = { name: "Siam", age: 24, address: "Dhaka", phone: "01711" }; // complete

function userValidation(usrData) {
  if (usrData.hasOwnProperty("address") && usrData.hasOwnProperty("phone")) {
    return "Profile Completed";
  } else {
    return "Information missing";
  }
}

const result = userValidation(user2);
// console.log(result)

//প্রবলেম ৬৭: বড় সংখ্যা খুঁজে বের করা (অ্যারে অব অবজেক্টস)

//নিচে একটি অ্যারে দেওয়া আছে যেখানে অনেকগুলো স্টুডেন্টের মার্কস দেওয়া আছে। তোমাকে এমন একটি ফাংশন লিখতে হবে যা সবচেয়ে বেশি মার্কস পাওয়া স্টুডেন্টের নাম রিটার্ন করবে।

const students = [
  { name: "Riad", marks: 85 },
  { name: "Siam", marks: 92 },
  { name: "Tanvir", marks: 78 },
  { name: "Amit", marks: 95 },
];

function highestGotStudent(studentsData) {
  let topStudent = studentsData[0];

  for (const x of studentsData) {
    if (x.marks > topStudent.marks) {
      topStudent = x;
    }
  }

  return topStudent.name;
}

const result2 = highestGotStudent(students);
// console.log(result2);


//প্রবলেম ৬৮: অবজেক্ট ফিল্টারিং (Array of Objects)

// তোমার কাছে একটি পণ্যের লিস্ট আছে। তোমাকে একটি ফাংশন লিখতে হবে যা শুধুমাত্র সেইসব পণ্যগুলোর নাম একটি অ্যারে হিসেবে রিটার্ন করবে যেগুলোর দাম ৫০০০ টাকার বেশি।


const products = [
    { name: 'Mobile', price: 15000 },
    { name: 'Watch', price: 3000 },
    { name: 'Tablet', price: 12000 },
    { name: 'Charger', price: 500 }
];



function productFilter(getData){

  const returnData=[]

const compare_price=5000
  for(const single of getData){

    if(single.price>compare_price){
returnData.push(single.name)

    }


  }

  return returnData

}


const result3=productFilter(products)
// console.log(result3)



/**
 * প্রবলেম ৬৯: স্ট্রিং রিভার্স (Array methods use)

একটি ফাংশন লিখো যা একটি স্ট্রিং ইনপুট নিবে এবং স্ট্রিংটিকে উল্টো করে (Reverse) রিটার্ন করবে। (Hint: স্ট্রিংটিকে আগে স্প্লিট করে অ্যারে বানিয়ে ট্রাই করো)।
 */

const data='Hello'


function reverseFirst(str){

let reverse_way=''


for(const s of str){

reverse_way=s+reverse_way


}

return reverse_way
}

const result4=reverseFirst(data)
console.log(result4)



function reverse_sec(getStr){

  const splitStr=getStr.split('')

  const reverseLetter=[]


  for(const sep of splitStr){

    reverseLetter.unshift(sep)
  }

const finalRevStr=reverseLetter.join('')
return finalRevStr


}

const result5=reverse_sec(data)
console.log(result5)


//we can use more trick to reverse a string 
