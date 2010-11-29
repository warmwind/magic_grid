var images = ['gaoli', 'huangliang', 'hukai','jiangpeng','jinming','limo','liuyao','luowenjing','michaelchen','tony','xiongjie','xuhao','zhanglin','zhengye']


function RandomGenerator(){
}

RandomGenerator.generateCondition = function(content){
	var randomnumber = generateNumberWithin(content.length)
	return 'find grid with name : ' + content[randomnumber]
}

RandomGenerator.generateContent = function(size){
	var result = new Array()
	var candidateArray  = RandomGenerator.generateCandidateContent(size)
	for (var i = 0; i < size * size; i++) {
		var randomnumber = generateNumberWithin(size)
		result.push(candidateArray[randomnumber])
	}
	return result
}

RandomGenerator.generateCandidateContent = function(size){
	var result = new Array()
	for(var i = 0; i < size; i++){
		var randomnumber = generateNumberWithin(images.length)
		result.push(images[randomnumber])
	}
	return result
}

function generateNumberWithin(size){
	return Math.floor(Math.random() * size)
}


