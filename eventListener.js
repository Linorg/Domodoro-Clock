var useLocaleTime = true;
var useTimer = false;
var useStopwatch = false;
var timerStart = false;
var stopwatchStart = false;

function mouseClicked()
{
	for(var i = 0; i < buttons.length; i++)
	{
		switch(i)
		{
		case 0 :
			if(buttons[0].checkCollision())
			{
				useTimer = true;
				useLocaleTime = false;
				useStopwatch = false;
				stopwatchStart = false;
				
				if(buttons.length > 2)
				{
					buttons.splice(3, 1);
				}
			}
			break;
		case 1 :
			if(buttons[1].checkCollision())
			{
				useLocaleTime = true;
				useTimer = false;
				useStopwatch = false;
				stopwatchStart = false;
				helpText.splice(1,1)
				
				if(buttons.length > 2)
				{
					buttons.splice(3, 1);
				}
			}
			break;
		case 2 :	
			if(buttons[2].checkCollision())
			{
				useStopwatch = true;
				useTimer = false;
				useLocaleTime = false;
				stopwatchStart = false;
				
				if(buttons.length > 2)
				{
					buttons.splice(3, 1);
				}
				buttons.push(new Box((width / 2) - 60, (height / 2) + 60, 120, 34));
			}
			break;
		case 3 :
			if(buttons[3].checkCollision())
			{
				resetWatch = true;
			}
			break;
		}
		if(buttons[i].checkCollision())
		{
			timeAmnt[0] = 0;
			timeAmnt[1] = 0;
			timeAmnt[2] = 0;
		}
	}
}

function keyPressed()
{
	if(keyCode == ENTER && useTimer && timerSetUp)
	{
		timerStart = !timerStart;
		msec = 59;
	}
	else if(keyCode == ENTER && useTimer && !timerSetUp){
		window.alert("You must set a time before starting the timer.");
		timerStart = false;
	}
	
	if(keyCode == ENTER && useStopwatch)
	{
		stopwatchStart = !stopwatchStart;
		resetWatch = false;
		msec = 0;
	}
}