test("smoke test", function() {
	equals("bar", "bar");
});

test("Grid handleClickEvent", function(){
	var grid = new Grid()
	equals(2, grid.leftNumber)
	equals(true, grid.handleClickEvent(0))
	equals(1, grid.leftNumber)
	equals(false, grid.handleClickEvent(1))
	equals(1, grid.leftNumber)
})

test("write table", function(){
	var grid = new Grid()
	equals("<table><tr><td id='0'>JP<td id='1'>MC<tr><td id='2'>JP<td id='3'>MC</table>", grid.generateTable())
})

test("should return index array in content from condition", function(){
	var grid = new Grid()
	equals(QUnit.equiv([0, 2], grid.result("get name is : JP")), true);
})


test("should return index array in content from value", function(){
	var grid = new Grid()
	equals(QUnit.equiv([0, 2], grid.findIndexInArray('JP')), true);
})

