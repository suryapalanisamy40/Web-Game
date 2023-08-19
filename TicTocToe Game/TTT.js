let boxed = document.getElementsByClassName("box");
let showpop = document.getElementsByClassName("pop");
let value = document.getElementById("content");
// Add X and O function call
let n = 0;
function fun(i) {
  if (n % 2 == 0 && boxed[i].textContent == "") {
    boxed[i].textContent = "X";
    n++;
  }

  if (n % 2 == 1 && boxed[i].textContent == "") {
    boxed[i].textContent = "O";
    n++;
  }
  result(i);
}

// Refresh function
function refresh()
{
 location.reload();
}

// Condition Check function
function result(val) {
  let input = boxed[val].textContent;
  if (
    (boxed[0].textContent == input &&
      boxed[1].textContent == input &&
      boxed[2].textContent == input) ||
    (boxed[0].textContent == input &&
      boxed[3].textContent == input &&
      boxed[6].textContent == input) ||
    (boxed[0].textContent == input &&
      boxed[4].textContent == input &&
      boxed[8].textContent == input) ||
    (boxed[4].textContent == input &&
      boxed[1].textContent == input &&
      boxed[7].textContent == input) ||
    (boxed[2].textContent == input &&
      boxed[5].textContent == input &&
      boxed[8].textContent == input) ||
    (boxed[4].textContent == input &&
      boxed[6].textContent == input &&
      boxed[2].textContent == input) ||
    (boxed[3].textContent == input &&
      boxed[4].textContent == input &&
      boxed[5].textContent == input) ||
    (boxed[6].textContent == input &&
      boxed[7].textContent == input &&
      boxed[8].textContent == input)
  ) {

    showpop[0].classList.toggle("show");
    showpop[0].innerHTML = `${input} Winner`;
    value.innerText = "F5 or Click to restart a game";
    showpop[0].append(value);
  }
  // Match Draw condition
  else if (boxed[0].textContent != "" && boxed[1].textContent != "" && boxed[2].textContent != "" &&
   boxed[3].textContent != "" && boxed[4].textContent != "" &&  boxed[5].textContent != "" &&
    boxed[6].textContent != "" && boxed[7].textContent != "" && boxed[8].textContent != "" 
    ) 
    {
    showpop[0].classList.toggle("show");
    showpop[0].innerHTML = `Match Draw`;
    value.innerText = "F5 or Click to restart a game";
    showpop[0].append(value);
  }
}

