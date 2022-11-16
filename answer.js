function digPow(n, p){
  let totalSum = 0
  n.toString().split("").map(x=>totalSum+=Math.pow(x,p++))
  const result = totalSum%n == 0 ? totalSum/n : -1
  return totalSum%n == 0 ? totalSum/n : -1
}

function digPow(n, p) {
  var initialValue = 0
  var x = String(n).split("").reduce((accumulator, currentValue, index) => accumulator + Math.pow(currentValue, p + index), initialValue)
  return x % n ? -1 : x / n
}

function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}

function digPow(n, p){
  var ans = n.toString().split('')
             .map((v,i) => Math.pow(parseInt(v), i+p))
             .reduce((a,b) => a+b) / n;
  return ans%1 == 0 ? ans : -1;
}
