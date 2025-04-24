const valor01 = 50

const valor02 = 20

// && => operador de conjução
// || => operador de disjunção
// ! => negação

// console.log(`${valor01>20 || valor02>30}`) 

const temCarteira = true 
const idade = 15
const resultadoDoTeste = idade>=18 && temCarteira == true


console.log(`${resultadoDoTeste ? "o candidato pode dirigir":"o candidato não pode dirigir"}`)