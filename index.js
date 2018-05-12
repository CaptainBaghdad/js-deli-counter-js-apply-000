function takeANumber(katzDeliLine, newPerson){
  var num = katzDeliLine.length;
  num++;
	if (katzDeliLine.length === 0){
    console.log('the line is empty');
  }	
   
   katzDeliLine.push(newPerson);

   return "Welcome, " + newPerson + "." + " " + "You are number " + num.toString() + " " + "in line" + ".";


  




}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  
  return "The line is currently: " + katzDeliLine.shift() + ".";
}

