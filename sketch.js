var cha;
var cha1,cha2,cha3,cha4;
var cham1,cham2,cham3,cham4;
var left,right,up,down;
var grass;
var grassimg1,grassimg2,grassimg3,grassimg4,grassimg5;
var tree1;
var treeG;
var tree;
var treeG;
function preload(){
cha1 = loadAnimation("assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still12.png","assets/ch/still13.png","assets/ch/still12.png")
cha2 = loadAnimation("assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still22.png","assets/ch/still23.png","assets/ch/still22.png")
cha3 = loadAnimation("assets/ch/still31.png")
cha4 = loadAnimation("assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still42.png","assets/ch/still43.png","assets/ch/still42.png")
cham1 = loadAnimation("assets/ch/run11.png","assets/ch/run12.png","assets/ch/run13.png","assets/ch/run14.png","assets/ch/run15.png","assets/ch/run16.png","assets/ch/run17.png","assets/ch/run18.png","assets/ch/run19.png","assets/ch/run110.png",);
cham2 = loadAnimation("assets/ch/run21.png","assets/ch/run22.png","assets/ch/run23.png","assets/ch/run24.png","assets/ch/run25.png","assets/ch/run26.png","assets/ch/run27.png","assets/ch/run28.png","assets/ch/run29.png","assets/ch/run210.png",);
cham3 = loadAnimation("assets/ch/run31.png","assets/ch/run32.png","assets/ch/run33.png","assets/ch/run34.png","assets/ch/run35.png","assets/ch/run36.png","assets/ch/run37.png","assets/ch/run38.png","assets/ch/run39.png","assets/ch/run310.png",);
cham4 = loadAnimation("assets/ch/run41.png","assets/ch/run42.png","assets/ch/run43.png","assets/ch/run44.png","assets/ch/run45.png","assets/ch/run46.png","assets/ch/run47.png","assets/ch/run48.png","assets/ch/run49.png","assets/ch/run410.png",);
grassimg1 = loadImage("assets/tile set/ground/grass11.png");
grassimg2 = loadImage("assets/tile set/ground/grass12.png");
grassimg3 = loadImage("assets/tile set/ground/grass13.png");
grassimg4 = loadImage("assets/tile set/ground/grass14.png");
grassimg5 = loadImage("assets/tile set/ground/grass15.png");
tree1 = loadImage("assets/tree/2.png");
fenceVimg = loadImage("assets/fence/4.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  nonespr(29,20,20);
  nonespr(29,20,68);
  nonespr(29,20,68+48);
  nonespr(29,20,68+48+48);
  nonespr(29,20,68+48+48+48);
  nonespr(29,20,68+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48);
  trees(1,600,200,tree1);
  cha = createSprite(width/2, height/2, 50, 50);
  cha.addAnimation("move1",cham1);
  cha.addAnimation("still1",cha1);
  cha.addAnimation("move2",cham2);
  cha.addAnimation("still2",cha2);
  cha.addAnimation("move3",cham3);
  cha.addAnimation("still3",cha3);
  cha.addAnimation("move4",cham4);
  cha.addAnimation("still4",cha4);
  cha.changeAnimation("still1");
  cha.scale = 0.4;
  left = 0;
  right = 0;
  up = 0;
  down = 0;
  cha.setCollider("rectangle",0,50,60,40)
  //cha.debug = true;
  treeG=new Group();
}

function draw() {
  background("#4ebcb9");  
  obg(tree);
  camera.position.y = cha.position.y;
  camera.position.x = cha.position.x;
  if(keyIsDown(DOWN_ARROW)){
    cha.changeAnimation("move1");
    cha.position.y += 5;
    down = 1;
    left = 0;
    right = 0;
    up = 0;
  }
  if(keyIsDown(LEFT_ARROW)){
    cha.changeAnimation("move2");
    cha.position.x -= 5;
    left = 1;
    right = 0;
    up = 0;
    down = 0;
  }
  if(keyIsDown(UP_ARROW)){
    cha.changeAnimation("move3");
    cha.position.y -= 5;
    left = 0;
    right = 0;
    up = 1;
    down = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    cha.changeAnimation("move4");
    cha.position.x += 5;
    left = 0;
    right = 1;
    up = 0;
    down = 0;
  }
  if(!keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){
    if(down == 1){
      cha.changeAnimation("still1");
    }
    if(left == 1){
      cha.changeAnimation("still2");
    }
    if(up == 1){
      cha.changeAnimation("still3");
    }
    if(right == 1){
      cha.changeAnimation("still4");
    }
  } 
  cha.collide(tree);
  drawSprites();
}

function nonespr(n,x,y) {
  for(var c=0; c<n; c++)
  {
    var grass = createSprite(x+48*c,y,50, 25);
    var rand = Math.round(random(1,5));
    switch (rand){
      case 1: grass.addImage(grassimg1);
      break;
      case 2: grass.addImage(grassimg2);
      break;
      case 3: grass.addImage(grassimg3);
      break;
      case 4: grass.addImage(grassimg4);
      break;
      case 5: grass.addImage(grassimg5);
      break;
  }
  }
}
function trees(n,x,y,img){
  for(var c=0; c<n; c++){
    tree = createSprite(x+48*c,y,50, 25);
    tree.addImage(img);
    treeG.add(tree);
  }
  tree.setCollider("rectangle",0,30,80,30)
  //tree.debug = true;
}
function obg(sprite){
if(cha.position.y > sprite.position.y+20){
  cha.depth = sprite.depth +1;
}
if(cha.position.y < sprite.position.y+20){
 sprite.depth = cha.depth +1;
}
}