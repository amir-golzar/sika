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

  if (TotalNomreh === 0) {
    alert("خاک بر سرت");
  }

  function f(params) {
    const a = document.createElement("div");
    a.classList.add("hart");
    a.innerText = "kkk";
    document.body.appendChild(a);
  }
  function heart() {
    const a = document.createElement("div");
    a.classList.add("hart");
    a.innerHTML = "&#128151;";
    // a=Math.random() *100
    a.style.left = `${Math.round(Math.random() * 100)}vw`;
    document.body.appendChild(a);
    setTimeout(() => {
      a.remove();
    }, 3410);
  }
  if (TotalNomreh === 20) {
    const voice = document.createElement("audio");
    voice.src = "../dast.mp3";
    voice.setAttribute("hidden", "on");
    voice.play();
    document.body.appendChild(voice);
    const counter = setInterval(() => {
      for (let index = 0; index < 28; index++) {
        heart();
      }
      const timer = setTimeout(() => {
        clearInterval(counter);
        clearTimeout(timer);
      }, 3410);
      const tt = setTimeout(() => {
        voice.remove();
        clearTimeout(tt);
      }, 6000);
    }, 100);
    // alert(4777777)
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

// let i = 0;
// const anim = setInterval(() => {
//   i++;
//   if (i >= 365) {
//     i = 0;
//   }
//   //   let i = Math.round(Math.random() * 365)
//   document.body.style.backgroundImage = `linear-gradient(${i}deg, #0db6dd, #000000)`;
//   //   document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random() * 365)}deg, #0db6dd, #000000)`;
//   //   document.body.style.backgroundImage = `linear-gradient(${i}deg, #ff0000, #0000ff)`;
//   //   if(i === 69){
//   //   clearInterval(anim)
//   // }
// }, 85);
