"use strict";

// const { Tone } = require("tone/build/esm/core/Tone");

let keys = document.querySelector(".keys");

let octave_no;
for (octave_no = 1; octave_no <= 5; octave_no++) {
  keys.innerHTML += `
  <div class="octaves">
          <div class="white-keys">
            <div class="key${octave_no}1 white"></div>
            <div class="key${octave_no}3 white"></div>
            <div class="key${octave_no}5 white"></div>
            <div class="key${octave_no}6 white"></div>
            <div class="key${octave_no}8 white"></div>
            <div class="key${octave_no}10 white"></div>
            <div class="key${octave_no}12 white"></div>
          </div>

          <div class="black-keys">
            <div class="key${octave_no}2 black"></div>
            <div class="key${octave_no}4 black"></div>
            <div class="key${octave_no}7 black"></div>
            <div class="key${octave_no}9 black"></div>
            <div class="key${octave_no}11 black"></div>
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
let c2 = 65.40639;

const freqRatio = Math.pow(2, 1 / 12);
for (; i < 12; i++) {
  let newFreq = c2 * Math.pow(freqRatio, i);

  for (octave_no = 0; octave_no < 5; octave_no++) {
    let freq = newFreq * Math.pow(2, octave_no);
    let btn = document.querySelector(`.key${octave_no + 1}${i + 1}`);

    btn.addEventListener("click", function () {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease(freq, "8n");
      console.log(btn);
      console.log(freq);
    });
  }
}

// console.log(freqRatio);

// for (; i < 12; i++) {
// let btn = document.querySelectorAll(`.key${i + 1}`);

//   let freq = b3 * Math.pow(freqRatio, i);

//   for (octave_no = 0; octave_no < 4; octave_no++) {
//     btn[octave_no].addEventListener("click", () => {
// const synth = new Tone.Synth().toDestination();

//       // let newNote = refC4 * keyNo;

//       console.log(btn[octave_no]);
//       synth.triggerAttackRelease(freq, "8n");
//       console.log(freq);
//     });
//   }
//   // console.log(btn.innerHTML);
//   // console.log(freq);

//   // console.log(btn);
// }

// console.log(btn);
