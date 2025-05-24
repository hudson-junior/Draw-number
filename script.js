const buttonDraw = document.getElementById("button-draw")

function drawNumber() {
  const smallerNumber = document.getElementById("smaller").value;
  const biggerNumber = document.getElementById("bigger").value;
  const result = document.getElementById("result");
  const loader = document.getElementById("loader");

  // Validação básica
  if (smallerNumber === "" || biggerNumber === "") {
    // Mostra o carregamento
    loader.style.display = "block";
    result.innerHTML = "";

    // Espera 1 segundo para simular sorteio
    setTimeout(() => {
      result.innerHTML = result.innerHTML = "Preencha ambos os campos.";
      loader.style.display = "none";
    }, 1000);
    return;
  }

  const numMin = Number(smallerNumber);
  const numMax = Number(biggerNumber);

  if (isNaN(numMin) || isNaN(numMax)) {
    // Mostra o carregamento
    loader.style.display = "block";
    result.innerHTML = "";
    // Espera 1 segundo para simular sorteio
    setTimeout(() => {
      result.innerHTML = result.innerHTML = "Valores inválidos.";
      loader.style.display = "none";
    }, 1000);
    return;
  }
  
  if (numMin === numMax) {
    // Mostra o carregamento
    loader.style.display = "block";
    result.innerHTML = "";
    // Espera 1 segundo para simular sorteio
    setTimeout(() => {
      result.innerHTML = result.innerHTML = "Os números não podem ser iguais.";
      loader.style.display = "none";
    }, 1000);
    return;
  }
  
  if (numMin > numMax) {
    // Mostra o carregamento
    loader.style.display = "block";
    result.innerHTML = "";
    // Espera 1 segundo para simular sorteio
    setTimeout(() => {
      result.innerHTML = result.innerHTML = "O mínimo não pode ser maior que o máximo.";
      loader.style.display = "none";
    }, 1000);
    return;
  }

  // Mostra o carregamento
  loader.style.display = "block";
  result.innerHTML = "";

  // Espera 1 segundo para simular sorteio
  setTimeout(() => {
    const resultDraw = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    result.innerHTML = `Número sorteado entre ${numMin} e ${numMax}: ${resultDraw}`;
    loader.style.display = "none";
  }, 1000);
}

buttonDraw.addEventListener("click", drawNumber)