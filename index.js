function scuberGreetingForFeet(distance){
  let result;
   if(distance<400){
    result='This one is on me!';
   }
   else if((distance>2000) && (distance<2501)){
      result='I will gladly take your thirty bucks.';
      }
      else{
          result='No can do.';
        }
      
   
   return result;
}

function ternaryCheckCity(city){
  let result;
  result=city==='NYC'?'Ok, sounds good.':'No go.';
  return result;

}

function switchOnCharmFromTip(res){
  let result;
  switch(res){
    case 'generous':
      result='Thank you so much.';
      break;

    case 'not as generous':
      result='Thank you.';
      break;
    default:
      result='Bye.';
  }
  return result;
}