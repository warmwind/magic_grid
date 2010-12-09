var selectedArray 
function Grid(level){
	this.content = RandomGenerator.generateContent(level)
	this.condition = RandomGenerator.generateCondition(this.content)
	this.displayCondition = "Find Grids With Photo of : " + people[this.condition]
	this.totalNumber = this.GetResultArray().length
	this.leftNumber =  this.GetResultArray().length
	selectedArray = new Array()
}

(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)

Grid.prototype.handleClickEvent = function(index)  {
	$('#' + index).addClass('flip')
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
			title = people[content]
	 		dataTable += "<td class= 'panel' id='" + idIndex++ +"'>" + 
			"<div class='front'><img src='images/" + content + ".jpg' alt='" + content + "' title='" + title + "' /></div>" +
			"<div class='back'><img src='images/question.jpg' alt='" + content + "' /></div>" 
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
	return this.findIndexInArray(condition)
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
