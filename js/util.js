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

function handleResult(grid, value, player){
		if(!grid.handleClickEvent(value)){
			showLifeInfo(--player.lifeNumber)
			$('#'+ value +' img').attr("src", "images/sad.jpeg")
			
		}
		else{
			$('#'+ value +' img').attr("src", "images/" + grid.content[value])
		}
		if(grid.leftNumber == 0)
		{
			stopGuessTime()
			cleanLeftData()
			$('#main').html("<p class='win'>You win!!!!!!!!!!!</p>")
		}
		if(player.lifeNumber <= 0)
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