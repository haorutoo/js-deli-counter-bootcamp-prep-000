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

  var element

  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
    katzDeliLine.shift()
    return katzDeliLine
  }
  else {
    return "Currently serving " + katzDeliLine[0] + "."
    //delete katzDeliLine.[0] //.shift()
    //element = katzDeliLine.shift()
    //katzDeliLine = katzDeliLine.slice(1)
    //katzDeli = katzDeli.slice(1)
    katzDeliLine = katzDeliLine.shift()
    katzDeli = katzDeli.shift()
    return katzDeliLine
    return katzDeli
  }

}
