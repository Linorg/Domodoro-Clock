var domodoroText = "Domodoro Clock";
var timeAmnt = [0, 0];
var timeArr = [];
var timeStr;
var timeBox;
var buttons = [];
var clock;
var inMin = false;
var inHour = false;
var useLocalTime = true;
var useTimer = false;
var useStopwatch = false;

function drawTimeSquare()
{
	var center_x1 = (timeBox.getX() + timeBox.getWidth() * 0.277);
	var center_x2 = (timeBox.getX() + timeBox.getWidth() / 2 + 4.8);
	var center_y = timeBox.getY() + timeBox.getHeight() / 2 - 70 / 2;
	
	var w = 40;
	var h = 70;
	
	noStroke();
	noFill();
	
	for(var i = 0; i <= 1; i++)
	{
		padding = w * i;
		rect(center_x1 + padding, center_y, w, h);
	}
	for(var j = 0; j <= 1; j++)
	{
		padding = w * j;
		rect(center_x2 + padding, center_y, w, h);
	}
	
	var width1 = center_x1 + ((center_x1 + padding) + w);
	var width2 = center_x2 + ((center_x2 + padding) + w);
	var height = center_y + h;
	
	if(
			mouseX < width1 		&&
			mouseX >= center_x1 &&
			mouseY < height			&&
			mouseY >= center_y)
			{
				inHour = true;
			}
	else
	{
		inHour = false;
	}
	
	if(
			mouseX < width2 		&&
			mouseX >= center_x2 &&
			mouseY < height			&&
			mouseY >= center_y)
			{
				inMin = true;
			}
	else
	{
			inMin = false;
	}
}

function DomodoroText(n_text, c, padding = 0)
{
	var domo_x = width / 2;
	fill(c);
	textSize(64);
	noStroke();
	textAlign(CENTER);
	textStyle(NORMAL);
	text(n_text, domo_x + padding, (height / 4) + padding);
}

function setup() 
{
	createCanvas(windowWidth,windowHeight);
	
	timeBox = new Box((width / 2) - (380 / 2), (height / 2) - (120), 380, 120);
	
	shadowBox = new Box((width / 2) - (380 / 2), (height / 2) - (120), 380, 120, 8);
	
	clock = new Clock();
	
	for(var i = 0; i < 3; i++)
	{
		buttons[i] = new Box((width / 2) - 240 + (i * 180), (height / 2) - 180, 120, 34);
	}
}

function draw() 
{
	background(73, 83, 99);

	var domo_c = color(12, 12, 12, 60);
	DomodoroText(domodoroText, domo_c, 3);
	
	var domo_c = color(82, 102, 135);
	DomodoroText(domodoroText, domo_c);
	
	if(!useLocalTime)
	{
		updateTime();
	}
	else
	{
		timeStr = new Date().toLocaleTimeString();
	}
	
	timeBox.createBox();
	
	var shadow_c = color(60, 60, 60, 10);
	shadowBox.createBox("", shadow_c, shadow_c);
	
	drawTimeSquare();
	
	clock.setText(timeStr);
	clock.Pulsate();
	
	var curMousePos = winMouseY;
	
	if(mouseIsPressed)
	{
		var oldMousePos = pwinMouseY;
		var dist = (curMousePos - oldMousePos);
		if ( dist > 2)
		{
			dist = 2
		}
		else if (dist < -2)
		{
			dist = -2
		}
		if(inMin)
		{
			timeAmnt[1] -= dist;
		}
		else if(inHour)
		{
			timeAmnt[0] -= dist;
		}
		console.log(dist);
	}
	
	for(var i = 0; i < 3; i++)
	{
		var name = ["Timer", "Clock", "Stopwatch"];
		
		var c = color(77, 90, 111);
		
		if(!buttons[i].checkCollision())
		{
			buttons[i].createBox(name[i]);
		}
		else
		{
			buttons[i].createBox(name[i], c);
		}
	}
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked()
{
	if(buttons[1].checkCollision())
	{
		useLocalTime = true;
	}
}