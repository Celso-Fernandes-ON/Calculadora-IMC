import {Modal} from './modal.js'
import {AlertError} from'./alert-error.js'
const form = document.querySelector('form')
const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event){
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value
    const result = IMC(weight,height)
    
    const showAlertError = notNumber(weight) || notNumber(height)
    
    if (showAlertError){
        AlertError.open()
        return;
    }
    AlertError.close()

    const message = `Seu IMC é de ${result}`
    Modal.Message.innerText = message
    Modal.open()
    console.log(result)   
}
function notNumber(value){
    return isNaN(value) || value == ""
}
function IMC(weight,height){
    return (weight / ((height / 100) **2)).toFixed(2)
}