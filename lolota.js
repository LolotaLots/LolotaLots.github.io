let options = [];
let imgs = [];
let img;
let clicked = 1;
let aswered = ""
let bgColorR;
let bgColorG;
let bgColorB;
function preload() {
  toBeCompleted = loadStrings("frases.txt");
  toComplete = loadStrings("preenchimento.txt");
  for (let i = 1; i <= 10; i++){
    imgs.push(loadImage("https://github.com/LolotaLots/LolotaLots.github.io/blob/main/imgs/imgs/desenho-bobo" + str(i) + ".png"));
  }

  img = random(imgs);

  bgColorR =  random(255);
  bgColorG =  random(255);
  bgColorB =  random(123);
  
}

function setup() {
  let canv = createCanvas(600, 600);
  canv.position(windowWidth/2 - width/2, 100);
  background(200);
  fill(0);
  textSize(25);
  textAlign(CENTER, CENTER);
  phrase = random(toBeCompleted);
  speech = new p5.Speech();

  while (options.length < 5) {
    choice = random(toComplete);
    if (!options.includes(choice))
    {
      options.push(choice);
    }
    
  }
}

function mousePressed(){
  if(clicked == -1){
    clicked *= -1;
    img = random(imgs);
    bgColorR =  random(255);
    bgColorG =  random(255);
    bgColorB =  random(123);
    return;
  }

  let idx = 0;
  if (mouseY > 425 && mouseY < 550 && clicked == 1){
    idx = (Math.floor((mouseY - 400) / 25) % (options.length + 1)) - 1;
    answered = phrase.replace("_", options[idx])
    speech.speak(answered);
    phrase = random(toBeCompleted);

    options = []
    while (options.length < 5) {
      choice = random(toComplete);
      if (!options.includes(choice))
      {
        options.push(choice);
      }
    }
    clicked *= -1;
  }


  
}

function draw() {
  background(bgColorR, bgColorG, bgColorB);
  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(25);
  textAlign(CENTER, CENTER);


  if (clicked == 1){
    text("Clique na palavra desejada :)", width/2, 50);
    text(phrase, 10, 10, width - 10, height/2);

    imageMode(CENTER);
    strokeWeight(3);
    textSize(20);

    line(0, 425, width, 425);
    for (let i = 0; i < options.length; i++)
    {
      text(options[i], width/2, 438 + 25 * i); 
      line(0, 450 + 25 * i, width, 450 + 25 * i);
    }

  }
  else
  {
    text("Clique para recomeçar", width/2, 50);
    text(answered, 10, 10, width - 10, height/2);
  }

  image(img, width/2, height/2, 200, 200);

}

