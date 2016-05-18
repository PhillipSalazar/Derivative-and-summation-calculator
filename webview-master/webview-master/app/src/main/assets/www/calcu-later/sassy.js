
// function for string

function fruit() {
var cat;
var o = document.getElementById('in').value;
var xy = document.getElementById('xz').value;
var top = document.getElementById('top').value;;
var t = parseFloat(top);
var x = parseFloat(xy);
var sum = 0;


/*  if(o.indexOf("^"))
  {
    cat = Math.pow(xy,top);
    sum += cat;
    return sum;
    console.log("what?");
  }
  else if (o.indexOf("+"))
  {
    cat = eval(o);
    sum += cat;
    return sum;
    console.log("blah?");
  } else {
    console.log("fuck");
  }
*/
for (x; x <= t; x++)
{
  cat = eval(o);
  sum += cat;
  return sum;
  console.log("blah?");


 //console.log(w);
 }
 document.getElementById('blah').innerHTML = sum;
 console.log("???");
