let studentsTable = document.getElementById("students-table");
// alert(location.pathname)
// let i = 0;
// const anim = setInterval(() => {
//   i++;
//   if (i >= 365) {
//     i = 0;
//   }
//   // let i = Math.round(Math.random() * 365)
//   document.body.style.backgroundImage = `linear-gradient(${i}deg, #0db6dd, #000000)`;
//   // document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random() * 365)}deg, #0db6dd, #000000)`;
//   // document.body.style.backgroundImage = `linear-gradient(${i}deg, #ff0000, #0000ff)`;
//   // if(i === 69){
//   //   clearInterval(anim)
//   // }
// }, 85);

const createStudentData = ({
  studentName: name,
  dateOfBirth: date,
  userPass: pass,
  idCode: codeMeli,
}) => {
  const tableRow = document.createElement("tr");
  const nameTag = document.createElement("td");

  nameTag.innerText = name;
  const dateTag = document.createElement("td");
  dateTag.innerText = date;

  const passTag = document.createElement("td");
  passTag.innerText = pass;

  const codeMeliTag = document.createElement("td");
  codeMeliTag.innerText = codeMeli;

  const btnTag = document.createElement("td");
  // codeMeliTag.innerText = codeMeli;

  const nomreTag = document.createElement("td");
  // codeMeliTag.innerText = codeMeli;

  const delbtn = document.createElement("button");
  delbtn.innerText = "delet";
  delbtn.classList.add("delbtn");
  delbtn.addEventListener("click", deletq);

  const nomre = document.createElement("button");
  nomre.innerText = "nomre";
  nomre.classList.add("nomre");
  nomre.addEventListener("click", function name(params) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const nomreForm = document.createElement("form");
    nomreForm.classList.add("add-sudent");

    const riazi = document.createElement("input");
    riazi.setAttribute("name", "riazii");
    riazi.setAttribute("type", "number");
    riazi.setAttribute("placeholder", "riazi");
    riazi.setAttribute("min", "0");
    riazi.setAttribute("max", "20");

    //
    const arabi = document.createElement("input");
    arabi.setAttribute("name", "arabii");
    arabi.setAttribute("type", "number");
    arabi.setAttribute("placeholder", "arabi");
    arabi.setAttribute("min", "0");
    arabi.setAttribute("max", "20");
    //
    const farsi = document.createElement("input");
    farsi.setAttribute("name", "farsi");
    farsi.setAttribute("type", "number");
    farsi.setAttribute("placeholder", "farsi");
    farsi.setAttribute("min", "0");
    farsi.setAttribute("max", "20");

    const submitNomre = document.createElement("input");
    submitNomre.setAttribute("name", "submitN");
    submitNomre.setAttribute("type", "submit");
    submitNomre.setAttribute("value", "submit");
    submitNomre.id = "saveb";
    nomreForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const { riazii, arabii, farsi } = e.target;

      const savenomre = JSON.parse(localStorage.getItem("student"));
      if (
        arabii.value.length <= 0 ||
        riazii.value.length <= 0 ||
        farsi.value.length <= 0
      ) {
        return;
      }
      // دانش آموز رو از داخل آرایه پیدا کنی
      const found = savenomre.findIndex((student) => {
        return student.idCode === codeMeli;
      });
      // دانش آموز رو ویرایش بکنی
      savenomre[found].nomreh[0].nomreh = riazii.value;
      savenomre[found].nomreh[1].nomreh = farsi.value;
      savenomre[found].nomreh[2].nomreh = arabii.value;

      // اطلاعات ویرایش شده رو ذخیره بکنی
      localStorage.setItem("student", JSON.stringify(savenomre));
      // localStorage.setItem("student1", JSON.stringify(savenomre));
      nomreForm.remove();
      overlay.remove();
    });

    document.body.appendChild(nomreForm);
    nomreForm.appendChild(riazi);
    nomreForm.appendChild(arabi);
    nomreForm.appendChild(farsi);
    nomreForm.appendChild(submitNomre);

    //
    overlay.addEventListener("click", function ff(e) {
      overlay.remove("overlay");
      nomreForm.remove("add-sudent");
    });
    document.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 27:
          overlay.remove("overlay");
          nomreForm.remove("add-sudent");
          break;
      }
    });
    document.body.appendChild(overlay);
  });
  function deletq(del) {
    tableRow.remove();

    let delStudent = localStorage.getItem("student");
    delStudent = JSON.parse(delStudent);
    let dindex = delStudent.findIndex(function (c) {
      return c.idCode === codeMeli;
    });
    delStudent.splice(dindex, 1);

    localStorage.setItem("student", JSON.stringify(delStudent));
  }

  tableRow.appendChild(nameTag);
  tableRow.appendChild(dateTag);
  tableRow.appendChild(passTag);
  tableRow.appendChild(codeMeliTag);
  tableRow.appendChild(nomreTag);
  btnTag.appendChild(delbtn);
  tableRow.appendChild(btnTag);
  nomreTag.appendChild(nomre);
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

  savedStudents
    .filter((student) => student.nomreh[0].nomreh === null)
    .forEach(createStudentData);
});

// (a) => {
//   return a * 2;
// };
// (a) => a * 2;
// a => a * 2;
