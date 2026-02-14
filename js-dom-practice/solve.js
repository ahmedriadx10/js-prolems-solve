const students = [
  { name: "Riad Ahmed", marks: 95, city: "Dhaka" },
  { name: "Ahmed Riad", marks: 92, city: "Chittagong" },
  { name: "Sifat", marks: 92, city: "Rajshahi" },
  { name: "Tanvir", marks: 82, city: "Sylhet" },
  { name: "Junaid", marks: 78, city: "Khulna" },
];

const mainSection = document.getElementById("student-data");
mainSection.classList.add("container");

for (const x of students) {
  // data main div
  const div = document.createElement("div");
  div.innerHTML = `
<h2>${x.name}</h2>
<p>Marks: ${x.marks}</p>
<p>City: ${x.city}</p>
`;

  if (x.marks > 80) {
    div.style.border = "3px solid gold";
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerText = "ScholarShip Candidate";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold";
  } else {
    div.style.border = "3px solid gray";
  }

  //used css wrote style for save time
  div.classList.add("card");

  mainSection.appendChild(div);
}
