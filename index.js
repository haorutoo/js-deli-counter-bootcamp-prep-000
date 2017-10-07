var katzDeli = [];

function takeANumber(katzDeliLine,name){

  katzDeliLine.push(name)
  katzDeli.push(name)

  var counter = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + counter + " in line."

  return katzDeliLine
  return katzDeli
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine[0] + "."
    delete katzDeliLine[0] //.shift()
    return katzDeliLine
  }

}
