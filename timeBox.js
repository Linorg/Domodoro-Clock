var inMin = false;
var inHour = false;
var inSec = true;

function drawTimeSquare()
{
	var center_x = []
	var center_x1 = (timeBox.getX() + timeBox.getWidth() * 0.277);
	var center_x2 = (timeBox.getX() + timeBox.getWidth() / 2 + 4.8);
	var center_x3 = (timeBox.getX() + timeBox.getWidth() / 1.425);
	var center_y = timeBox.getY();
	
	var w = 40;
	var h = timeBox.getHeight();
	
	noStroke();
	//fill(255)
	noFill();
	
	for(var i = 0; i <= 1; i++)
	{
		padding = w * i;
		rect(center_x1 + padding, center_y, w, h);
	}
	for(var j = 0; j <= 1; j++)
	{
		padding = (w - 8) * j;
		rect(center_x2 + padding, center_y, w, h);
	}
	for(var k = 0; k <= 1; k++)
	{
		padding = (w/2) * k;
		rect(center_x3 + padding, center_y, w/2, h);
	}
	
	var width1 = center_x1 + ((center_x1 + padding) + w);
	var width2 = center_x2 + ((center_x2 + padding) + w);
	var width3 = center_x3 + ((center_x3 + padding) + w/2);
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
	
	if(
			mouseX < width3 		&&
			mouseX >= center_x3 &&
			mouseY < height			&&
			mouseY >= center_y)
			{
				inSec = true;
			}
	else
	{
			inSec = false;
	}
}