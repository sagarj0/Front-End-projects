const numbers = "0123456789",
  symbols = "`~!@#$%^&*()_+-={}|[]:\";':<,>.?/",
  sletter = "abcdefghijklmnopqrstuvwxyz",
  cletter = sletter.toUpperCase();

function randomPasswordGen() {
  var password = "";
  // var passlength = ;
  for (
    var i = 1;
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
  // console.log(password);
}

function randomPinGen() {
  var password = "";
  for (var i = 1; i <= 4; i++) {
    var randno = Math.floor(Math.random() * numbers.length);
    password += numbers.slice(randno, randno + 1);
  }
  document.getElementById("passPin").value = password;
}

const adapter = function () {
  if (document.querySelector("#type").value == "Pin") {
    document.querySelector(".length-selector").classList.add("hidden");

    randomPinGen();
  } else if (document.querySelector("#type").value == "Password") {
    document.querySelector(".length-selector").classList.remove("hidden");

    randomPasswordGen();
  }
};

document.querySelector("#button1").addEventListener("click", adapter);
