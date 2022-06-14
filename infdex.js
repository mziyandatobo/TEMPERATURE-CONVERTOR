function tempCon() {
  let celcius = document.getElementById("celcius").value;
  let answer = celcius * 1.8 + 32;
  console.log(answer);
  document.querySelector("#answer").innerHTML = answer;
}
