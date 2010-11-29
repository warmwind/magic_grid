function Grid(){
	this.content = new Array('JP', 'MC', 'JP', 'MC')
	this.condition = 'find box with name : JP'
	this.resultArray = this.result(this.condition)
	this.totalNumber = this.resultArray.length
	this.leftNumber =  this.resultArray.length
}

Grid.prototype.handleClickEvent = function(index)  {
	for(var i = 0; i < this.totalNumber; i++){
		if(this.resultArray[i] == index){
			this.leftNumber--;
			return true;
		}
	}
	return false;
}

Grid.prototype.generateTable = function() {
	var dataTable =""
	dataTable += "<table>"
	// int colAndRowNumber = Math.sqrt(4)
	var idIndex = 0
	for(var rowIndex = 0; rowIndex < 2; rowIndex++){
		dataTable += "<tr>"
		for(var colIndex = 0; colIndex < 2; colIndex++){
			content = this.content[idIndex]
	 		dataTable += "<td id='" + idIndex++ +"'>" + content
		}
	}
	dataTable += "</table>"
	return dataTable
}

Grid.prototype.findIndexInArray = function(value){
	var resultArray = new Array()
	for(var i = 0; i < this.content.length; i++){
		if(this.content[i] == value){
			resultArray.push(i)
		}
	}
	return resultArray;
}


Grid.prototype.result = function(condition){
	var value = condition.substr(condition.indexOf(':') + 2)
	return this.findIndexInArray(value)
}


