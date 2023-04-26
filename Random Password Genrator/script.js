const numbers = "0123456789",
  symbols = "`~!@#$%^&*()_+-={}|[]:\";':<,>.?/",
  sletter = "abcdefghijklmnopqrstuvwxyz",
  cletter = sletter.toUpperCase();

function randomPasswordGen() {
  let password = "";
  // var passlength = ;
  for (
    let i = 1;
    i <= Number(document.getElementById("length").value) / 4;
    i++
  ) {
    var randno = Math.floor(Math.random() * numbers.length);
    password += numbers.slice(randno, randno + 1);

    var randno = Math.floor(Math.random() * symbols.length);
    password += symbols.slice(randno, randno + 1);

    var randno = Math.floor(Math.random() * sletter.length);
    password += sletter.slice(randno, randno + 1);

    var randno = Math.floor(Math.random() * cletter.length);
    password += cletter.slice(randno, randno + 1);
  }
  document.getElementById("passPin").value = password;
}

function randomPinGen() {
  let password = "";
  for (var i = 1; i <= 4; i++) {
    let randno = Math.floor(Math.random() * numbers.length);
    password += numbers.slice(randno, randno + 1);
  }
  document.getElementById("passPin").value = password;
}

let gen = function () {
  if (document.getElementById("type").value == "Password") {
    randomPasswordGen();
  }
  if (document.getElementById("type").value == "Pin") {
    randomPinGen();
  }
};

document.querySelector("#button1").addEventListener("click", gen);
