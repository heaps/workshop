var length = data.length;

for (var i = 0; i < length; i++) {
	var ball = data[i];
	create(ball.x,ball.y,ball.color);
}