const arr = [
  { val: 12 },
  { val: 2 },
  { val: 1 },
  { val: 4 },
  { val: 152 },
  { val: 78 },
  { val: 23 },
  ,
  { val: 90 },
];

const m = 23;

// const filtered = arr.filter((element, index) => {
//   return element.val > 23;
// }); // آرایه قبلی رو فیلتر میکنه ینی حذف میکنه  ولی یه آرایه جدید خروجی میده

const maped = arr.map((element, index, array) => {
  const { val } = element;
  return { value: val*2, index: index };
}); //یه آرایه جدید خروجی میده حذف مذف توکارش نیست و المنت های خالی رو برنمیگردونه

const forea = arr.forEach((element, index, array) => {
  //   console.log(element.val);
});

console.log(maped);
// console.log(forea);
