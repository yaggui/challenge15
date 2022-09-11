function numberValid(){
  let numberOne;
  do {
    numberOne=Math.floor(Math.random()*7);
  } while (numberOne==0);
  return numberOne;
}
function rollCraps(){
  const diceOne=numberValid();
  const diceTwo=numberValid();
  alert(`Dado1: ${diceOne}`+"\n"+`Dado2: ${diceTwo}`);
  return diceOne+diceTwo;
}
function fieldBet(){
  const addCraps=rollCraps();
  switch (addCraps) {
    case 2:
    case 12:
      alert(`Sacaste: ${addCraps} Ganaste el doble!!`);
      break;
    case 3:
    case 4:
    case 9:
    case 10:
    case 11:
      alert(`Sacaste: ${addCraps} Ganaste!!`);
    default:
      alert(`Sacaste: ${addCraps} Lo siento Perdiste!!`);
      break;
  }
}
function under7Bet(){
  const addCraps=rollCraps();
  if(addCraps<7){
    alert(`Sacaste: ${addCraps} Ganaste!!`);
  }else{
    alert(`Sacaste: ${addCraps} Lo siento Perdiste!!`);
  }
}
function about7Bet() {
  const addCraps=rollCraps();
  if(addCraps>7){
    alert(`Sacaste: ${addCraps} Ganaste!!`);
  }else{
    alert(`Sacaste: ${addCraps} Lo siento Perdiste!!`);
  }
}
function snakeEyesBet(){
  const addCraps=rollCraps();
  if(addCraps==2 || addCraps==12){
    alert(`Sacaste: ${addCraps} Ganaste 30 veces lo que apostaste!!`);
  }else{
    alert(`Sacaste: ${addCraps} Lo siento Perdiste!!`);
  }
}