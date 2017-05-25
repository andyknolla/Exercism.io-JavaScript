class School {
    constructor() { 
        this.schoolRoster = {};
    }

    add(name, grade) {
        if(!this.schoolRoster[grade]) {
            this.schoolRoster[grade] = [name];
        } else {
            this.schoolRoster[grade].push(name);
        }
    }

    roster() {   
        this.sortEachGrade()     
        return this.schoolRoster;
    }

    grade(grade) {
        if(this.schoolRoster[grade]) {
            return this.schoolRoster[grade].sort();
        } else return [];
    }

    sortEachGrade() {
        for(let grade in this.schoolRoster) {
            if(this.schoolRoster.hasOwnProperty(grade)) {
                this.schoolRoster[grade].sort()
            }  
        }
        return this.schoolRoster;
    }
}
module.exports = School;