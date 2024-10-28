let studentsTable = document.getElementById("students-table");

const createStudentData = ({
  studentName: name,
  dateOfBirth: date,
  userPass: pass,
  idCode: codeMeli,
}) => {
  const nameTag = document.createElement("td");
  const tableRow = document.createElement("tr");

  nameTag.innerText = name;
  const dateTag = document.createElement("td");
  dateTag.innerText = date;
  const passTag = document.createElement("td");
  passTag.innerText = pass;
  const codeMeliTag = document.createElement("td");
  codeMeliTag.innerText = codeMeli;

  tableRow.appendChild(nameTag);
  tableRow.appendChild(dateTag);
  tableRow.appendChild(passTag);
  tableRow.appendChild(codeMeliTag);
  studentsTable.appendChild(tableRow);
};

window.addEventListener("load", (e) => {
  let savedStudents = localStorage.getItem("student");
  if (!savedStudents) {
    console.log(window.location.pathname);
    // window.location.pathname = "/pages/addstudent.html";
    return;
  }
  savedStudents = JSON.parse(savedStudents);

  savedStudents.forEach(createStudentData);
});