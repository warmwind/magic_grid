function Grid(){
	this.content = RandomGenerator.generateContent(3)
	this.condition = RandomGenerator.generateCondition(this.content)
	this.totalNumber = this.GetResultArray().length
	this.leftNumber =  this.GetResultArray().length
}
var selectedArray = new Array()
Grid.prototype.handleClickEvent = function(index)  {
	for(var i = 0; i < this.totalNumber; i++){
		valueIndex = this.GetResultArray()[i]
		if(valueIndex == index){
			if(!sameOneSelect(valueIndex)){
				this.leftNumber--;
				selectedArray.push(index)
			}
			return true;
		}
	}
	return false;
}

function sameOneSelect(valueIndex){
	return selectedArray.contains(valueIndex)
}

Grid.prototype.GetResultArray = function(){
	return this.result(this.condition)
}

Grid.prototype.generateTable = function() {
	var dataTable =""
	dataTable += "<table>"
	var colAndRowNumber = Math.sqrt(this.content.length)
	var idIndex = 0
	for(var rowIndex = 0; rowIndex < colAndRowNumber; rowIndex++){
		dataTable += "<tr>"
		for(var colIndex = 0; colIndex < colAndRowNumber; colIndex++){
			content = this.content[idIndex]
	 		dataTable += "<td id='" + idIndex++ +"'>" + 
			"<img src='images/" + content + "' alt='" + content + "' />"
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


Array.prototype.remove = function(index){
	var result = new Array()
	for (var i=0; i < this.length; i++) {
		if( i != index){
			result.push(this[i])
		}
	};
	return result;
}

Array.prototype.contains = function(value){
	for (var i=0; i < this.length; i++) {
		if( this[i] == value){
			return true
		}
	}
	return false
}
