const form = document.getElementById("add-su");

function save(w) {
  let usrs = [];
  let savesusrs = localStorage.getItem("student");
  if (savesusrs) {
    usrs = JSON.parse(savesusrs);
  }
  usrs.push(w);
  console.log(usrs);
  localStorage.setItem("student", JSON.stringify(usrs));
}
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
function submit(e) {
  e.preventDefault();

  //   let name = e.target.name.value;
  // let date=e.target.dateB.value
  // let password=e.target.pass.value
  // let codeMeli=e.target.codemeli.value
  let { name, dateB: date, pass: password, codemeli: codeMeli } = e.target;
  if (
    name.value.length <= 0 ||
    date.value.length <= 0 ||
    password.value.length <= 0 ||
    codeMeli.value.length <= 0
  ) {
    return;
  }

  let usr = {
    studentName: name.value,
    dateOfBirth: date.value,
    userPass: password.value,
    idCode: codeMeli.value,
    nomreh:[
      {dars:"math",nomreh:null},
      {dars:"farsi",nomreh:null},
      {dars:"arabic",nomreh:null},
    ]
  };

  console.log(name.value);
  name.value = "";
  date.value = "";
  password.value = "";
  codeMeli.value = "";
  save(usr);
}

form.addEventListener("submit", submit);
