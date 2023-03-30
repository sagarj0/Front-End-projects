// const synth = new Tone.Synth().toDestination();

// // Play a note
// synth.triggerAttackRelease("C4", "8n");

let keys = document.querySelector(".keys");

let octave_no;
for (octave_no = 1; octave_no <= 3; octave_no++) {
  keys.innerHTML += `
  <div class="octave-${octave_no}">
  <div class="white-keys">
    <div class="white key"></div>
    <div class="white key"></div>
    <div class="white key"></div>
    <div class="white key"></div>
    <div class="white key"></div>
    <div class="white key"></div>
    <div class="white key"></div>
  </div>
  <div class="black-keys">
    <div class="black key"></div>
    <div class="black key"></div>
    <div class="black key"></div>
    <div class="black key"></div>
    <div class="black key"></div>
  </div>
  </div>
`;
}
