let score= {
  win:0,
  lost:0,
  tie:0,
}


function generateComputerChoice(){
  // let choice;
  let randomNum=Math.random()*3;
  if(randomNum>0 && randomNum<=1) {
    return 'Bat';
  }else if (randomNum>1 && randomNum<=2){
    return 'Ball';
  }else{
    return 'Stump'
  }

  // return choice
}


function getResult(userMove, computerMove){
  if(userMove==='Bat'){
    if(computerMove==='Bat'){
      score.tie++;
      return `It's a tie`;
    }else if(computerMove==='Ball'){
      score.win++;
      return `User won`;
    }else if(computerMove==='Stump'){
      score.lost++
      return 'Computer won';
    }
  }
  else if(userMove==="Ball"){
    if(computerMove==='Bat'){
      score.lost++;
      return 'Computer won';
    }else if(computerMove==='Ball'){
      score.tie++;
      return `It's a tie`;
    }else if(computerMove==='Stump'){
      score.win++;
      return `User won`;
    }
  }
  else{
    if(computerMove==='Bat'){
      score.win++;
      return 'User won';
    }else if(computerMove==='Ball'){
      score.lost++;
      return `Computer won`;
    }else if(computerMove==='Stump'){
      score.tie++;
      return `It's a tie`;
    }
  }
}


function showResult(userMove, computerMove,result){
  alert(`You've chosen ${userMove}. Computer choice is ${computerMove}. ${result}.
    Won:${score.win} ,Lost: ${score.lost},Tie: ${score.tie}`)
}



