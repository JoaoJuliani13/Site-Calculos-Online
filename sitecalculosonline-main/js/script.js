/*----------------------------calculadora-----------------------------------------*/

function calculo(x){
    var numero = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = numero + x
}

function apagar(){
    document.getElementById("res").innerHTML = "" 
}

function apg1(){
    var resultado = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById("res").innerHTML
    if(resultado.length > 0){
        document.getElementById("res").innerHTML = eval(resultado)
    }
    else{
        document.getElementById("res").innerHTML = "Inválido"
    }
}

/*----------------------------------------------------------------------------------*/





/*----------------------------REGRA DE 3--------------------------------------------*/
function regra3(){
let numb1 = document.querySelector("#num1")
let numb2 = document.querySelector("#num2")
let numb3 = document.querySelector("#num3")
let resposta = document.querySelector("#res3")

if(numb1.value.length == 0 || numb2.value.length == 0 || numb3.value.length == 0){
    alert("ERRO! Digite os 3 valores.")
}else{
    let n1 = Number(numb1.value)
    let n2 = Number(numb2.value)
    let n3 = Number(numb3.value)

    let resultado3 = (n3*n2)/n1
    resposta.innerHTML = resultado3.toFixed(1)
}
}


document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        var btn = document.querySelector("#btncalcular")
        btn.click()
    }
})
/*----------------------------------------------------------------------------------*/



/*----------------------------PORCENTAGEM-------------------------------------------*/
function porcentagem1(){
    let input1 = document.querySelector("#numer1")
    let input2 = document.querySelector("#numer2")
    let pp1 = document.querySelector("#pp1")

    if(input1.value.length == 0 || input2.value.length == 0){
        alert("ERRO! Digite os 2 valores.")
    }else{
        let numer1 = Number(input1.value)
        let numer2 = Number(input2.value)

        let resultadoporcentagem = (numer1*numer2)/100
        pp1.innerHTML = resultadoporcentagem.toFixed(1)
    }
}

function porcentagem2(){
    let inputt1 = document.querySelector("#numerr1")
    let inputt2 = document.querySelector("#numerr2")
    let pp2 = document.querySelector("#pp2")

    if(inputt1.value.length == 0 || inputt2.value.length == 0){
        alert("ERRO! Digite os 2 valores")
    }else {
        let numerr1 = Number(inputt1.value)
        let numerr2 = Number(inputt2.value)

        let resultadoporcentagem2 = (numerr1/numerr2)*100
        pp2.innerHTML = resultadoporcentagem2.toFixed(1) + "%"
    }
}


function aumentpercen(){
    let inputAP1 = document.querySelector("#numerAP1")
    let inputAP2 = document.querySelector("#numerAP2")
    let resAP = document.querySelector("#pp3")

    if(inputAP1.value.length == 0 || inputAP2.value.length == 0){
        alert("ERRO! Digite os 2 valores.")
    }else{
        let n1AP = Number(inputAP1.value)
        let n2AP = Number(inputAP2.value)

        let res = ((n2AP - n1AP) / n1AP)*100
        resAP.innerHTML = `${res.toFixed(2)}%`
        if(res < 0){resAP.innerHTML = "Inválido."}
    }
}

function diminpercen(){
    let inputDP1 = document.querySelector("#numerDP1")
    let inputDP2 = document.querySelector("#numerDP2")
    let resDP = document.querySelector("#pp4")

    if(inputDP1.value.length == 0 || inputDP2.value.length == 0){
        alert("ERRO! Digite os 2 valores.")
    }else{
        let n1DP = Number(inputDP1.value)
        let n2DP = Number(inputDP2.value)

        let res = ((n1DP- n2DP) / n1DP)*100
        resDP.innerHTML = `${res.toFixed(2)}%`

        if(n1DP < n2DP){
            resDP.innerHTML = "Inválido."
        }
    }
}
/*---------------------------------------------------------------------------*/



/*----------------------------MMC--------------------------------------------*/
function mmc(){
    let inputmmc1 = document.querySelector("#n1mmc")
    let inputmmc2 = document.querySelector("#n2mmc")
    resmmc = document.querySelector("#resmmc")

    let n1 = Number(inputmmc1.value)
    let n2 = Number(inputmmc2.value)

    if(inputmmc1.value.length == 0 || inputmmc2.value.length == 0){
        alert("ERRO! Digite os 2 valores.")} else{
            let maior = Math.max(n1, n2)
            let menor = Math.min(n1, n2)

            let i = maior
            while(i % menor !== 0){
            i+= maior
            }

            resmmc.innerHTML = i
        }      
}


document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        var btn = document.querySelector("#btnmmc")
        btn.click()
    }
})
/*---------------------------------------------------------------------------*/

/*----------------------------MDC--------------------------------------------*/
function mdc(){
    let inputmdc1 = document.querySelector("#n1mdc")
    let inputmdc2 = document.querySelector("#n2mdc")
    resmdc = document.querySelector("#resmdc")

    let n1 = Number(inputmdc1.value)
    let n2 = Number(inputmdc2.value)

    if(inputmdc1.value.length == 0 || inputmdc2.value.length == 0){
        alert("ERRO! Digite os 2 valores.")} 
        else{
            while(n1 !== n2){
            if(n1 > n2) 
                {n1 -= n2;
                }else {
                n2 -= n1;
                }
            }
            resmdc.innerHTML = n1
        }
}



document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        var btn = document.querySelector("#btncalcular")
        btn.click()
    }
})
/*-----------------------------------------------------------------------------*/



/*----------------------------FATORIAL------------------------------------------*/
function fatorial(){
    let num1fatorial = document.querySelector("#numfatorial")
    let resfatorial = document.querySelector("#resfatorial")
    
    let n1 = Number(num1fatorial.value)

    let fatorial = n1

    for(cont = 1; cont < n1; cont++){
    fatorial = fatorial*(n1-cont)
    }

    resfatorial.innerHTML = `${n1}! = ${fatorial}`
}


document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        var btn = document.querySelector("#btnfatorial")
        btn.click()
    }
})
/*----------------------------------------------------------------------------*/


/*------------------------------ÁREAS-----------------------------------------*/



/*-------------------------Área Triângulo-------------------------------------*/
function areatriangulo(){
    let inputbasetriangulo= document.querySelector("#basetriangulo")
    let inputalturatriangulo= document.querySelector("#alturatriangulo")
    let resultadotriangulo = document.querySelector("#restriangulo")

    n1base = Number(inputbasetriangulo.value)
    n2altura = Number(inputalturatriangulo.value)

    if(inputbasetriangulo.value.length == 0 || inputalturatriangulo.value.length == 0){
        alert("Erro! Digite os 2 valores.")
    }else{
        let res = (n1base*n2altura) / 2
        resultadotriangulo.innerHTML = `Área = ${res}`
    }
}
/*----------------------------------------------------------------------------*/

/*--------------------------Área do Quadrado----------------------------------*/
function areaquadrado(){
    let inputladoquadrado= document.querySelector("#ladoquadrado")
    let resultadoquadrado = document.querySelector("#resquadrado")

    n1lado = Number(inputladoquadrado.value)

    if(inputladoquadrado.value.length == 0){
        alert("Erro! Digite o valor.")
    }else{
        let res = n1lado*n1lado
        resultadoquadrado.innerHTML = `Área = ${res}`
    }
}
/*--------------------------------------------------------------------------*/

/*--------------------------Área do Losango--------------------------------*/
function arealosango(){
let inputDlosango = document.querySelector("#Dlosango")
let inputdlosango = document.querySelector("#dlosango")
let resultadolosango = document.querySelector("#reslosango")

n1D = Number(inputDlosango.value)
n2d = Number(inputdlosango.value)

if(inputDlosango.value.length == 0 || inputdlosango.value.lenght == 0){
    alert("ERRO! Digite os 2 valores.")
}else{
    let res = (n1D*n2d) / 2
    resultadolosango.innerHTML = `Área = ${res}`
}
}
/*------------------------------------------------------------------------*/


/*--------------------------Área do Retângulo-----------------------------*/

function arearetangulo(){
    let inputbaseretangulo= document.querySelector("#baseretangulo")
    let inputalturaretangulo= document.querySelector("#alturaretangulo")
    let resultadoretangulo = document.querySelector("#resretangulo")

    n1baseret = Number(inputbaseretangulo.value)
    n2alturaret = Number(inputalturaretangulo.value)

    if(inputbaseretangulo.value.length == 0 || inputalturaretangulo.value.length == 0){
        alert("Erro! Digite os 2 valores.")
    }else{
        let res = n1baseret*n2alturaret
        resultadoretangulo.innerHTML = `Área = ${res}`
    }
}
/*-------------------------------------------------------------------------*/

/*-------------------------Área Trapézio-----------------------------------*/
function areatrapezio(){
    let inputBtrapezio = document.querySelector("#baseMtrapezio")
    let inputbtrapezio = document.querySelector("#basemtrapezio")
    let inputalturatrapezio = document.querySelector("#alturatrapezio")
    let restrapezio = document.querySelector("#restrapezio")

    let n1B = Number(inputBtrapezio.value)
    let n2b = Number(inputbtrapezio.value)
    let naltura = Number(inputalturatrapezio.value)

    if(inputBtrapezio.value.length == 0 || inputbtrapezio.value.length == 0 || inputalturatrapezio.value.length == 0){
        alert("ERRO! Digite os 3 valores.")
    }else{
        let res = ((n1B + n2b) * naltura) / 2
        restrapezio.innerHTML = `Área = ${res}`
    }
}
/*-------------------------------------------------------------------------*/

/*-------------------------Área do Círculo---------------------------------*/
function areabola(){
    let inputraio = document.querySelector("#raiobola")
    let resbola = document.querySelector("#resbola")

    let n1raio = Number(inputraio.value)

    if(inputraio.value.length == 0){
        alert("ERRO! Digite o valor do raio.")
    }else{
        let res = n1raio * n1raio * Math.PI
        resbola.innerHTML = `Área = ${res.toFixed(2)}`
    }
}
/*------------------------------------------------------------------------*/