let degrau= parseFloat(prompt('Digite a altura do degrau, em metros: '))
let total= parseFloat(prompt('Digite a altura que quer alcançar, em metros: '))
alert(`Você deverá subir ${total/degrau}`)

resp = Math.round(total/degrau);
console.log(resp);