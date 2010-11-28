test("smoke test", function() {
	equals("bar", "bar");
});

test("Grid isCorrect test", function(){
	var grid = new Grid()
	equals(2, grid.leftNumber)
	equals(true, grid.handleClickEvent(0))
	equals(1, grid.leftNumber)
	equals(false, grid.handleClickEvent(1))
	equals(1, grid.leftNumber)
})