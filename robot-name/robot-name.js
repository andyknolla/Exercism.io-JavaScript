class Robot {
  constructor() {
      this.name = this.generateName();
      this.namesRecord = [];
  }

 generateRandom() {
   	return (Math.random() ).toString(36).substr(2,1) ;
  }
  
 check(char) {
   	if( isNaN(Number(char) )) return true; 
    return false;
  }

 generateName() { 
    let robotName = [];
    while(robotName.length < 2) {
        let random = this.generateRandom();
        if(this.check(random)) {
        robotName.push(random); 
        }
    }
    
    while(robotName.length <5) {
        let random = this.generateRandom();
        if(!this.check(random)) {
            robotName.push(random);
        }
    }
    robotName = robotName.join('').toUpperCase();
    if(!this.namesRecord.includes(robotName)) {
        this.namesRecord.push(robotName);
       return robotName;
    }
    
  }
  reset() {
      this.name = this.generateName();
  }

}

module.exports = Robot;

const lotsaNames = function(robot) {
  let names = [];
	for(var i=0;i<10000;i++) {
  	robot.reset;
    names.push(robot.name);
  }
  return names;
}