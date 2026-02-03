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
    name: 'Tech-Hero',
    branches: [
        { city: 'Dhaka', employees: 50, info: { established: 2010, manager: 'Siam' } },
        { city: 'Chittagong', employees: 30, info: { established: 2015, manager: 'Riad' } },
        { city: 'Sylhet', employees: 20, info: { established: 2018, manager: 'Arafat' } }
    ]
};



function nestedDataExplorer(dataList){

const returnableData=[]


for(const data of dataList.branches){


const branchesMessage='The'.concat(' ',data.city,' ','brach',' ','is managed by',' ',data.info.manager,' ','since',' ',data.info.established)

returnableData.push(branchesMessage)

}

return returnableData

}

const result=nestedDataExplorer(company)
console.log(result)