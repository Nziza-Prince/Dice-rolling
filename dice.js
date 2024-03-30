totalResults = 0;
totalResults2 = 0;
let playTracker=0
let playPermission1=true
let playPermission2=false
let rolledNumber = document.getElementById("diceNumber").value
//player 1
  function rolling() {
    let result = document.getElementById("rollResults")
    let resultImage = document.getElementById("resultImages")
    let points = document.getElementById("results")
  
    let results = 0;
    let values = [];
    let images = [];
   if(rolledNumber>0&&rolledNumber<=6){
     for (let i = 0; i < rolledNumber; i++) {
     const value = Math.floor(Math.random() * 6) + 1;
     values.push(value)
     images.push(`<img src="./images/${value} dice.png" alt="dice ${value}"> `)
    results=values[i]
    totalResults=results+totalResults;
   }
 
   result.textContent = (`Dice Rolled:${values.join(', ')}`)
   resultImage.innerHTML = images.join(' ')
   points.textContent = (`Points:${totalResults}`);
   
  }
  else{
    alert("the number you entered was invalid Try following the rules player one")
  }
  rolling2()
  setTimeout( ()=>{
    if(playTracker===2)
  if(totalResults > totalResults2){
  rolledNumber.value=1
   playTracker=0
   alert("You won Dude congs 🎉🎉🎉🎊")
   window.location.reload()
  }
  else if(totalResults < totalResults2){
   rolledNumber.value=1 
   playTracker=0
   alert("You lost bro try again later 🙇🙇🙇‍♂️")
   window.location.reload()
  }
  else{
  rolledNumber.value=1
   playTracker=0
   alert("That was a tie 😅😅😮‍💨😮‍💨")
   window.location.reload()
  }
  playTracker++
  },100)
  }
//player two
 function rolling2() {
    let rolledNumber2 = rolledNumber;
   let result2 = document.getElementById("rollResults2")
    let resultImage2 = document.getElementById("resultImages2")
    let points2 = document.getElementById("results2")
  
    let results2 = 0;
    let values2 = [];
    let images2 = [];
    if(rolledNumber2>0&&rolledNumber2<=6){
      for (let i = 0; i < rolledNumber2; i++) {
            const value2 = Math.floor(Math.random() * 6) + 1;
            values2.push(value2)
            images2.push(`<img src="./images/${value2} dice.png" alt="dice ${value2}"> `)
            
            results2=values2[i]
            totalResults2=results2+totalResults2;
       }
          result2.textContent = (`Dice Rolled:${values2.join(', ')}`)
          resultImage2.innerHTML = images2.join(' ')
          points2.textContent = (`Points:${totalResults2}`);

    }
  else{
    alert("the number you entered was invalid try following the rules player two")
  }
}

                   
  
  














