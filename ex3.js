let a= parseFloat(prompt('Digite o a da equaçao: '))
let b= parseFloat(prompt('Digite o b da equaçao: '))
let c= parseFloat(prompt('Digite o c da equaçao: '))

let delta = b**2 - (4*a*c)
let x1 = (-b+delta**0.5)/(2*a)
let x2 = (-b-delta**0.5)/(2*a)
alert('As raizes da equação são: ' + ' ' + x1 + ' e ' + x2)