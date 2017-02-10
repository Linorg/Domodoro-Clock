var timeAmnt = [0, 0, 0];
var timeArr = [];
var timeStr;
var timeStr2;
var timerSetUp = false;
var msec;
var resetWatch = false;

function Clock()
{
	this.g = 76;
	this.x = width / 2;
	this.y = height / 2 - timeBox.getHeight() / 3
	this.add;
	
	this.setText = function(time, time2)
	{
		fill(61, this.g, 122);
		textSize(64);
		noStroke();
		textAlign(CENTER);
		textStyle(NORMAL);
		text(time, this.x, this.y);
		
		textSize(30);
		textAlign(NORMAL);
		text(time2, this.x + 96, this.y - 34);
	}
	
	this.Pulsate = function() 
	{
		if(this.g >= 96)
		{
			this.add = false;
		}
		if(this.g <= 76)
		{
			this.add = true;
		}
		
		if(this.add == true)
		{
			this.g += 0.2;
		}
		else if(this.add == false)
		{
			this.g -= 0.2;
		}
	}
}

function updateTime()
{
 	if (timeAmnt[0] >= 10)
	{
		timeArr[0] = timeAmnt[0].toString();
	}else
	{
		timeArr[0] = "0" + timeAmnt[0].toString();
	}
	
	if (timeAmnt[1] >= 10)
	{
		timeArr[1] = timeAmnt[1].toString();
	}else
	{
		timeArr[1] = "0" + timeAmnt[1].toString();
	} 
	
	if (timeAmnt[2] >= 10)
	{
		timeArr[2] = timeAmnt[2].toString();
	}else
	{
		timeArr[2] = "0" + timeAmnt[2].toString();
	} 
	
	
	
	if (timeAmnt[0] > 99)
	{
		timeAmnt[0] = 0;
	}
	else if (timeAmnt[0] < 0)
	{
		timeAmnt[0] = 99;
	}
	
	if (timeAmnt[1] > 60)
	{
		timeAmnt[1] = 0;
	}
	else if (timeAmnt[1] < 0)
	{
		timeAmnt[1] = 60;
	}
	
	if (timeAmnt[2] > 60)
	{
		timeAmnt[2] = 0;
	}
	else if (timeAmnt[2] < 0)
	{
		timeAmnt[2] = 60;
	}
	
	
	
	timeStr = timeArr[0] + ":" + timeArr[1];
	timeStr2 = timeArr[2];
	
	if(timerStart)
	{
		startTimer();
	}
	
	if(stopwatchStart)
	{
		startStopwatch();
	}
}

function setTimer()
{
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
		if(inSec)
		{
			timeAmnt[2] -= dist;
		}
		else if(inMin)
		{
			timeAmnt[1] -= dist;
		}
		else if(inHour)
		{
			timeAmnt[0] -= dist;
		}
	}
	
	if(timeAmnt[0] > 0 || timeAmnt[1] > 0 || timeAmnt[2] > 0)
	{
		timerSetUp = true;
	}
}

function startTimer()
{
	if(msec >= 0){
		msec--;
	}
	
	if(timeAmnt[0] == 0 && timeAmnt[1] == 0 && timeAmnt[2] == 0)
	{
		timerSetUp = false;
		timerStart = false;
	}

	if(timeAmnt[2] == 60)
	{
		timeAmnt[1] += 1;
		timeAmnt[2] = 0;
	}
	else if(timeAmnt[1] == 60)
	{
		timeAmnt[0] += 1;
		timeAmnt[1] = 0;
	}
	
	if(msec == 0)
	{
		if(timeAmnt[2] == 0)
		{
			timeAmnt[2] = 0;
			msec = 0;
		}
		else
		{
			timeAmnt[2]--;
			msec = 59;
		}
	}
	
	if(timeAmnt[2] == 0)
	{
		if(timeAmnt[1] == 0)
		{
			timeAmnt[1] = 0;
			timeAmnt[2] = 0;
		}
		else
		{
			timeAmnt[1]--;
			timeAmnt[2] = 59;
		}
	}
	
	if(timeAmnt[1] == 0)
	{
		if(timeAmnt[0] == 0)
		{
			timeAmnt[0] = 0;
			timeAmnt[1] = 0;
		}
		else
		{
			timeAmnt[0]--;
			timeAmnt[1] = 59;
		}
	}
}

function startStopwatch()
{
	if(msec <= 59){
		msec++;
	}
	
	if(resetWatch)
	{
		stopwatchStart = false;
		msec = 0;
		timeAmnt[0] = 0;
		timeAmnt[1] = 0;
		timeAmnt[2] = 0;
	}
	
	if(msec == 59)
	{
		timeAmnt[2]++;
		msec = 0;
	}
	
	if(timeAmnt[2] == 59)
	{
		timeAmnt[1]++;
		timeAmnt[2] = 0;
	}
	
	if(timeAmnt[1] == 59)
	{
		timeAmnt[0]++;
		timeAmnt[1] = 0;
	}
	
	if(timeAmnt[0] == 24)
	{
		resetWatch == true;
	}
}