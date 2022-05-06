
let el_down = document.getElementById("display");
console.log(el_down.innerHTML);

function generateP() {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';

  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
                  * str.length + 1);

      pass += str.charAt(char)
  }
  console.log(pass);
  return pass;
}

function passwordGenerateFunc() {
  el_down.innerHTML = generateP();
  return el_down.innerHTML;
}