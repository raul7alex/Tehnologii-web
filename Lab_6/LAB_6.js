function Problema_1(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function Problema_2(str,pos) {
    var newString = "";
    for (var i = 0; i < str.length ; i++) {
        if(i==pos-1) i++;
		newString += str[i];
    }
    return newString;
}

function Problema_3(x) {
	if(x%3==0) 
  if(x%7==0) console.log("Divisible by 3 and 7");
	else console.log("Divisible by 3");
 else {if(x%7==0) console.log("Divisible by 7");
	else console.log("Not divisible by 3 or 7");
  
}

function Problema_4(x) {
return !isNaN(x); //Stands for “is Not a Number”, if variable is not a number, it return true, else return false.
}

function Problema_5() {
var V = [10, 20, 30, 40] 
var sum = 0;
for (var i = 0; i < V.length; i++) {
  sum += V[i]
}
  return sum;
}

function Problema_6(V,x) {
    for (var i = 0; i < V.length; i++) {
        if (V[i] === x) {
            return true;
        }
    }
    return false;
}

function Roman(x) {
    if (isNaN(x))
        return NaN;
    var cif = String(+x).split(""),
        lit = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (lit[+cif.pop() + (i * 10)] || "") + roman;
    return Array(+cif.join("") + 1).join("M") + roman;
}



