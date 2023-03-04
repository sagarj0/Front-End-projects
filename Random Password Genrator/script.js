
var numbers = "0123456789",
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
  document.getElementById("password").value = password;
}

// console.log(document.getElementById("password").value);
