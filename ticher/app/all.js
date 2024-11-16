const all = document.getElementById("students-table");


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
  all.appendChild(tableRow);
};

window.addEventListener("load", function name(p) {
  let loadstu = this.localStorage.getItem("student");
  loadstu = JSON.parse(loadstu);

  loadstu.forEach(addStu);
});
