var words = [
  "family",
  "secret services",
  "revenge",
  "newspaper",
  "book",
  "picture",
  "necklace",
  "vehicle",
  "love",
  "apple",
  "championship",
  "lab",
  "riddle",
  "fire-fighter",
  "box",
  "gold",
  "chemical",
  "sting",
  "bottle",
  "throne",
  "bike",
  "flower",
  "murder",
  "machine",
  "birds"
];

var places = [
  "hotel",
  "college",
  "museum",
  "mansion",
  "lake",
  "library",
  "desert",
  "cemetery"
];

function getItem(){
  var a = words[Math.floor(Math.random() * words.length)];
  var b = 0
  var c = 0
    
  b = words[Math.floor(Math.random() * words.length)];
  c = words[Math.floor(Math.random() * words.length)]; 
  while(a==b || b==c || a==c){
    b = words[Math.floor(Math.random() * words.length)];
    c = words[Math.floor(Math.random() * words.length)];
  }

  place = places[Math.floor(Math.random() * places.length)];

  document.getElementById("story").innerHTML = `Your words are "` + a + `", "` + b + `", and "` + c + `", and your place is a "`+ place + `". Now it's time to create! (You can click again on the button if you want other words)`
}

var themes = ["1. a famous person", "3. a movie", "2. an animal", "4. a word"];

function GuessingGame(){

  document.getElementById("guess").innerHTML = `Your theme is : "`+themes[Math.floor(Math.random()*themes.length)]+`".`;
}

