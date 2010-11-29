var watchIntervalId
var guessIntervalId

$(document).ready(function() {
	$("input[name='level']:radio").change(function(){
		sessionStorage.insurance = $("input:radio[name='level']:checked").val()
		location.reload()
	})
	if(sessionStorage.insurance)
	{
		$("input:radio[name='level']").filter("[value="+sessionStorage.insurance+"]").attr("checked","checked");
	}
	var grid = new Grid(sessionStorage.insurance)
	var state = new State()
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
    $('#time').html('Time is up!!')
	return true
    
}

function showLifeInfo(life){
   $('#life').html('Life :' + life)
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
			$('#main').html("<p class='win'>You win!!!!!!!!!!!</p>")
		}
		if(state.lifeNumber <= 0)
		{
			stopGuessTime()
			printLose()
			cleanLeftData()
		}
		writeResultStatus(grid)
}

function cleanLeftData(){
	$('#time').html('')
	$('#life').html('')
	$('#result').html('')
}

function printLose(){
	$('#main').html("<p class='lose'>You lose!!!!!!!!!!!</p>")
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
		handleResult(grid, this.id, state)
	})
    guessIntervalId = setInterval(function(){displayGuessPage(grid)}, 1000);
	$('#condition').html(grid.condition)

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