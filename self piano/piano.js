"use strict";

let keys = document.querySelector(".keys");

let octave_no;
for (octave_no = 1; octave_no <= 1; octave_no++) {
  keys.innerHTML += `
  <div class="octaves">
          <div class="white-keys">
            <div class="key1 white"></div>
            <div class="key3 white"></div>
            <div class="key5 white"></div>
            <div class="key6 white"></div>
            <div class="key8 white"></div>
            <div class="key10 white"></div>
            <div class="key12 white"></div>
          </div>

          <div class="black-keys">
            <div class="key2 black"></div>
            <div class="key4 black"></div>
            <div class="key7 black"></div>
            <div class="key9 black"></div>
            <div class="key11 black"></div>
          </div>
        </div>
  `;
}

// console.log(Tone.js);

// import * as Tone from "tone";

// let synth = Tone.Synth().toDestination();

// // Play a note

// console.log(Tone.context.state);

// let c4synth = function () {
//   // if (Tone.context.state != "running") {
//   //   Tone.start();
//   // }

//   // AudioContext().resume();
// };

// c4synth();
let i = 0;
let b3 = 261.6256;

const freqRatio = Math.pow(2, 1 / 12);

// console.log(freqRatio);

for (; i < 12; i++) {
  let btn = document.querySelector(`.key${i + 1}`);

  let freq = b3 * Math.pow(freqRatio, i);

  btn.addEventListener("click", () => {
    const synth = new Tone.Synth().toDestination();

    // let newNote = refC4 * keyNo;

    console.log(btn);
    synth.triggerAttackRelease(freq, "8n");
    console.log(freq);
  });
  // console.log(btn.innerHTML);
  // console.log(freq);
}
