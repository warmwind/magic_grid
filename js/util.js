var watchIntervalId
var guessIntervalId
var state = new State()

$(document).ready(function() {
	printInfo("<span>Welcome To Magic Grid of TWers. Good Luck! </span> <br/><br/><br/><br/> <a href='javascript:drawMainPage()'>Start!</a>")
});

var timeCountDown = state.getCurrentLevel() * 2;
function drawMainPage(){
	stopWatchTime()
	stopGuessTime()
	var grid = new Grid(state.getNextStageLevel())
	timeCountDown = state.getCurrentLevel() * 2
    watchIntervalId = setInterval(function(){displayWatchPage(grid, state)}, 1000);
	writeTable(grid)
	showLifeInfo(state.lifeNumber)
	showScoreInfo(state.totalScore)
	cleanLeftData()
}


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
	if(timeCountDown >= 0 )
    {
       $('#time').html('<span>' + timeCountDown-- + '</span>')
       return false
    }
	cleanLeftData()
	return true
    
}

function showLifeInfo(life){
	var str = '<div>'
	for(var i = 0; i< life; i++){
		str += "<img src = 'images/life.jpg'>"
	}
	str += "</div>"
    $('#life').html(str)		
}

function showScoreInfo(score){
	$('#score').html("Score: " + score)
}

function nextStage(){

	$('header .info').html("")
	state.stopped = false
	drawMainPage()
}
function handleResult(grid, value, state){
	if(!grid.handleClickEvent(value)){
		showLifeInfo(--state.lifeNumber)
		$('#'+ value +' .back img').attr("src", "images/sad.jpg")
	}
	else{
		$('#'+ value +' .back img').attr("src", "images/" + grid.content[value] +".jpg")
	}
	if(grid.leftNumber == 0)
	{
		stopGuessTime()
		cleanLeftData()
		state.success = true
		state.stopped = true
		state.totalScore += 100
		printInfo("<span class='win'>Congratulations! </span><a href='javascript:nextStage()'>Go Next!</a>")
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
	$('#result').html('')
	printInfo('')
}

function printInfo(text){
	$('#status .info').html(text)
}

function printLose(){
	printInfo("<span class='lose'>You lose! </span><a href='javascript:replay()'>Try Again?</a>")
}

function hideDataTable(grid, state){
	stopWatchTime()
	$.each($('.front img'), function(){
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
	timeCountDown = state.getCurrentLevel() * 3
	$('td').click(function(){
		if(!state.stopped){
			handleResult(grid, this.id, state)
		}
	})
    guessIntervalId = setInterval(function(){displayGuessPage(grid)}, 1000);
	printInfo(grid.displayCondition)

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