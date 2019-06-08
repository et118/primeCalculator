var primes = [2];
var seconds;
var data = new Blob(["2"], {type: "text/plain"});
var url = window.URL.createObjectURL(data);
document.getElementById("download_link").href = url;
function primtal() {
  primes = [2];
  const max = document.getElementById("input").value;
  const time_div = document.getElementById("seconds");
  const done_div = document.getElementById("Done");
  done_div.innerHTML = "";
  document.getElementById("primtal").innerHTML = "";
  var yes = 1;
  const start = new Date()
  for(i = 3; i <= max; i = i + 2) {
    var kvadrat = Math.sqrt(i);
    for(x = 0; x <= primes.length; x++) {
      if(primes[x] <= kvadrat) {
        if(i % primes[x] == 0) {
          yes = 0;
          break;
      }
      } else {
        break;
      }
    }
    if(yes == 1) {
      primes.push(i);
    }
    yes = 1;
  }
  seconds = (new Date - start) / 1000;
  time_div.innerHTML = seconds + ".s " + primes.length + " primes";
  done_div.innerHTML = "Done";
  const separator = document.getElementById("separator").value;
  if(separator == "") {
    primes = primes.join(",");
  } else {
    primes = primes.join(separator)
  }
  data = new Blob([primes], {type: "text/plain"});
  url = window.URL.createObjectURL(data);
  document.getElementById("download_link").href = url;
}
function view() {
  const prime_div = document.getElementById("primtal");
  prime_div.innerHTML = primes;
}