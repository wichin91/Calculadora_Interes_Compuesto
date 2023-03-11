const rateTime = ["Anual", "Semestral", "Mensual", "Quincenal", "Semanal"]
const periodTime = ["Años", "Semestre", "Meses", "Quincenas", "Semanas"]
const ratioList = [365, 182, 30, 15, 7]

let amountInput = document.getElementById("amount")
let amountReset = document.querySelector(".calc-amount-reset")

let rateInput = document.getElementById("rate")
let rateSelect = document.getElementById("rate-time")

let interestSelect = document.getElementById("interest")

let periodInput = document.getElementById("period")
let periodSelect = document.getElementById("period-time")

let calcButton = document.getElementById("button-calc")
let resetButton = document.getElementById("button-reset")

let result = document.getElementById("result")


for (let i = 0; i < rateTime.length+1; i++) {
    const opt1 = document.createElement('option')
    if (i == 0) {
        opt1.value = "Selecciona"
        opt1.innerHTML = "Selecciona uno"
    } else {
        opt1.value = rateTime[i-1]
        opt1.innerHTML = rateTime[i-1]
    }
    const opt2 = opt1.cloneNode(true)
    rateSelect.appendChild(opt1)
    interestSelect.appendChild(opt2)
}

for (let i = 0; i < periodTime.length+1; i++) {
    const opt = document.createElement('option')
    if (i == 0) {
        opt.value = "Selecciona"
        opt.innerHTML = "Selecciona uno"
    } else {
        opt.value = periodTime[i-1]
        opt.innerHTML = periodTime[i-1]
    }
    periodSelect.appendChild(opt)
}

amountReset.addEventListener("click", ()=>amountInput.value = "")
calcButton.addEventListener("click", calculate)
resetButton.addEventListener("click", reset)

function calculate() {
    const valorInitial = amountInput.value
    const tasaInteres = rateInput.value
    const plazo = periodInput.value

    if (rateSelect.selectedIndex == 0 || 
    interestSelect.selectedIndex == 0 || 
    periodSelect.selectedIndex == 0) {
        alert("Seleccione alguno \n de los periodos.")
    } else {
        const rateRatio = ratioList[rateSelect.selectedIndex-1]
        const interestRatio = ratioList[interestSelect.selectedIndex-1]
        const periodRatio = ratioList[periodSelect.selectedIndex-1]

        const tasaCapital = (tasaInteres/rateRatio) * interestRatio
        const plazosCapital = (plazo*periodRatio) / interestRatio

        let resultado = valorInitial * 
            Math.pow((1+(tasaCapital/100)),plazosCapital)
        
        result.value = resultado.toLocaleString('en-US')
        console.log(resultado);
    }
}

function reset() {
    amountInput.value = ""
    rateInput.value = ""
    rateSelect.firstChild.selected = true
    interestSelect.firstChild.selected = true
    periodInput.value = ""
    periodSelect.firstChild.selected = true
    result.value = ""
}