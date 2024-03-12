totalResults = 0;
totalResults2 = 0;
let playTracker1=3
let playertracker2=3;
let playPermission1=true
let playPermission2=false
//player 1
  function rolling() {
    let rolledNumber = document.getElementById("diceNumber").value
    let result = document.getElementById("rollResults")
    let resultImage = document.getElementById("resultImages")
    let points = document.getElementById("results")
  
    let results = 0;
    let values = [];
    let images = [];

      for (let i = 0; i < rolledNumber; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value)
      images.push(`<img src="./images/${value} dice.png" alt="dice ${value}"> `)
      if(playTracker1>0){
        results += values[i];
        totalResults = results + totalResults
      }else{
        totalResults=0;
      }
      
    }
  
    result.textContent = (`Dice Rolled:${values.join(', ')}`)
    resultImage.innerHTML = images.join(' ')
    points.textContent = (`Points:${totalResults}`);

  }
//player two
 function rolling2() {
    let rolledNumber2 = document.getElementById("diceNumber2").value
    let result2 = document.getElementById("rollResults2")
    let resultImage2 = document.getElementById("resultImages2")
    let points2 = document.getElementById("results2")
  
    let results2 = 0;
    let values2 = [];
    let images2 = [];
  
for (let i = 0; i < rolledNumber2; i++) {
      const value2 = Math.floor(Math.random() * 6) + 1;
      values2.push(value2)
      images2.push(`<img src="./images/${value2} dice.png" alt="dice ${value2}"> `)
      if(playertracker2 >0){
        results2 += values2[i];
        totalResults2 = results2 + totalResults2
      }else{
        // totalResults=0;
        totalResults2=0;
      }
      
    }
    result2.textContent = (`Dice Rolled:${values2.join(', ')}`)
    resultImage2.innerHTML = images2.join(' ')
    points2.textContent = (`Points:${totalResults2}`);
  
}

                   
  
  














