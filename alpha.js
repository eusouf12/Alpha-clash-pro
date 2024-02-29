// function play(){
//     const homeSection = document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     // playground section 
//      const playgroundSection = document.getElementById('playground');
//      playgroundSection.classList.remove('hidden');
  
//console.log('Play Now');
   
// }
function handleKeyboardPress(event){
   const playerPress = event.key;
   //stop game
   if( playerPress ==='Escape')
   {
    gameOver();
   }
   const currentAlpaShow = document.getElementById('current-alph');
   const currentAlpabet = currentAlpaShow.innerText;
   const expectAlpa = currentAlpabet.toLocaleLowerCase();

   // check
   if(playerPress == expectAlpa)
   {
    //update a score
    // // 1.get current score 
    // const currentScore = document.getElementById('score');
    // const currentScoreText = currentScore.innerText;
    // const currentScoreNum = parseInt(currentScoreText);
    // const newScore = currentScoreNum +1;
    // currentScore.innerText = newScore;
    console.log('Play Now');  
    const currentScore = getElementValueById('score');
    const newScore = currentScore + 1;
    setElementValueById('score',newScore);

    // start a new round 
    removeBgcolorById(expectAlpa);
    continueGame();
   }
   else
   {
    console.log('Not Play Now');
    const currentLife = getElementValueById('life');
    const newLife = currentLife - 1;
    setElementValueById('life',newLife);
    if(newLife == 0)
    {
       gameOver();
    }
   }
}

document.addEventListener('keyup',handleKeyboardPress);

function continueGame()
{
    // step 1-- generate random alphabet
    const alphabet =  getRandomAlphabet();

    // set alphabet 
    const currentAlphabet = document.getElementById('current-alph');
    currentAlphabet.innerText = alphabet;

    // setbg color 
     setBgcolorById(alphabet);



}

function play(){
    hideElementByid('home');
    hideElementByid('score-section');
    showElementByid('playground');
    // reset score and life
    setElementValueById('life',5);
    setElementValueById('score',0);
   // removeBgcolorById('');

    continueGame();
}


// another way 

function hideElementByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBgcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBgcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText =element.innerText;
    const elementNum = parseInt(elementText);
    return elementNum;
}

function setElementValueById(elementId,value){
    const element = document.getElementById(elementId);
        element.innerText = value;
}

function gameOver(){
    hideElementByid('playground');
    showElementByid('score-section');
    // updAte final score
    const lastScore =getElementValueById('score');
    setElementValueById('final-score',lastScore);

    // clear the last selected element
    const cAlpa = getElementTextById('current-alph');
    removeBgcolorById(cAlpa);

}

function getElementTextById(elementId){
    const element =document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet(){
    const alpaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpa = alpaString.split('');
    // console.log(alpa);

    // get random index 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alpa[index];
    return alphabet;
}
