const products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 1500 }, // eta bad jabe condition e
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 },
];

//testing purpose
const data = [
  { name: "phone", price: 1000 },
  { name: "phone", price: 500 },
  { name: "phone", price: 1700 },
];

function avgCalc(productList) {
  //here we can use truthy falsy trick link !productList.length that means length 0 =falsy
  if (productList.length === 0) {
    return "Product list empthy";
  }

  let totalPriceSum = 0;
  const minPrice = 2000;
  let countProduct = 0;

  for (const p of productList) {
    //i took grater than or equal
    if (p.price >= minPrice) {
      totalPriceSum += p.price;
      countProduct++;
    }
  }

  if (countProduct === 0) {
    return "No Expensive Product Found";
  }

  const avg = totalPriceSum / countProduct;
  /**
   * Use it for two reason
   * sometimes avg result will be float point so reduced float
   * and use .toFixed() inside parseFloat becuase somethimes when we fixed float point then it can convert a string so use parseFloat
   */
  const reduceFloatPoint = parseFloat(avg.toFixed(2));

  return reduceFloatPoint;
}

const result = avgCalc(products);

console.log(result);

//avg result calc and get decision fail or not using 50 mark avg

const student = {
  name: "Riad Ahmed",
  id: 101,
  marks: [85, 90, 78, 92, 45, 88], // marks in different subjects
};


const student2 = {
    name: "Sakib",
  marks: [80, 85, 20, 90, 95, 100]
};

function judgeStudent(studentData) {
  let totalMarks = 0;
  const minAvgMarks = 50;
let countFail=0


  for (const m of studentData.marks) {

    if(m<=32){
      countFail++
    }
    totalMarks += m;


  }


  //I wanna if only once subject student got fail  the function will be end here 

if(countFail>=1){
  return 'Opps'.concat(' ',studentData.name,' ','You failed in',' ',countFail,' ','Subject',' ')
}

  //just used braket notation for understan screen reader



  const avgMarks = totalMarks / studentData["marks"].length;

const avgConvFloat=parseFloat(avgMarks.toFixed(2))

  //I know i should used here template string for make it more meaningfull but in future in sha allah
  //though i can play trick using  .concat()  but i think thats not important for now





//I jusi ignored using truthy and flasy trick like !countFail
if(avgConvFloat>=minAvgMarks && countFail===0){

  
    return "Congratulations".concat(
      " ",
      studentData.name,
      " ",
      "You Passed!!!",
      " ",
      "Avg Mark:",
      " ",
      avgConvFloat,
    );


}
 


else{

    return "Sorry!".concat(
    " ",
    studentData.name,
    " ",
    " You Failed.",
    " ",
    "Because",' ','You avg number',' ',
    " ",
    avgConvFloat,' ','under than',' ',minAvgMarks
  );
}
}

const resutl = judgeStudent(student2);

console.log(resutl);
