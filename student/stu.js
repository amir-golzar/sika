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