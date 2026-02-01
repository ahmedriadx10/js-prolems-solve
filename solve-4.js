/**
 * Problem -21
 * ১. টাস্ক ১ (Valid Items):এমন একটি ফাংশন লেখো যা কার্ট থেকে শুধুমাত্র সেই পণ্যগুলোকে আলাদা করবে যেগুলোর quantity ০ এর চেয়ে বেশি।
 * 
 * ২. টাস্ক ২ (Item Total):প্রতিটি পণ্যের জন্য আলাদাভাবে মোট দাম কত হচ্ছে তা বের করো। (যেমন: T-shirt এর ক্ষেত্রে $1200 \times 2 = 2400$)। এই হিসাবটি প্রতিটি অবজেক্টে totalPrice নামে নতুন একটি প্রপার্টি হিসেবে যোগ করো।
 * 
 * ৩. টাস্ক ৩ (Grand Total):সবশেষে, কার্টে থাকা সব পণ্যের মোট দাম (Grand Total) কত হয়েছে তা একটি সংখ্যার (Number) মাধ্যমে আউটপুট দাও।
 */

const shoppingCart = [
    { name: 'T-shirt', price: 1200, quantity: 2 },
    { name: 'Jeans', price: 2500, quantity: 1 },
    { name: 'Shoes', price: 3500, quantity: 1 },
    { name: 'Socks', price: 150, quantity: 4 },
    { name: 'Watch', price: 5000, quantity: 0 } // কাস্টমার এটি সিলেক্ট করলেও স্টকে নেই
];



function shppingDataProcess(productData){

  const stockProducts=[]
let grandTotal=0

  for(const s of productData){

if(s.quantity>0){
  stockProducts.push(s)
}

  }


  for(const x of stockProducts){

    x.totalPrice=x.price*x.quantity

    //calculating grand price after creating new object property totalPrice
grandTotal+=x.totalPrice

  }

return grandTotal


}


const result=shppingDataProcess(shoppingCart)
// console.log(result)


/**
 * Problem -22
 * ১. একটি ফাংশন তৈরি করো যা ইনপুট হিসেবে এই bookList অ্যারেটি নিবে। 
 * 
 * ২. লুপ ব্যবহার করে একটি নতুন অ্যারে তৈরি করো যেখানে প্রতিটি বইয়ের নাম একবারই থাকবে। অর্থাৎ, ডুপ্লিকেট নামগুলো বাদ দিতে হবে। 
 * 
 * ৩. আউটপুট হিসেবে সেই ইউনিক নামের অ্যারেটি রিটার্ন করো।
 */


const bookList = [
    'JavaScript', 'Python', 'JavaScript', 
    'C++', 'Java', 'Python', 'Ruby', 'Java'
];

function unicBookList(booklistData){

  const unicBooks=[]


  for(const x of booklistData){

    
// if unicBooks array hasn't this item then the item will push

    if(!unicBooks.includes(x)){

      unicBooks.push(x)

    }

  }

return unicBooks

}

//the problem solve can possible using  new Set()  witout condition 
const result2=unicBookList(bookList)
// console.log(result2)



/**
 * তোমার কাজ: ১. একটি ফাংশন তৈরি করো যা এই students অ্যারেকে ইনপুট হিসেবে নিবে।
 * 
 * 
 *  ২. লুপ চালিয়ে বের করো কোন স্টুডেন্ট সবথেকে বেশি মার্কস (marks) পেয়েছে। 
 * 
 * 
 * ৩. আউটপুট হিসেবে সেই স্টুডেন্টের সম্পূর্ণ অবজেক্টটি রিটার্ন করো (যেমন: { name: 'Arafat', marks: 95 })।
 */


const students = [
    { name: 'Riad', marks: 85 },
    { name: 'Siam', marks: 92 },
    { name: 'Tanvir', marks: 78 },
    { name: 'Arafat', marks: 95 },
    { name: 'Nabil', marks: 88 }
];



function topStudent(studentData){

let topStudentObj=studentData[0]


for(const x of studentData){


  if(x.marks>topStudentObj.marks){

topStudentObj=x

  }
}

return topStudentObj


}

const result3=topStudent(students)
// console.log(result3)



/**
 * তোমার কাজ: ১. একটি ফাংশন তৈরি করো যা employees অ্যারেকে ইনপুট হিসেবে নিবে।
 * 
 * 
 *  ২. অভিজ্ঞতার ওপর ভিত্তি করে প্রত্যেকের বোনাস নির্ধারণ করো: * যাদের অভিজ্ঞতা ৫ বছর বা তার বেশি, তারা মূল বেতনের ১০% বোনাস পাবে। * যাদের অভিজ্ঞতা ৫ বছরের কম, তারা মূল বেতনের ৫% বোনাস পাবে। 
 * 
 * ৩. ফাংশনটি একটি নতুন অ্যারে রিটার্ন করবে যেখানে প্রতিটি অবজেক্টে bonusAmount এবং totalSalary (মূল বেতন + বোনাস) নামে দুটি নতুন প্রপার্টি থাকবে।
 */


const employees = [
    { name: 'Abir', salary: 25000, experience: 3 },
    { name: 'Nila', salary: 45000, experience: 6 },
    { name: 'Sajid', salary: 30000, experience: 2 },
    { name: 'Mitu', salary: 60000, experience: 8 },
    { name: 'Rony', salary: 35000, experience: 4 }
];


function employeesBonusCalc(employeesData){

  //removing refference issue here we can use many trick but now i am using .slice trick
//I didn't used spread operation for 2 reason first:my course flow secnod:it can not copy nested data but .slice can work properly
//here we can use .concat() method like new array will be mainArray+[] or looping data and push  new array but .slice shortcut


const employeeNewData=employeesData.slice(0)
const experience=5

//bonous percentage
const topBonus=10/100
const minBonus=5/100

for(const e of employeeNewData){

if(e.experience>=experience){
    e.bonusAmmout=e.salary*topBonus

  e.totalSalary=e.salary+e.bonusAmmout
}


else{

  
  e.bonusAmmout=e.salary*minBonus

  e.totalSalary=e.salary+e.bonusAmmout
}


}


return employeeNewData


}


const result4=employeesBonusCalc(employees)
// console.log(result4)





/**
 * ১. একটি ফাংশন তৈরি করো যা phones অ্যারেকে ইনপুট হিসেবে নিবে। 
 * 
 * 
 * ২. ঐ দোকানে থাকা সব ফোনের গড় দাম (Average Price) কত তা বের করো।
 * 
 *  ৩. আউটপুট হিসেবে শুধুমাত্র একটি নম্বর (গড় দাম) রিটার্ন করো।
 */






const phones = [
    { model: 'PhoneA', price: 30000, color: 'Black' },
    { model: 'PhoneB', price: 18000, color: 'White' },
    { model: 'PhoneC', price: 45000, color: 'Silver' },
    { model: 'PhoneD', price: 25000, color: 'Blue' },
    { model: 'PhoneE', price: 32000, color: 'Black' }
];


function allPhoneAvgPrice(phonesData){

let totalPriceSum=0


for(const x of phonesData){
  totalPriceSum+=x.price
}

  
const priceAvg=totalPriceSum/phonesData.length

return priceAvg

}






const result5=allPhoneAvgPrice(phones)
console.log(result5)





