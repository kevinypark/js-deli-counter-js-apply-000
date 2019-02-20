arr = ['kevin', 'humzah']
takeANumber(arr, "joe")
function takeANumber(currentLine, customerName) {
  currentLine.push(customerName);
  
  return 'Welcome, ' + customerName + '. You are number ' + currentLine.length + ' in line.';
}
var ticketNumber = 0;
function takeANumberAlt(currentLine) {
  ticketNumber++;
  currentLine.push(ticketNumber);
  return ticketNumber;
  
}

function nowServing(katzDeliLine) {
  var answer = '';
  if(katzDeliLine.length === 0) {
    answer = 'There is nobody waiting to be served!';
  }
  else if(katzDeliLine.length > 0) {
    answer = 'Currently serving ' + katzDeliLine.shift() + '.'; 
  }
  return answer;
}

function currentLine(katzDeliLine) {
  var answer = '';
  var lineInString = [];

//if the line is empty
  if(katzDeliLine.length === 0) {
    answer = 'The line is currently empty.'
  }
  else if (katzDeliLine.length > 0) {
//for loop to convert array into string
    for(var i=0;i<katzDeliLine.length;i++) {
     lineInString.push((i+1) + '. ' + katzDeliLine[i]);
    }
  answer = 'The line is currently: ' + lineInString.join(', ');
  }
  return answer;
}