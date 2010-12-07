$(document).ready(function() {
	$('#main-all').html(allImages())
	$("#main-all td").hover(function() {
		$(this).css({'z-index' : '10'}); /*Add a higher z-index value so this image stays on top*/ 
		$(this).find('img').addClass("hover").stop() /* Add class of "hover", then stop animation queue buildup*/
			.animate({
				marginTop: '0', /* The next 4 lines will vertically align this image */ 
				marginLeft: '0px',
				top: '50%',
				left: '50%',
				width: '80px', /* Set new width */
				height: '80px' /* Set new height */
			}, 200); /* this value of "200" is the speed of how fast/slow this hover animates */

		} , function() {
		$(this).css({'z-index' : '0'}); /* Set z-index back to 0 */
		$(this).find('img').removeClass("hover").stop()  /* Remove the "hover" class , then stop animation queue buildup*/
			.animate({
				marginTop: '0px', /* Set alignment back to default */
				marginLeft: '0px',
				top: '0',
				left: '0',
				width: '50px', /* Set width back to default */
				height: '50px', /* Set height back to default */
			}, 200);
	});
	

})

function allImages(){
	var dataTable =""
	dataTable += "<table>"
	var colAndRowNumber = Math.sqrt(images.length)
	var idIndex = 0
	var nameIndex = 0
	for(var rowIndex = 0; rowIndex < colAndRowNumber; rowIndex++){
		dataTable += "<tr>"
		for(var colIndex = 0; colIndex < colAndRowNumber; colIndex++){
			content = images[idIndex]
	 		dataTable += "<td class= 'all-panel' id='" + idIndex++ +"'>" + 
			"<div class='all-front'><img src='images/" + content + ".jpg' alt='" + content + "' /></div>"

		}
		dataTable += "<tr class='all-name'>"
		for(var colIndex = 0; colIndex < colAndRowNumber; colIndex++){
			content = images[nameIndex++]
	 		dataTable += "<td class= 'all-panel' >" + 
			people[content] 
		}
	}
	dataTable += "</table>"
	return dataTable
}

