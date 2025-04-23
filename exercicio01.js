// Crie uma variável que seja  um array de objeto que tenha os seguintes pares: chave e valor
// nome da variável => users
// valores=>um objeto com os valores login, password, cursos, sendo cursos um array com dois valores
// renderizar no console a seguinte frase com o primeiro user do array `Meu login é ${password} e faço os cursos x e y`




const users = [
    {login:"ket",
    password:"kitket",
    cursos:["desing","web"],
}
]



console.log(`Meu login é ${users[0].login} e minha senha é ${users[0].password} e faço os cursos ${users[0].cursos[1]}`)