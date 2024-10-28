// let {key} = obj
// key is a variable now
function objFuck({ name, age, city }) {
  console.log(
    `hello ${name} you are in ${city} and ${age >= 18 ? "overage" : "underage"}`
  );
}
objFuck({ name: "amir", age: 19, city: "sava" ,father:{name:"ali",city:"galaxy"}});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let obj = { id: "amir", time: 2024 ,father:{name:"ali",city:"galaxy"}};
let { id, time: timeOfStart,father } = obj;

console.log(timeOfStart);
