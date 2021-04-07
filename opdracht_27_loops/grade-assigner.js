function  assignGrade(score) {
    
    
    for (score >= 60; score <=100; score++){   
        
    if (score >= 90) {
        return console.log('A '+score);
    } else if (score >= 80) {
        return console.log('B '+score);
    } else if (score >= 70) {
        return console.log('C '+score);
    } else if (score >= 65) {
        return console.log('D '+score);
    } else {
        return console.log('E '+score);
    }
    }
    
}
 assignGrade(51)