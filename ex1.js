
// exemplo sobre a padronagem de versao js 
num=10;
console.log(num);


/*******************************/
var x= 'valor 1';
let y='valor 2';
console.log(x,y)

var x= 'valor 3';
console.log(x,y)

const B=12;
console.log(B)


// contatenação de strings
let s1,s2,s3;
s1='Bom '
s2='dia'
s3='pessoal'

let resp1,resp2;
resp1 =s1 +'' + s2;
console.log(resp1);

resp2 = resp1+ '' + s3;
console.log(resp2);



// template de string ${}

let val1,val2,val3;
val1='Boa tarde';
val2= 'Boa noite';
val3=`Bom dia \n ${val1} \n ${val2}`

console.log(val3)



// Dois exemplos de contatenaçao diferentes 

let num1,num2;
num1=5;
num2=7;

console.log('resultado da soma de '+num1+' e '+num2+' = '+(num1+num2));
console.log(`Resultado da soma de ${num1} e ${num2} = ${(num1+num2)}`);

// Mensagem para o usuario - Caixa de alerta
alert('Revisao da caixa de alerta');

// Caixa de confirmação da um retorno pra mim no console true se for ok e false se cancelar
let confirmaçao = confirm('Deseja realmente cancelar a ação');
console.log (confirmaçao)

// Caixa de mensagem para digitar dados de entrada
let mensagem=prompt('Digite um texto qualquer:')
// se eu por o console vai aparecer la no console
console.log(mensagem)


// conversao de tipos

// inteiro =parseInt("10");
// flutuante=parseFloat("1.55");
num1= parseInt(prompt('Digite um numero inteiro:'));
num2= parseFloat(prompt('Digite um numero qualquer:'));
console.log(num1)
console.log(num2)