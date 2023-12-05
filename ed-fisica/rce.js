var alt
var cin
var gen
var result = "Sua Razão Cintura-Estatura é "

function erro(x){
    try{
        if(isNaN(x)) throw "Por favor, digite apenas números"
    }catch (err) {
        alert(err)
    }
}

function rce1(){
    alt = document.getElementById("alt").value
    cin = document.getElementById("cin").value

    rce = (cin/alt).toFixed(2)

    erro(rce)
    console.log(rce)

    fun(rce)
}

function fun(x){
    console.log(rce)
    gen = document.getElementById('ge').value;

    if (gen === 'm'){
        if (x > 0.52){
           document.getElementById("result").innerHTML = result + x + "; Você está acima do ponto de corte masculino (0.52)."
        }else if (x < 0.52) {
            document.getElementById("result").innerHTML = result + x + "; Você está abaixo do ponto de corte masculino (0.52), que é o ideal."
        }
    }else if (gen === 'f'){
        if (x > 0.53){
           document.getElementById("result").innerHTML = result + x + "; Você está acima do ponto de corte feminino (0.53)"
        }else if (x < 0.53) {
            document.getElementById("result").innerHTML = result + x + "; Você está abaixo do ponto de corte feminino (0.   53), que é o ideal."
        }
    }
}