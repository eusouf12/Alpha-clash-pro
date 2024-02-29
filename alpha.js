// function play(){
//     const homeSection = document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     // playground section 
//      const playgroundSection = document.getElementById('playground');
//      playgroundSection.classList.remove('hidden');
  
//console.log('Play Now');
   
// }
function continueGame()
{
    // step 1-- generate random alphabet
    const alphabet =  getRandomAlphabet();
    console.log('your random alphabet',alphabet);

    // set alphabet 
    const currentAlphabet = document.getElementById('current-alph');
    currentAlphabet.innerText = alphabet;

    // setbg color 
     setBgcolorById(alphabet);



}

function play(){
    hideElementByid('home');
    showElementByid('playground');
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
