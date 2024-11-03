const gozaresh = document.getElementById("students-table");

let i = 0;
const anim = setInterval(() => {
  i++;
  if (i >= 365) {
    i = 0;
  }
  // let i = Math.round(Math.random() * 365)
  document.body.style.backgroundImage = `linear-gradient(${i}deg, #0db6dd, #000000)`;
  // document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random() * 365)}deg, #0db6dd, #000000)`;
  // document.body.style.backgroundImage = `linear-gradient(${i}deg, #ff0000, #0000ff)`;
  // if(i === 69){
  //   clearInterval(anim)
  // }
}, 85);

const addStu = ({ dateOfBirth, idCode, nomreh, studentName, userPass }) => {
  const tableRow = document.createElement("tr");
  const nameTag = document.createElement("td");

  nameTag.innerText = studentName;
  const dateTag = document.createElement("td");
  dateTag.innerText = dateOfBirth;

  const passTag = document.createElement("td");
  passTag.innerText = userPass;

  const codeMeliTag = document.createElement("td");
  codeMeliTag.innerText = idCode;

  const btnTag = document.createElement("td");
  btnTag.innerText = "delete";

  const nomreTag = document.createElement("td");
  let n = 0;
  for (const r of nomreh) {
    n += Number(r.nomreh);
  }
  n = n / nomreh.length;
  n = n.toFixed(2);
  nomreTag.innerText = n;

  tableRow.appendChild(nameTag);
  tableRow.appendChild(dateTag);
  tableRow.appendChild(passTag);
  tableRow.appendChild(codeMeliTag);
  tableRow.appendChild(nomreTag);
  tableRow.appendChild(btnTag);
  gozaresh.appendChild(tableRow);
};

window.addEventListener("load", function name(p) {
  let loadstu = this.localStorage.getItem("student");
  loadstu = JSON.parse(loadstu);

  loadstu.forEach(addStu);
});
