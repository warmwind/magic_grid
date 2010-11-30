var images = ['gaoli', 'huangliang', 'hukai','jiangpeng','jinming','limo','liuyao','luowenjing','michaelchen','tony','xiongjie','xuhao','zhanglin','zhengye']
var people = {
	'gaoli' : 'Gao Li',
	'huangliang': 'Huang Liang',
	'hukai': 'Hu Kai',
	'jiangpeng': 'Jiang Peng',
	'jinming': 'Jin Ming',
	'limo': 'Li Mo',
	'liuyao': 'Liu Yao',
	'luowenjing' : 'Luo Wenjing',
	'tony': 'Qiao Liang',
	'michaelchen': 'Chen Jinzhou',
	'xiongjie': 'Xiong Jie',
	'xuhao': 'Xu Hao',
	'zhanglin': 'Zhang Lin',
	'zhengye': 'Zheng Ye'
	}

function RandomGenerator(){
}

RandomGenerator.generateCondition = function(content){
	var randomnumber = generateNumberWithin(content.length)
	return content[randomnumber]
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


