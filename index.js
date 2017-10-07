var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var counter = katzDeliLine.length + 1
  katzDeliLine.push('Welcome, ${name}. You are number ${counter} in line.')
}

function currentLine(katzDeliLine){

  var i = 0 
  var order = i + 1
  var list 
  var string = "The line is currently: "

  
  for (i = 0, i < katzDeliLine.length, i++){
    list = katzDeliLine.push("${order}. ")
  }
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
```
