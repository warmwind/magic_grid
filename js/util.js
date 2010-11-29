var watchIntervalId
var guessIntervalId

$(document).ready(function() {
	var grid = new Grid()
	var player = new Player()
    watchIntervalId = setInterval(function(){displayWatchPage(grid, player)}, 1000);
	writeTable(grid)
});

var t = 3;
function displayWatchPage(grid, player)
{
	if(showTimeInfo()){
		hideDataTable(grid, player)
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

function showLifeInfo(life){
   document.getElementById('life').innerHTML = 'You have ' + life + ' life(lives) left'
}

function handleResult(grid, value, player){
		if(!grid.handleClickEvent(value)){
			showLifeInfo(--player.lifeNumber)
			$('#'+ value +' img').attr("src", "images/sad.jpeg")
			
		}
		if(grid.leftNumber == 0)
		{
			stopGuessTime()
			$('#main').html("You win!!!!!!!!!!!")
		}
		if(player.lifeNumber <= 0)
		{
			stopGuessTime()
			$('#main').html("You lose")
		}
		writeResultStatus(grid)
}

function hideDataTable(grid, player){
	stopWatchTime()
	$.each($('img'), function(){
		$(this).fadeOut('slow', function(){
			$(this).attr("src", "images/smile.jpeg")
		})
		$(this).fadeIn('slow')
		});
	triggerGuessPage(grid, player)
	writeResultStatus(grid)
	showLifeInfo(player.lifeNumber)
}

function triggerGuessPage(grid, player){
	t = 5
	$('td').click(function(){
		handleResult(grid, this.id, player)
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

function replay(){
	location.reload()
}