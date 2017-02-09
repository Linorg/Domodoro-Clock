function Clock()
{
	this.g = 76;
	this.x = width / 2;
	this.y = height / 2 - timeBox.getHeight() / 3
	this.add;
	
	this.setText = function(time)
	{
		fill(61, this.g, 122);
		textSize(64);
		noStroke();
		textAlign(CENTER);
		textStyle(NORMAL);
		text(time, this.x, this.y);
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
			console.log(this.add);
			console.log("g = " + this.g)
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
	
	if (timeAmnt[1] > 60)
	{
		timeAmnt[1] = 0;
	}
	else if (timeAmnt[1] < 0)
	{
		timeAmnt[1] = 60;
	}
	
	if (timeAmnt[0] > 24)
	{
		timeAmnt[0] = 0;
	}
	else if (timeAmnt[0] < 0)
	{
		timeAmnt[0] = 24;
	}
	
	timeStr = timeArr[0] + ":" + timeArr[1];
}