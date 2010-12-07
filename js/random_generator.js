var images = ['changxin', 'fubo', 'fuying', 'gaoli', 'huangliang', 'hukai','jiangpeng','jiangqingsong', 'jiayongna', 'jinming','limo', 
              'liufan', 'liuyao','lixiang', 'luowenjing','michaelchen', 'peixinrui', 'renjing', 'sunlong', 'sunyan', 'tony', 
              'wangxia', 'wangxiaosheng', 'wangyuheng','wushaobo', 'xiajie', 'xiaopeng', 'xiongjie', 'xiongzichuan', 'xuhao',
              'zhanglei', 'zhanglin','zhangxiaoqing', 'zhengye', 'zhangyuheng', 'zhouxiaoqiang']
var people = {
	'changxin': 'Chang Xin',
	'fubo' : 'Fu Bo',
	'fuying': 'Fu Ying',
	'gaoli' : 'Gao Li',
	'huangliang': 'Huang Liang',
	'hukai': 'Hu Kai',
	'jiangpeng': 'Jiang Peng',
	'jiangqingsong': 'Jiang Qingsong',
	'jiayongna': 'Jia Yongna',
	'jinming': 'Jin Ming',
	'limo': 'Li Mo',
	'liufan': 'Liu Fan',
	'liuyao': 'Liu Yao',
	'lixiang': 'Li Xiang',
	'luowenjing' : 'Luo Wenjing',
	'michaelchen': 'Chen Jinzhou',
	'peixinrui': 'Pei Xinrui',
	'renjing': 'Ren Jing',
	'sunlong': 'Sun Long',
	'sunyan': 'Sun Yan',
	'tony': 'Qiao Liang',
	'wangxia': 'Wang Xia',
	'wangxiaosheng': 'Wang Xiaosheng',
	'wangyuheng': 'Wang Yuheng',
	'wushaobo': 'Wu Shaobo',
	'xiajie': 'Xia Jie',
	'xiaopeng': 'Xiao Peng',
	'xiongjie': 'Xiong Jie',
	'xiongzichuan': 'Xiong Zichuan',
	'xuhao': 'Xu Hao',
	'zhanglei': 'Zhang Lei',
	'zhanglin': 'Zhang Lin',
	'zhangxiaoqing': 'Zhang Xiaoqing',
	'zhengye': 'Zheng Ye',
	'zhangyuheng': 'Zhang Yuheng',
	'zhouxiaoqiang': 'Zhou Xiaoqiang'
	}

function RandomGenerator(){
}

RandomGenerator.generateCondition = function(content){
	var randomnumber = generateNumberWithin(content.length)
	return content[randomnumber]
}


RandomGenerator.generateContent = function(size){
	var result = new Array()
	var candidateArray  = RandomGenerator.generateCandidateContent(3)
	for (var i = 0; i < size * size; i++) {
		var randomnumber = generateNumberWithin(3)
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


