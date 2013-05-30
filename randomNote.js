var notes = [
    'A'       
  , 'A-sharp' 
  , 'B-flat'  
  , 'B'       
  , 'C'       
  , 'C-sharp' 
  , 'D-flat'  
  , 'D'       
  , 'D-sharp' 
  , 'E-flat'  
  , 'E'       
  , 'F'       
  , 'F-sharp' 
  , 'G'       
  , 'G-sharp' 
  ];


function init() {
  setInterval(function() {
    playRandomNote();
  }, 5300);
}

function playRandomNote() {
  var note = notes[Math.floor(Math.random() * notes.length)];
  play(note);
}

function play(note) {
  req = new XMLHttpRequest();
  req.open("GET", "/?" + note);
  req.send();

  var sound = getNote(note);

  setTimeout(function() {
    sound.noteOn(0);
    setTimeout(function() {
      sound.noteOff(0);
      console.log("Next")
    }, 4000);
  }, 1000);
}

function getNote(note) {
  var freq = {
      'A'       : 440
    , 'A-sharp' : 466
    , 'B-flat'  : 466
    , 'B'       : 494
    , 'C-flat'  : 494
    , 'C'       : 523
    , 'C-sharp' : 554
    , 'D-flat'  : 554
    , 'D'       : 587
    , 'D-sharp' : 622
    , 'E-flat'  : 622
    , 'E'       : 659
    , 'E-sharp' : 698
    , 'F-flat'  : 659
    , 'F'       : 698
    , 'F-sharp' : 740
    , 'G-flat'  : 740 
    , 'G'       : 784
    , 'G-sharp' : 831
    , 'A-flat'  : 831
  }

  var context = new webkitAudioContext(),
      oscillator = context.createOscillator();
  var gainNode = context.createGainNode();
  gainNode.gain.value = 0.008;

  oscillator.type = 2; // sine wave
  oscillator.frequency.value = freq[note];
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  return oscillator;
}
