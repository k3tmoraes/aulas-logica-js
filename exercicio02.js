const produto01 = {
    nome:"garrafa",
    preco: 20.00,
    quantidade: 3
}

const produto02 = {
    nome: "abridor",
    preco: 5.00,
    quantidade: 2
}

const valorFinal = produto01.preco * produto01.quantidade  + produto02.preco * produto02.quantidade
console.log(`"o resultado do calculo é" ${valorFinal}`)
   
   