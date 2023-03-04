
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_+-={}|[]:\";':<,>.?/";
var sletter = "abcdefghijklmnopqrstuvwxyz";
var cletter = sletter.toUpperCase();
var passlength = 12;

function randomPasswordGen() {
  var password = "";

  for (var i = 0; i <= passlength / 4; i++) {
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

// console.log(randomPasswordGen());
