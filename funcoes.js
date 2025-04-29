// function saudacao(){
//     console.log("Bom dia!")
// }

//arrow function com parametros
// const saudacao = (turno,nome="João")=>{
//     console.log(`${turno} ${nome}`)
// }
// saudacao("Bom dia","Ket")
// saudacao("boa noite")

// const soma = (x,y,z)=>{ x+y+z
   
// }

// const resultadoDaSoma = soma(5,8,9)

// console.log(resultadoDaSoma)

// // subtração 

// const subtracao =(a,b)=>{ return a-b
//  }

//  const resultadoDaSubtracao = subtracao(10,5)
// console.log(resultadoDaSubtracao)

// const soma =(x,y)=> x+y
// const subtracao = (x,y,z,a)=> x-y-z-a
// const multiplicacao =(x,y)=> x*y
// const divisao =(x,y)=> x/y

// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }
// const resultadoDoCalculo = calculo(10,2,5,7)

// console.log("resultado do cálculo",resultadoDoCalculo)

// const calculo = (x,y)=>{
//     return{
//         soma:soma(x,y),
//         subtracao:subtracao(x,y),
//         divisao:divisao(x,y),
//         multiplicacao:multiplicacao(x,y)
//     }
// }

// const resultadoFinalDoCalculo = calculo(20,10)

// console.log("resultado final",resultadoFinalDoCalculo)

// escopo global e local (de bloco ou função)

const escopGlobal = "Escopo Global"

function chamaEscopo(){
    const escopoLocal = "Escopo local"
    console.log(escopoGlobal)
}
console.log(escopoGlobal)
chamaEscopo()