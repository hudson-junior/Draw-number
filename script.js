const buttonDraw = document.getElementById("button-draw")

function drawNumber () {
  const smallerNumber = document.getElementById("smaller").value
  const biggerNumber = document.getElementById("bigger").value
  const result = document.getElementById("result")

  const resultDraw = Math.floor((((Math.random()) * (biggerNumber - smallerNumber + 1)) + Number(smallerNumber)))
  result.innerHTML = (resultDraw)
}

buttonDraw.addEventListener("click", drawNumber)