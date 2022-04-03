const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');
const initButtonEl = document.querySelector('#init-button')
const calcButtonEl = document.querySelector('#calc-button')
const resetButtonEl = document.querySelector('#reset-button')
const formEl = document.querySelector('#form')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
})

initButtonEl.addEventListener('click', (e) => {
  hideInitButton()
  renderInputs()
})

calcButtonEl.addEventListener('click', (e) => {
  const isValid = validateInputs()
  if (!isValid) {
    return
  }
  renderResult()
  hideInputs()
})

resetButtonEl.addEventListener('click', (e) => {
  resetPage()
})

function hideInitButton() {
  firstDiv.style.display = 'none'
}
function renderInputs() {
  secondDiv.style.display = 'block'
}
function hideInputs() {
  secondDiv.style.display = 'none'
}
function validateInputs() {
  const peso   = document.getElementById('peso');
  const altura = document.getElementById('altura');
  if (!peso.value) {
    peso.style.border = '1px solid red';
    alert('Voce precisa inserir um peso')
    return false
  }
  if (!altura.value) {
    alert('Voce precisa inserir uma altura')
    altura.style.border = '1px solid red';
    return false
  }
  return true
}
function renderResult() {
    let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
    console.log(imc)
    const result = document.getElementById("resultado");
    if (imc < 18.5) {
        console.log('Magreza | Obesidade: 0');
        result.style.color = 'yellow'
        result.innerHTML = 'Magreza | Obesidade: 0';
    }
    else if (imc >= 18.5 && imc < 20) {
        console.log('Normal | Obesidade: 0');
        result.style.color = 'green'
        result.innerHTML = 'Normal | Obesidade: 0 ';              
    }
    else if (imc >= 25 && imc < 30) {
        console.log('Sobrepeso | Obesidade : I');
        result.style.color = 'red'
        result.innerHTML = 'Sobrepeso | Obesidade : I';
    }
    else if (imc >= 30 && imc < 40) {
        console.log('Obesidade | Obesidade: II');
        result.style.color = 'red'
        result.innerHTML = 'Obesidade | Obesidade: II';
    }
    else {
        console.log('Obesidade grave | Obesidade: III');
        result.style.color = 'red'
        result.innerHTML = 'Obesidade grave | Obesidade: III';
    }
    finalDiv.style.display = 'block'
}
function hideResult() {
  finalDiv.style.display = 'none'
}
function resetPage() {
  const peso   = document.getElementById('peso');
  const altura = document.getElementById('altura');
  peso.value = ''
  altura.value = ''
  renderInputs()
  hideResult()
}

