function scuberGreetingForFeet(ride=199){
  if(ride <= 400){
 return 'This one is on me!'
 } 
  else if (ride >= 2500){
   return "No can do."
} 
 else if(ride >= 2000){
   return "I will gladly take your thirty bucks."
 }
}



function ternaryCheckCity(city){
   return city === 'NYC'?'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount){
    case "generous":
   let reponse = "Thank you so much."
    return reponse 
    case "not as generous":
      return 'Thank you.'
      default : 
      return 'Bye.'
  }
}
