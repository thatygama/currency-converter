var value = document.querySelector("#value")
var btnRD = document.querySelector("#btnRD")
var btnRE = document.querySelector("#btnRE")
var btnER = document.querySelector("#btnER")
var btnDR = document.querySelector("#btnDR")
var result = document.querySelector("#result")
var url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"


var error = () => {
    result.innerHTML = "Insert a valid value to convert!"
    result.style.backgroundColor = 'rgb(241, 192, 87)';
        result.style.padding = '5px'
        result.style.marginTop = '8px'
}

//real to dolar
btnRD.addEventListener("click", function(){

    fetch(url).then((res) => {
        return res.json()
    })
    
    .then((data) => {
        var inputValue = value.value
        if (inputValue == ""){
            error()
        } else{
        var actual = data.USDBRL.code
        var base = data.USDBRL.codein
        var rate = data.USDBRL.high
        var resultDolar = inputValue / rate
        
        result.innerHTML = 
        "The conversion of this value from " + base + 
        " to " + actual + " is equal to = " 
        + resultDolar.toLocaleString('pt-BR',{style: 'currency', currency: 'USD'})
        result.style.backgroundColor = 'rgb(241, 192, 87)';
        result.style.padding = '5px'
        result.style.marginTop = '8px'
    }})
    
    })

//real to euro
btnRE.addEventListener("click", function(){

    fetch(url).then((res) => {
        return res.json()
    })
    
    .then((data) => {
        var inputValue = value.value
        if (inputValue == ""){
            error()
        } else{
        var actual = data.EURBRL.code
        var base = data.EURBRL.codein
        var rate = data.EURBRL.high
        var resultEuro = inputValue / rate
        
        result.innerHTML = 
        "The conversion of this value from " + base + 
        " to " + actual + " is equal to = " 
        + resultEuro.toLocaleString('pt-BR',{style: 'currency', currency: 'EUR'})
        result.style.backgroundColor = 'rgb(241, 192, 87)';
        result.style.padding = '5px'
        result.style.marginTop = '8px'
    }})
    })

//dolar to real
btnDR.addEventListener("click", function(){

fetch(url).then((res) => {
    return res.json()
})

.then((data) => {
    var inputValue = value.value
        if (inputValue == ""){
            error()
        } else{
    var base = data.USDBRL.code
    var actual = data.USDBRL.codein
    var rate = data.USDBRL.high
    var resultReal = rate * inputValue
    
    result.innerHTML = 
    "The conversion of this value from " + base + 
        " to " + actual + " is equal to = " 
    + resultReal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    result.style.backgroundColor = 'rgb(241, 192, 87)';
    result.style.padding = '5px'
    result.style.marginTop = '8px'
}})  
})

//euro to real
btnER.addEventListener("click", function(){

    fetch(url).then((res) => {
        return res.json()
    })
    
    .then((data) => {
        var inputValue = value.value
        if (inputValue == ""){
            error()
        } else{
        var base = data.EURBRL.code
        var actual = data.EURBRL.codein
        var rate = data.EURBRL.high
        var resultReal = rate * inputValue
        
        result.innerHTML = 
        "The conversion of this value from " + base + 
        " to " + actual + " is equal to = " 
        + resultReal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
        result.style.backgroundColor = 'rgb(241, 192, 87)';
        result.style.padding = '5px'
        result.style.marginTop = '8px'

    }})
    
    })
