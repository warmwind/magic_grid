var watchIntervalId
var guessIntervalId

$(document).ready(function() {
	var grid = new Grid()
    watchIntervalId = setInterval(function(){displayWatchPage(grid)}, 1000);
	writeTable(grid)
});

var t = 3;
function displayWatchPage(grid)
{
	if(showTimeInfo()){
		hideDataTable(grid)
	}
}

function displayGuessPage(grid){
	if(showTimeInfo()){
		stopGuessTime()
		$('#main').html("You lose")
	}
}

function showTimeInfo()
{
	if(t >= 0 )
    {
       document.getElementById('time').innerHTML = 'You have ' + t-- + ' second(s) left'
       return false
    }
    document.getElementById('time').innerHTML = 'Time is up!!'
	return true
    
}

function handleResult(grid, value){
		if(!grid.handleClickEvent(value)){
			console.log("wrong")
		}
		if(grid.leftNumber == 0)
		{
			stopGuessTime()
			$('#main').html("You win")
		}
		writeResultStatus(grid)
}

function hideDataTable(grid){
	stopWatchTime()
	$.each($('td'), function(){
		this.innerHTML = 'XXX';
		});
	triggerGuessPage(grid)
	writeResultStatus(grid)
}

function triggerGuessPage(grid){
	t = 5
	$('td').click(function(){
		handleResult(grid, this.id)
	})
    guessIntervalId = setInterval(function(){displayGuessPage(grid)}, 1000);
	$('#condition').html(grid.condition)

}

function writeResultStatus(grid){
   document.getElementById('result').innerHTML = 'left number' + grid.leftNumber + '/' + grid.totalNumber
}

function writeTable(grid){
   $('#main').html(grid.generateTable())
}

function stopWatchTime(){
	clearInterval(watchIntervalId)
}

function stopGuessTime(){
	clearInterval(guessIntervalId)
}