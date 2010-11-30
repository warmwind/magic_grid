test("smoke test", function() {
	equals("bar", "bar");
});

test("Grid handleClickEvent", function(){
	var grid = new Grid()
	grid.content = ['JP', 'MC', 'MC', 'JP']
	grid.condition = "find box with name : JP"

	equals(2, grid.leftNumber)
	equals(true, grid.handleClickEvent(0))
	equals(1, grid.leftNumber)
	equals(false, grid.handleClickEvent(1))
	equals(1, grid.leftNumber)
})

test("Grid handleClickEvent when select correct twice, only decreace left number once", function(){
	var grid = new Grid()
	grid.content = ['JP', 'MC', 'MC', 'JP']
	grid.condition = "find box with name : JP"

	equals(2, grid.leftNumber)
	equals(true, grid.handleClickEvent(0))
	equals(1, grid.leftNumber)
	equals(true, grid.handleClickEvent(0))
	equals(1, grid.leftNumber)
})

test("write table", function(){
	var grid = new Grid()	
	grid.content = ['JP', 'MC', 'MC', 'JP']
	grid.condition = "find box with name : JP"
	equals("<table><tr><td id='0'>JP<td id='1'>MC<tr><td id='2'>MC<td id='3'>JP</table>", grid.generateTable())
})

test("should return index array in content from condition", function(){
	var grid = new Grid()
	grid.content = ['JP', 'MC', 'MC', 'JP']
	grid.condition = "find box with name : JP"
	equals(QUnit.equiv([0, 3], grid.result("get name is : JP")), true);
})


test("should return index array in content from value", function(){
	var grid = new Grid()
	grid.content = ['JP', 'MC', 'MC', 'JP']
	equals(QUnit.equiv([0, 3], grid.findIndexInArray('JP')), true);
})

test("should remove array element according to index", function(){
	var array = new Array('a', 'b', 'c')
	equals(QUnit.equiv(['a', 'c'], array.remove(1)), true)
})

test("should return true when array contains value", function(){
	var array = new Array('a', 'b', 'c')
	equals(true, array.contains('b'))
})

test("should return false when array not contains value", function(){
	var array = new Array('a', 'b', 'c')
	equals(false, array.contains('d'))
})



