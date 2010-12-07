function State(){
	this.levels = [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]	
	this.lifeNumber = 3
	this.currentStage = 0
	this.totalScore = 0
	this.success = false
	this.stopped = false
	this.currentLevel = this.levels[this.currentStage]
}

State.prototype.getNextStageLevel = function()  {
	return this.getCurrentLevel(++this.currentStage)
}

State.prototype.getCurrentLevel = function()  {
	var totalLevels = this.levels.length
	if(this.currentStage < totalLevels){
		return this.levels[this.currentStage]
	}
	return this.levels[totalLevels  - 1]
	
}