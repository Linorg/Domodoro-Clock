function Box(x, y, w, h, padding = 0)
{
	this.w = w - padding * 2;
	this.h = h - padding * 2;
	this.x = x + padding;
	this.y = y + padding;
	
	this.getWidth = function()
	{
		return this.w;
	}
	
	this.getHeight = function()
	{
		return this.h;
	}
	
	this.getX = function()
	{
		return this.x;
	}
	
	this.getY = function()
	{
		return this.y;
	}
	
	this.createBox = function(box_text = "", c = color(48, 55, 66), s = 24)
	{
		fill(c);
		stroke(s);
		strokeWeight(0.5);
		rect(this.x, this.y, this.w, this.h, 4);
		
		fill(110, 123, 145);
		textSize(20);
		noStroke();
		textAlign(CENTER);
		textStyle(BOLD);
		text(box_text, this.x + this.w / 2, this.y + this.h - 10);
	}
	
	this.checkCollision = function()
	{
		var right = this.x + this.w;
		var bottom = this.y + this.h;
		if(
				mouseX < right &&
				mouseX >= this.x &&
				mouseY < bottom &&
				mouseY >= this.y)
				{
					return true;
				}
	}
}