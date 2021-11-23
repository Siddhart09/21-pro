//frame
var frame= createSprite(200,200,400,400)

//frames
var frame
var frame1
var frame2
var frame3

//spirtes
var hero, hero_running,hero_dead,hero_jumping,hero_sliding
var villian,villian_running,villian_jumping,villian_dead

//gamestate
var gamestate = PLAY
var PLAY = 1
var END = 0

//frame 1 tiles
var frame1_tilegroup,frame1_tile1,frame1_tile2,frame1_tile3,frame1_tile4,frame1_tile5,
frame1_tile6,frame1_tile7,frame1_tile8,frame1_tile9,frame1_tile10,frame1_tile11,frame1_tile12,
frame1_tile13,frame1_tile14,frame1_tile15,frame1_tile16

//buttons
var menu_button
var next_button
var back_button
var play_button
var restart_button



function preload(){

    frame=loadImage('frame.png')

    hero_running=loadAnimation('Run_000.png','Run_001.png','Run_002.png','Run_003.png','Run_004.png','Run_005.png',
    'Run_006.png','Run_007.png','Run_008.png','Run_009.png')

    hero_jumping=loadAnimation('Jump_000.png','Jump_001.png','Jump_002.png','Jump_003.png','Jump_004.png',
    'Jump_005.png','Jump_006.png','Jump_007.png','Jump_008.png','Jump_009.png')

    hero_sliding=loadAnimation('Slide_000.png','Slide_001.png','Slide_002.png','Slide_003.png','Slide_004.png',
    'Slide_005.png','Slide_006.png','Slide_007.png','Slide_008.png','Slide_009.png')

    hero_dead=loadAnimation('Dead_000.png','Dead_001.png','Dead_002.png','Dead_003.png','Dead_004.png','Dead_005.png',
    'Dead_006.png','Dead_007.png','Dead_008.png','Dead_009.png',)

    

}

function setup() {
    createCanvas(400,400)
    hero.addImage('running',hero_running)
    hero.addImage('jumping',hero_jumping)
    hero.addImage('slidind',hero_sliding)
    hero.addImage('dead',hero_dead)

    frame.addImage('frame',frame)
}

function draw() {
    //background('red')
    frame=createSpritew(windowWidth,windowHeight)
 drawSprites()
}