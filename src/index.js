module.exports = function solveEquation(equation) {
  // your implementation


var str_a = new String(), str_b = new String(), str_c = new String();
var sign_a = +1, sign_b, sign_c;
var pos = 0;

for (var i = 0; i < equation.length; ++i)
{
var ch = equation[i];
if ((ch != ' ') && (ch != '*'))
{
str_a += ch;
}
else if (ch == '*')
{
pos = i + 1;
break;
}
}

for (var i = pos; i < equation.length; ++i)
{
var ch = equation[i];
if (ch == '+')
{
sign_b = +1;
}
else if (ch == '-')
{
sign_b = -1;
}
else if (!isNaN(ch) && (equation[i - 1] != '^'))
{
str_b += ch;
}
else if (ch == '*')
{
pos = i + 1;
break;
}
}

for (var i = pos; i < equation.length; ++i)
{
var ch = equation[i];
if (ch == '+')
{
sign_c = +1;
}
else if (ch == '-')
{
sign_c = -1;
}
else if (!isNaN(ch))
{
str_c += ch;
}
}

var a = sign_a * parseInt(str_a);
var b = sign_b * parseInt(str_b);
var c = sign_c * parseInt(str_c);

var d = b * b - 4 * a * c;
var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

if (x2 > x1)
return [x1, x2];
else
return [x2, x1];


  
  
 // return arr.push(x1,x2).sort();
}
