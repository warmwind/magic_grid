var names = ['JP', 'Micheal Chen', 'Xiao Luo', 'Hu Kai', 'Huang Liang', 'Zheng Dada', 'Liu Yao', 'Gao Li', 'Wu Shaobo']
var images = ['fu_ying.png', 'gao_li.png', 'hu_kai.png', 'huang_liang.png', 'liu_yao.png', 'xiao_luo.png', 'zheng_da_da.png']


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


