var watchIntervalId
var guessIntervalId
var state = new State()

$(document).ready(function() {
    var grid = new Grid(state.getNextStageLevel())
    watchIntervalId = setInterval(function(){displayWatchPage(grid, state)}, 1000);
	writeTable(grid)
});

var t = 3;
function displayWatchPage(grid, state)
{
	if(showTimeInfo()){
		hideDataTable(grid, state)
	}
}

function displayGuessPage(grid){
	if(showTimeInfo()){
		stopGuessTime()
		state.stopped = true
		printLose()
	}
}

function showTimeInfo()
{
	if(t >= 0 )
    {
       $('#time').html("<p class='time-number'>" + t-- + "</p>")
       $('.time-number').animate({
			fontSize: "3em"
		}, 500, function(){})
       return false
    }
	cleanLeftData()
	return true
    
}

function showLifeInfo(life){
	var str = ''
	for(var i = 0; i< life; i++){
		str += "<img src = 'images/life.jpg'>"
	}
    $('#life').html(str)		
}

function nextStage(){
	$('header .info').html("")
	state.currentStage  += 1
	state.stopped = false
    var grid = new Grid(state.getNextStageLevel())
    watchIntervalId = setInterval(function(){displayWatchPage(grid, state)}, 1000);
	writeTable(grid)
}
function handleResult(grid, value, state){
	if(!grid.handleClickEvent(value)){
		showLifeInfo(--state.lifeNumber)
		$('#'+ value +' img').attr("src", "images/sad.jpg")
		
	}
	else{
		$('#'+ value +' img').attr("src", "images/" + grid.content[value] +".jpg")
	}
	if(grid.leftNumber == 0)
	{
		stopGuessTime()
		cleanLeftData()
		state.success = true
		state.stopped = true
		printInfo("<p class='win'>You win!!!!!!!!!!!<a href='javascript:nextStage()'>Go Next!</a></p>")
	}
	if(state.lifeNumber <= 0)
	{
		stopGuessTime()
		state.success = false
		state.stopped = true
		printLose()
	}
	writeResultStatus(grid)
}

function cleanLeftData(){
	$('#time').html('')
	$('#life').html('')
	$('#result').html('')
}

function printInfo(text){
	$('#status .info').html(text)
}

function printLose(){
	printInfo("<p class='lose'>You lose!!!!!!!!!!!<a href='javascript:replay()'>Try Again?</a></p>")
}

function hideDataTable(grid, state){
	stopWatchTime()
	$.each($('img'), function(){
		$(this).fadeOut('slow', function(){
			$(this).attr("src", "images/question.jpg")
		})
		$(this).fadeIn('slow')
		});
	triggerGuessPage(grid, state)
	writeResultStatus(grid)
	showLifeInfo(state.lifeNumber)
}

function triggerGuessPage(grid, state){
	t = 5
	$('td').click(function(){
		if(!state.stopped){
			handleResult(grid, this.id, state)
		}
	})
    guessIntervalId = setInterval(function(){displayGuessPage(grid)}, 1000);
	printInfo(grid.condition)

}

function writeResultStatus(grid){
   $('#result').html('Left : ' + grid.leftNumber + '/' + grid.totalNumber)
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