//Problem 40: The Library Inventory Summary

/**
 * ১. একটি ফাংশন তৈরি করো যা books অ্যারেকে ইনপুট হিসেবে নিবে। 
 * 
 * ২. তোমাকে এমন একটি অবজেক্ট রিটার্ন করতে হবে যেটিতে তিনটি তথ্য থাকবে: * totalBooks: লাইব্রেরিতে মোট কতটি বইয়ের এন্ট্রি আছে (অ্যারের দৈর্ঘ্য)। * availableBooks: যে বইগুলোর স্টক ০-এর বেশি আছে, তাদের মোট সংখ্যা। * totalStockValue: স্টক থাকা প্রতিটি বইয়ের (price * stock) যোগফল। 
 * 
 * ৩. আউটপুট অবজেক্টের ফরম্যাট হবে এরকম: { totalBooks: 5, availableBooks: 4, totalStockValue: 12300 } (সংখ্যাগুলো উদাহরণ মাত্র)।
 */



const books = [
    { title: 'JavaScript Hero', author: 'Riad', price: 500, stock: 12 },
    { title: 'Python Pro', author: 'Siam', price: 450, stock: 5 },
    { title: 'React Master', author: 'Arafat', price: 600, stock: 0 },
    { title: 'Node Ninja', author: 'Nabil', price: 550, stock: 8 },
    { title: 'CSS King', author: 'Tanvir', price: 300, stock: 15 }
];



 function InventorySummery(libararyData){


const returnData={

    totalBooks:libararyData.length,
    availableBooks:0,
    totalStockValue:0
}


for(const book of libararyData){

    //availableBooks will increase 1 when the if conditon will true such as stock grater than 0

if(book.stock>0){

   returnData.availableBooks++

   //increasing for every book 
   returnData.totalStockValue+=(book.price*book.stock)
}


}


return returnData





}

const result=InventorySummery(books)
console.log(result)



