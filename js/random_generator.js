var images = ['fubo', 'gaoli', 'huangliang', 'hukai','jiangpeng','jinming','limo', 'liufan', 'liuyao','luowenjing','michaelchen',
              'renjing', 'sunlong', 'sunyan', 'tony', 'wangxia', 'wangxiaosheng', 'wushaobo', 'xiajie', 'xiaopeng', 'xiongjie',
              'xuhao','zhanglei', 'zhanglin','zhangxiaoqing', 'zhengye']
var people = {
	'fubo' : 'Fu Bo',
	'gaoli' : 'Gao Li',
	'huangliang': 'Huang Liang',
	'hukai': 'Hu Kai',
	'jiangpeng': 'Jiang Peng',
	'jinming': 'Jin Ming',
	'limo': 'Li Mo',
	'liufan': 'Liu Fan',
	'liuyao': 'Liu Yao',
	'luowenjing' : 'Luo Wenjing',
	'michaelchen': 'Chen Jinzhou',
	'renjing': 'Ren Jing',
	'sunlong': 'Sun Long',
	'sunyan': 'Sun Yan',
	'tony': 'Qiao Liang',
	'wangxia': 'Wang Xia',
	'wangxiaosheng': 'Wang Xiaosheng',
	'wushaobo': 'Wu Shaobo',
	'xiajie': 'Xia Jie',
	'xiaopeng': 'Xiao Peng',
	'xiongjie': 'Xiong Jie',
	'xuhao': 'Xu Hao',
	'zhanglei': 'Zhang Lei',
	'zhanglin': 'Zhang Lin',
	'zhangxiaoqing': 'Zhang Xiaoqing',
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


