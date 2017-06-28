var tileHeight = 150;
var tileWidth = 125;
var tileTextSize = 75;
var maxTile = 11;

function setup() {	
	var canvas = createCanvas(windowWidth,windowHeight);
	background(189, 195, 199);
}

function draw() {
	var blackTilePosX = windowWidth/12;
	var blackTilePosY = windowHeight/12;
	for (var i = 0; i <= maxTile; i++) {
		blackTile(i,blackTilePosX,blackTilePosY);

		blackTilePosX+=tileWidth+5;
	}

}


function blackTile(number,posx,posy) {

	rect(posx , posy ,tileWidth, tileHeight);
	fill(255);
	text(number,posx,posy,tileWidth,tileHeight);
	textAlign(CENTER,CENTER);
	textSize(tileTextSize);
	fill(0);

}