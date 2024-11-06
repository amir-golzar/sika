const form = document.getElementById("add-su");
const d = document.getElementById("d");
const table = document.getElementById("students-table");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let getindex = localStorage.getItem("student");
  const { user, ramz } = e.target;

  getindex = JSON.parse(getindex);

  const { dateOfBirth, idCode, nomreh, studentName, userPass } = getindex.find(
    (student) => {
      return student.idCode === user.value;
    }
  );

  const tableRow = document.createElement("tr");
  const nameTag = document.createElement("td");

  nameTag.innerText = studentName;
  const dateTag = document.createElement("td");
  dateTag.innerText = dateOfBirth;

  const passTag = document.createElement("td");
  passTag.innerText = userPass;
  console.log(userPass);

  const idcodee = document.createElement("td");
  idcodee.innerText = idCode;

  const nomreTag = document.createElement("td");
  // [
  //   {dars: "math",nomreh: "4"},
  //   {dars: "math",nomreh: "4"},
  // ]

  let TotalNomreh = 0;
  nomreh.forEach((dars) => {
    TotalNomreh += Number(dars.nomreh);
  });

  // console.log(TotalNomreh);
  TotalNomreh /= nomreh.length;

  nomreTag.innerText = TotalNomreh.toFixed(2);
  
  if (TotalNomreh===0) {
    alert("خاک بر سرت")
  }
  if (TotalNomreh===20) {
    alert("تبارک الله")
    
  }

  table.appendChild(tableRow);
  tableRow.appendChild(nameTag);
  tableRow.appendChild(dateTag);
  tableRow.appendChild(idcodee);
  tableRow.appendChild(nomreTag);

  e.target.remove();
  d.remove();

  table.style.display = "block";
  // td.innerText = idCode;
});

let i = 0;
const anim = setInterval(() => {
  i++;
  if (i >= 365) {
    i = 0;
  }
  //   let i = Math.round(Math.random() * 365)
  document.body.style.backgroundImage = `linear-gradient(${i}deg, #0db6dd, #000000)`;
  //   document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random() * 365)}deg, #0db6dd, #000000)`;
  //   document.body.style.backgroundImage = `linear-gradient(${i}deg, #ff0000, #0000ff)`;
  //   if(i === 69){
  //   clearInterval(anim)
  // }
}, 85);
