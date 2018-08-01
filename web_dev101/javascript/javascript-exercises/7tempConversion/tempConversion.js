var ftoc = function(temp) {
  let cTemp = 0;
  cTemp = (temp - 32) * .5556;
  cTemp = Math.round(cTemp*10)/10;
  return cTemp;
}

var ctof = function(temp) {
  let fTemp=0;
  fTemp = temp*1.8+32;
  fTemp = Math.round(fTemp * 10) / 10;
  return fTemp;
}

module.exports = {
  ftoc,
  ctof
}
