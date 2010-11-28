function Grid(){
	this.content = new Array('JP', 'MC', 'JP', 'MC')
	this.result = new Array('JP', 'JP')
	this.totalNumber = this.result.length
	this.leftNumber =  this.result.length
}

Grid.prototype.handleClickEvent = function(index)  
{
	for(var i = 0; i < this.result.length; i++){
		if(this.result[i] == this.content[index]){
			this.leftNumber--;
			return true;
		}
	}
	return false;
}
