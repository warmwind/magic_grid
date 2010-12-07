$(document).ready(function() {
	$('#main-all').html(allImages())

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
