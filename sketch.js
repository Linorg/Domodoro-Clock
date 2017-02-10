var domodoroText = "Domodoro Clock";
var timeBox;
var buttons = [];
var clock;

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

function HelpText(n_text)
{
	var domo_x = width / 2;
	fill(82, 102, 135);
	textSize(38);
	noStroke();
	textAlign(CENTER);
	textStyle(NORMAL);
	text(n_text, domo_x, (height / 2) + 40);
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
	
	if(useTimer)
	{
		updateTime();
		setTimer();
		HelpText("Press enter to start the timer");
	}
	else if(useLocaleTime)
	{
		timeStr = new Date().toLocaleTimeString();
		timeStr2 = "";
	}
	else if(useStopwatch)
	{
		updateTime();
		HelpText("Press enter to start the stopwatch");
	}
	
	timeBox.createBox();
	
	var shadow_c = color(36, 40, 48, 30);
	shadowBox.createBox("", shadow_c, shadow_c);
	
	drawTimeSquare();
	
	clock.setText(timeStr, timeStr2);
	clock.Pulsate();
	
	for(var i = 0; i < buttons.length; i++)
	{
		var name = ["Timer", "Clock", "Stopwatch", "Reset"];
		
		if(!buttons[i].checkCollision())
		{
			buttons[i].createBox(name[i]);
		}
		else if(buttons[i].checkCollision())
		{
			if(mouseIsPressed)
			{
				var c = color(36, 40, 48);
				buttons[i].createBox(name[i], c);
			}
			else
			{
				var c = color(77, 90, 111);
				buttons[i].createBox(name[i], c);
			}
		}
	}
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}