// সমস্যা: "Budget-Friendly Shopping Cart"
// ধরা যাক, তোমার কাছে কিছু গ্রোসারি পণ্যের ডাটা আছে। তোমার কাজ হলো এই পণ্যগুলো দিয়ে একটি টেবিল বা লিস্ট তৈরি করা এবং শেষে টোটাল কত খরচ হলো তা বের করা।

/**
 * ১. HTML-এ একটি <table> বা একটি <div> তৈরি করো যার আইডি হবে cart-container।
২. জাভাস্ক্রিপ্ট ব্যবহার করে একটি ফাংশন (বা সরাসরি লুপ) লেখো যা এই প্রতিটি প্রোডাক্টের জন্য একটি করে রো (Row) বা লিস্ট আইটেম তৈরি করবে।
৩. প্রতিটি লাইনে দেখাবে: Product Name — Price x Quantity = Total Price (যেমন: Rice — 65 x 5 = 325 Taka)।
৪. কন্ডিশনাল স্টাইলিং (Logic):

যদি কোনো পণ্যের ক্যাটাগরি "Dairy" হয়, তবে সেটির ফন্ট কালার নীল (Blue) হবে।

যদি কোনো পণ্যের টোটাল প্রাইস (Price x Quantity) ৫০০ টাকার বেশি হয়, তবে সেই লাইনের পাশে একটি লাল রঙের বোল্ড টেক্সট থাকবে: "High Expense!"।
৫. গ্র্যান্ড টোটাল (Grand Total):

সবশেষে একদম নিচে একটি বড় করে হেডিং বা প্যারাগ্রাফে দেখাবে: "Total Budget Needed: [সবগুলো টোটাল প্রাইসের যোগফল] Taka"।
 */

const products = [
  { name: "Rice", price: 65, quantity: 5, category: "Grains" },
  { name: "Milk", price: 80, quantity: 7, category: "Dairy" },
  { name: "Apple", price: 200, quantity: 1, category: "Fruits" },
  { name: "Lentil", price: 140, quantity: 3, category: "Grains" },
  { name: "Egg", price: 12, quantity: 12, category: "Dairy" },
];

const table = document.getElementById("grocery-table");
let totalPrice = 0;
table.innerHTML = `


<tr>
<th>Product Name</th>
<th>Total Price</th>
<th>Category</th>
<th>Expense</th>
</tr>

`;

for (const x of products) {
  const tr = document.createElement("tr");
  const price = x.price * x.quantity;
  totalPrice += price;
  tr.innerHTML = `
<td>${x.name}</td>
<td class='price'>${price}</td>
<td>${x.category}</td>
`;
  table.appendChild(tr);

  if (x.category.toLowerCase() === "dairy") {
    tr.style.color = "blue";
  }

  const trChildren = tr.children;

  const numberPrice = Number(trChildren[1].innerText);

  if (numberPrice > 500) {
    const td = document.createElement("td");

    td.innerText = `High Expense`;
    td.style.color = "red";
    td.style.fontWeight = "bold";

    tr.appendChild(td);
  }
}

const tr2 = document.createElement("tr");

tr2.innerHTML = `
<td colspan='2'>Total Cost</td>
<td colspan='2'>${totalPrice}</td>
`;

tr2.style.fontWeight='bold'
tr2.style.fontStyle='italic'

table.appendChild(tr2);
