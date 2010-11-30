test("get next level", function(){
	var state = new State()
	equals(2, state.getNextStageLevel())
	equals(2, state.getNextStageLevel())
	equals(2, state.getNextStageLevel())
	equals(3, state.getNextStageLevel())
	equals(3, state.getNextStageLevel())
	equals(3, state.getNextStageLevel())
	equals(3, state.getNextStageLevel())
	equals(4, state.getNextStageLevel())
	equals(4, state.getNextStageLevel())
})
test("get last level when reach last", function(){
	var state = new State()
	state.currentStage = state.levels.length - 1
	equals(5, state.getNextStageLevel())
})
