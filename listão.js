// Todos os exercicios estão em ordem


//1
const dobrar = n => 2 * n;
console.log(dobrar(3));

//2
const saudacao = nome => `Olá, ${nome}, !`
console.log(saudacao("Pedro"));

//3
const somar = n => 5 + n;
console.log(somar(5));

//4
const ehPar = n => n % 2 === 0;
console.log (ehPar(8));
console.log(ehPar(3));

//5
const converter = celcius => (celcius * 9/5) + 32;
console.log(converter(12))

//6
const multiDez = n => n *10;
console.log(multiDez(3));

//7
const idadeEmDias = anos => anos * 365;
console.log(idadeEmDias(20));

//8
const gritar = texto => texto.toUpperCase();
console.log(gritar("texto")) 

//9
const desconto = n => n * 0.05 ;
console.log(desconto(200))

//10
const subtrair = (a, b) => a - b;
console.log(subtrair(100, 65))