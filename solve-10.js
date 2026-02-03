//Problem 52: The Score Card Analyzer (Array & Object Mastery)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই classData ইনপুট হিসেবে নিবে।
 *
 * ২. তোমাকে এমন একটি নতুন অ্যারে রিটার্ন করতে হবে যেখানে শুধুমাত্র সেইসব স্টুডেন্টের নাম (Name) থাকবে যারা প্রত্যেকটি সাবজেক্টে (Physics, Chemistry, Math) কমপক্ষে ৫০ মার্কস পেয়ে পাস করেছে।
 *
 * ৩. বোনাস চ্যালেঞ্জ (ঐচ্ছিক): যারা পাস করেছে, তাদের নামের পাশে তাদের গড় (Average) মার্কসটিও অবজেক্ট আকারে দেখাও। যেমন: [{ name: 'Riad', avg: 90 }, ...]।
 */

const classData = [
  { name: "Riad", physics: 85, chemistry: 90, math: 95 },
  { name: "Siam", physics: 40, chemistry: 45, math: 38 },
  { name: "Arafat", physics: 70, chemistry: 75, math: 80 },
  { name: "Nabil", physics: 55, chemistry: 50, math: 52 },
];

function scoreAnalyzer(scoreData) {
  const localData = structuredClone(scoreData);
  const returnableData = [];
  const pass_mark = 50;

  for (const x of localData) {
    if (
      x.physics >= pass_mark &&
      x.chemistry >= pass_mark &&
      x.math >= pass_mark
    ) {
      const avg = (x.physics + x.chemistry + x.math) / 3;
      //sometimes avg can be floating point so need to control floating number

      const avgConvFloat = parseFloat(avg.toFixed(2));
      const newData = {
        name: x.name,
        avg: avgConvFloat,
      };

      returnableData.push(newData);
    }
  }
  return returnableData;
}

const result = scoreAnalyzer(classData);
// console.log(result);

//Problem 53: The Advanced Object Loop (Key-Value Mastery)

/*

*১. একটি ফাংশন তৈরি করো যা এই অবজেক্টটি ইনপুট হিসেবে নিবে। 

২. ফাংশনটিকে বের করতে হবে এই ইউজারের মোট ফলোয়ার (Total Followers) কত। 

৩. শর্ত হলো: তোমাকে Object.values() অথবা একটি for...in লুপ ব্যবহার করতে হবে (যাতে প্রপার্টির নাম যা-ই হোক, সবগুলোর যোগফল বের করা যায়)।
 */

const socialStats = {
  facebook: 500,
  instagram: 1200,
  linkedin: 800,
  twitter: 300,
  youtube: 1500,
};

function totalFollower(getFollowrData) {
  let totalFollowerSum = 0;

  for (const x in getFollowrData) {
    totalFollowerSum += getFollowrData[x];
  }

  return totalFollowerSum;
}

const result2 = totalFollower(socialStats);
// console.log(result2)

//using Object.values() here we can use Object.keys() but that almost similar like using for in loop

function followerCounter(getData) {
  let count = 0;

  const followerNumbers = Object.values(getData);

  for (const num of followerNumbers) {
    count += num;
  }

  return count;
}

const result3 = followerCounter(socialStats);
// console.log(result3)

// Problem 54: The Complex Nesting (Nested Array in Object)

/**
 * ১. একটি ফাংশন তৈরি করো যা এই mallStore অবজেক্টটি ইনপুট হিসেবে নিবে। 
 * 
 * ২. তোমাকে একটি নতুন অবজেক্ট রিটার্ন করতে হবে যেখানে ২টি প্রপার্টি থাকবে: - totalItemsCount: এই স্টোরের সবগুলো সেকশনে মোট কতগুলো আইটেম আছে তার সংখ্যা (যেমন: ৩ + ২ + ৪ = ৯)। - allProductNames: সবগুলো প্রোডাক্টের নাম নিয়ে একটি বড় অ্যারে।

আউটপুট দেখতে এমন হওয়া উচিত: { totalItemsCount: 9, allProductNames: ['Shirt', 'Pant', 'T-shirt', 'Saree', ...] }
 */

const mallStore = {
  storeName: "Fashion-Point",
  sections: [
    { name: "Men", items: ["Shirt", "Pant", "T-shirt"] },
    { name: "Women", items: ["Saree", "Kurti"] },
    { name: "Kids", items: ["Toys", "Diaper", "Milk", "Pants"] },
  ],
};

function dataMastery(getData) {
  const returnableData = {
    totalItemsCount: 0,
    allProductsNames: [],
  };

  for (const x of getData.sections) {
    returnableData.totalItemsCount += x.items.length;
    //here we can use ...spread operation but have to maintain course flow
    //here we can again run a loop above x.itmes then push individual x.itmes elements

    // with tricky system we can use .slice() method but i think thats enough
    returnableData.allProductsNames = returnableData.allProductsNames.concat(
      x.items,
    );
  }

  return returnableData;
}

const result4 = dataMastery(mallStore);

// console.log(result4);



// Problem 55: The Data Protection Challenge


/**
 * 
 * ১. একটি ফাংশন তৈরি করো যা originalInventory অবজেক্টকে ইনপুট হিসেবে নিবে। 
 * 
 * ২. ফাংশনের ভেতরে এমনভাবে একটি কপি তৈরি করো যাতে মূল অবজেক্টে কোনো প্রভাব না পড়ে। 
 * 
 * ৩. সেই নতুন কপির products অ্যারোতে একটি নতুন আইটেম 'Tablet' যোগ করো এবং category পরিবর্তন করে 'Modern Gadgets' করো। 
 * 
 * ৪. শেষে দুটি অবজেক্টই (Original এবং Updated) রিটার্ন করো বা কনসোল করো যাতে দেখা যায় অরিজিনালটা পরিবর্তন হয়নি।
 */


const originalInventory = {
    category: 'Electronics',
    products: ['Laptop', 'Mobile', 'Watch']
};


function tester(getData){

   //here we can non primitive data using two powerfull and recomended way
   //1.JSON.parse(JSON.stringify(non-primitive data)) // this is advance ES6 topic
   //2.structuredClone(non-primitiveData)
//thought we know its can not copy object methods properly but overall nested copy easily possible using two methods



const copyData=structuredClone(getData)

copyData.category='Modern Gadgets'
copyData.products.push('headphone')

//main arguments 
// console.log(getData)
//copy data there are changes 
// console.log(copyData)


}



//I showing here using console.log() because non-primitve shares reference that means memory location as if we created a copy value and changed prop value so there are no effects inside the main data
// console.log(originalInventory)
tester(originalInventory)


// Problem 56: The Real-Life Stock Tracker (Loop, Logic & Math)

// The Data: একটি দোকানের বিভিন্ন ক্যাটাগরির প্রোডাক্ট এবং তাদের স্টক লেভেল দেওয়া আছে।



/**
 * 
১. একটি ফাংশন তৈরি করো যা এই inventory অ্যারেটি ইনপুট হিসেবে নিবে।
২. তোমাকে একটি অবজেক্ট রিটার্ন করতে হবে যেখানে ৩টি তথ্য থাকবে:
- outOfStock: একটি অ্যারে যাতে শুধু সেইসব প্রোডাক্টের নাম থাকবে যাদের স্টক 0।
- totalValue: স্টকে থাকা সব প্রোডাক্টের মোট দাম (দাম $\times$ স্টক)।
- electronicsCount: শুধু 'Electronics' ক্যাটাগরির কয়টি প্রোডাক্ট স্টকে (Stock > 0) আছে।
 */


const inventory = [
    { name: 'Laptop', price: 50000, stock: 5, category: 'Electronics' },
    { name: 'Shirt', price: 1200, stock: 0, category: 'Clothing' },
    { name: 'Mobile', price: 20000, stock: 10, category: 'Electronics' },
    { name: 'Pant', price: 1500, stock: 2, category: 'Clothing' },
    { name: 'Watch', price: 3000, stock: 0, category: 'Electronics' }
];



function inventoryInquiry(getData){
//self added just practice

    if(!Array.isArray(getData)){
        return  'please input inventory data using a array without function will crash!'
    }


const returnableData={
outOfStock:[],
totalValue:0,
electronicsCount:0

}

const compare_category='electronics'


for(const x of getData){

//it will run every single products object
returnableData.totalValue+=(x.price*x.stock)

//if block code will run when the products stock will be 0
if(x.stock===0){

   returnableData.outOfStock.push(x.name)
}


//used conditon together 
if(x.category.toLowerCase()===compare_category && x.stock>0){

    returnableData.electronicsCount++
}


}


return returnableData


}

const result5=inventoryInquiry(inventory)


console.log(result5)