const synth = new Tone.Synth().toDestination();

// Play a note
synth.triggerAttackRelease("C4", "8n");
