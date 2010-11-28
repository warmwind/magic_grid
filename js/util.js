var intervalId
$(document).ready(function() {

    intervalId = setInterval('displayTime()', 1000);
});

var t = 3;
function displayTime()
{
    if(t >0 )
    {
       document.getElementById('time').innerHTML = 'You have ' + t-- + ' second(s) left'
       return;
    }
    document.getElementById('time').innerHTML = 'Time is up!!'
	hideDataTable()
}

function hideDataTable(){
	clearInterval(intervalId)
	$.each($('td'), function(){
		this.innerHTML = 'XXX';
		});
	var grid = new Grid()
	writeResultStatus(grid)

	$('td').click(function(){
		if(!grid.handleClickEvent(this.id)){
			alert("You loose one life!")
		}
		writeResultStatus(grid)
	})
	    
}

function writeResultStatus(grid){
   document.getElementById('result').innerHTML = grid.leftNumber + '/' + grid.totalNumber
}

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
