const all = document.getElementById("students-table");
let tbody = document.getElementById("tbody");
const search = document.getElementById("search");

const addStu = (params) => {
  //   console.log(3);

  //   console.log(params);
  let { dateOfBirth, idCode, nomreh, studentName, userPass } = params;

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
  //   const tb = document.createElement("tbody")
  //   tb.id = "tbody"
  tbody.appendChild(tableRow);
  //   all.appendChild(tb);
};

function load() {
  let loadstu = localStorage.getItem("student");
  loadstu = JSON.parse(loadstu);

  tbody.remove();
  tbody = document.createElement("tbody");
  all.appendChild(tbody);

  loadstu
    .filter((element) => {
      if (search.value.length === 0) {
        return true;
      } else {
        return element.studentName.includes(search.value);
      }
    })
    .forEach(addStu);
}

window.addEventListener("load", load);
search.addEventListener("input", load);
